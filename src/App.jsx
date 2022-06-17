import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const schema = z
  .object({
    firstName: z.string().min(10),
    lastName: z.string().min(10),
    email: z.string().email(),
    password: z.string().min(5),
    confirmPassword: z.string().min(5),
    country: z.string(),
    dateOfBirth: z.date(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password and Confirm Password must match",
        path: ["password"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password and Confirm Password must match",
        path: ["confirmPassword"],
      });
    }
    if (!data.country || data.country === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Country is required",
        path: ["country"],
      });
    }
  });

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const resp = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2"
      );
      const data = await resp.json();
      setCountriesData(
        data
          .map((country) => ({
            value: country.cca2,
            label: country.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label))
      );
    };

    getCountries();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formFirstname">
                <Form.Label>Firstname</Form.Label>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue={""}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Form.Control
                      type="text"
                      placeholder="Firstname"
                      onChange={onChange}
                      value={value}
                      ref={ref}
                      isInvalid={errors.firstName}
                    />
                  )}
                />
                {errors.firstName?.message && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.firstName.message}
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formLastname">
                <Form.Label>Lastname</Form.Label>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Lastname"
                      {...field}
                      isInvalid={errors.lastName}
                    />
                  )}
                />
                {errors.lastName?.message && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.lastName.message}
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter email"
                      {...field}
                      isInvalid={errors.email}
                    />
                  )}
                />
                {errors.email?.message && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.email.message}
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      {...field}
                      isInvalid={errors.password}
                    />
                  )}
                />
                {errors.password?.message && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.password.message}
                  </div>
                )}
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicConfirmPassword"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                      isInvalid={errors.confirmPassword}
                    />
                  )}
                />
                {errors.confirmPassword?.message && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.confirmPassword.message}
                  </div>
                )}
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formBasicCountry">
                <Form.Label>Country of birth</Form.Label>
                {countriesData.length > 0 && (
                  <Controller
                    name="country"
                    control={control}
                    defaultValue={""}
                    render={({ field }) => (
                      <Select
                        options={countriesData}
                        value={countriesData.find(
                          (c) => c.value === field.value
                        )}
                        ref={field.ref}
                        onChange={(val) => field.onChange(val.value)}
                      />
                    )}
                  />
                )}
                {errors.country?.message && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.country.message}
                  </div>
                )}
              </Form.Group>
              <Form.Group as={Col} controlId="formDateOfBirth">
                <Form.Label>Date of birth</Form.Label>
                <Controller
                  name={"dateOfBirth"}
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      placeholderText="Select date"
                      onChange={(date) => {
                        console.log(date);
                        field.onChange(date);
                      }}
                      selected={field.value}
                    />
                  )}
                />
                {errors.dateOfBirth?.message && (
                  <div style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.dateOfBirth.message}
                  </div>
                )}
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

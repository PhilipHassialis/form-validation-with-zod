import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import FormDate from "./components/FormDate";
import FormString from "./components/FormString";
import FormDropdown from "./components/FormDropdown";
import { newuser as newuserSchema } from "./schemas/newuser";

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newuserSchema),
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
              <FormString
                control={control}
                fieldName={"firstName"}
                label="Firstname"
                formControlId={"formFirstname"}
                errors={errors}
                placeholder={"Type your first name"}
              />
              <FormString
                control={control}
                fieldName={"lastName"}
                label="Lastname"
                formControlId={"formLastname"}
                errors={errors}
                placeholder={"Type your surname"}
              />
            </Row>
            <Row>
              <FormString
                control={control}
                fieldName={"email"}
                label="Email address"
                formControlId={"formBasicEmail"}
                errors={errors}
                placeholder={"Type your email"}
              />
            </Row>
            <Row>
              <FormString
                control={control}
                fieldName={"password"}
                label="Password"
                formControlId={"formBasicPassword"}
                errors={errors}
                placeholder={"Type your password"}
                type="password"
              />
              <FormString
                control={control}
                fieldName={"confirmPassword"}
                label="Confirm Password"
                formControlId={"formBasicConfirmPassword"}
                errors={errors}
                placeholder={"Confirm your password"}
                type="password"
              />
            </Row>
            <Row className="mb-3">
              <FormDropdown
                control={control}
                fieldName={"country"}
                label="Country of Birth"
                formControlId={"formBasicCountry"}
                errors={errors}
                placeholder={"Select your country of birth"}
                dropdownData={countriesData}
              />
              <FormDate
                control={control}
                errors={errors}
                label={"Date of Birth"}
                formControlId={"formDateOfBirth"}
              />
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

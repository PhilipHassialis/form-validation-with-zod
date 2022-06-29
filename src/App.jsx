import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormDate from "./components/UI/FormDate";
import FormString from "./components/UI/FormString";
import FormDropdown from "./components/UI/FormDropdown";
import { newuser as newuserSchema } from "./schemas/newuser";
import { useCountriesData } from "./hooks/dataHooks";
import PhonesList from "./components/Phone/PhoneList";

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newuserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      countryOfBirth: "",
      dateOfBirth: null,
      phones: [],
    },
  });

  const {
    fields: fieldPhones,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "phones",
  });

  const { countriesData, countriesLoading } = useCountriesData();

  const submitForm = (data) => {
    console.log(data);
  };

  return countriesLoading ? (
    <div>Loading...</div>
  ) : (
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
                type="email"
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
                fieldName={"countryOfBirth"}
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
                fieldName={"dateOfBirth"}
                placeHolder={"Select your date of birth"}
              />
            </Row>
            <Row>
              <Col>
                <PhonesList
                  fieldPhones={fieldPhones}
                  append={append}
                  remove={remove}
                  errors={errors}
                  control={control}
                />
              </Col>
            </Row>

            <Row style={{ marginTop: "1rem" }}>
              <Col sm={2}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

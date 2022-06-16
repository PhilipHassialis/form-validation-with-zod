import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
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

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="formFirstname">
              <Form.Label>Firstname</Form.Label>
              <Controller
                name="text"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Form.Control
                    type="text"
                    placeholder="Firstname"
                    {...field}
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
            <Form.Group className="mb-3" controlId="formLastname">
              <Form.Label>Lastname</Form.Label>
              <Controller
                name="text"
                control={control}
                defaultValue=""
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
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
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
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

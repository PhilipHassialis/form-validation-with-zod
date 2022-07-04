import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProductsData } from "../../hooks/dataHooks";
import FormSpinner from "../UI/FormSpinner";
import Product from "../Product/Product";

const EmployeeProductSelection = () => {
  const { productsData, productsLoading } = useProductsData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      products: [],
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Card>
        <Card.Header>Product Representation</Card.Header>
        <Card.Body>
          {productsLoading ? (
            <FormSpinner message="Loading products..." />
          ) : (
            <Row>
              <Col>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {productsData.products.map((product, idx) => (
                    <Product
                      key={product.id}
                      product={product}
                      control={control}
                      register={register}
                      fieldName={"products"}
                      errors={errors}
                    />
                  ))}
                  <Row>
                    <Col>
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmployeeProductSelection;

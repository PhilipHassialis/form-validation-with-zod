import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Table,
  Accordion,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProductsData } from "../../hooks/dataHooks";
import FormSpinner from "../UI/FormSpinner";
import Product from "../Product/Product";
import {
  getProductCategories,
  getProductsPerCategory,
} from "../../utils/productUtils";
import { capitalizeFirstLetter } from "../../utils/commonUtils";

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
                  {getProductCategories(productsData.products).map(
                    (category) => (
                      <Accordion style={{ marginBottom: "0.5em" }}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            {capitalizeFirstLetter(category)}
                          </Accordion.Header>
                          <Accordion.Body>
                            <Table striped bordered>
                              <thead>
                                <tr>
                                  <th>Select</th>
                                  <th>Title</th>
                                  <th>Price</th>
                                  <th>Brand</th>
                                  <th>Thumbnail</th>
                                </tr>
                              </thead>
                              <tbody>
                                {getProductsPerCategory(
                                  productsData.products,
                                  category
                                ).map((product) => (
                                  <Product
                                    key={product.id}
                                    product={product}
                                    control={control}
                                    register={register}
                                    fieldName={"products"}
                                    errors={errors}
                                  />
                                ))}
                              </tbody>
                            </Table>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    )
                  )}

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

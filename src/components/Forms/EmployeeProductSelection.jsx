import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Table,
  Accordion,
  Modal,
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
import { useState } from "react";

const EmployeeProductSelection = () => {
  const { productsData, productsLoading } = useProductsData();

  const [clickedProduct, setClickedProduct] = useState({});

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

  const onRowClick = (product) => {
    setClickedProduct(product);
  };

  const modalClose = () => {
    setClickedProduct({});
  };

  return (
    <Container>
      {clickedProduct.id && (
        <Modal
          size="lg"
          show={clickedProduct.id}
          onHide={modalClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {capitalizeFirstLetter(clickedProduct.title)} - Product
              Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>{clickedProduct.description}</Col>
            </Row>
            <Row>
              {clickedProduct.images.map((image) => (
                <Col>
                  <img src={image} width={100} />
                </Col>
              ))}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
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
                            <Table
                              striped
                              bordered
                              hover
                              style={{ cursor: "pointer" }}
                            >
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
                                    onRowClick={onRowClick}
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

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
import { useProductsData } from "../../hooks/dataHooks";
import FormSpinner from "../UI/FormSpinner";
import Product from "../Product/Product";
import {
  getProductCategories,
  getProductsPerCategory,
} from "../../utils/productUtils";
import { capitalizeFirstLetter } from "../../utils/commonUtils";
import { useState } from "react";
import ProductModal from "../Product/ProductModal";
import { useNavigate } from "react-router-dom";
import Confirmation from "../UI/Confirmation";
import { useSelectedProducts } from "../../store/employeeData";

const EmployeeProductSelection = () => {
  const { productsData, productsLoading } = useProductsData();

  const [clickedProduct, setClickedProduct] = useState({});
  const [showConfirmBack, setShowConfirmBack] = useState(false);

  const selectedProducts = useSelectedProducts(
    (state) => state.selectedProducts
  );
  const setSelectedProducts = useSelectedProducts(
    (state) => state.setSelectedProducts
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    control,
  } = useForm({
    defaultValues: {
      products: selectedProducts,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setSelectedProducts(data.products);
    navigate("/Review");
  };

  const onRowClick = (product) => {
    setClickedProduct(product);
  };

  const modalClose = () => {
    setClickedProduct({});
  };

  const backHandler = () => {
    if (isDirty) {
      setShowConfirmBack(true);
    } else {
      navigate("/employeeRegistration");
    }
  };

  return (
    <Container>
      <Confirmation
        showCondition={showConfirmBack}
        okClickHandler={() => {
          navigate("/employeeRegistration");
        }}
        okTitle="Ok"
        cancelHandler={() => {
          setShowConfirmBack(false);
        }}
        cancelTitle="Cancel"
        confirmMessage={
          "You have changed products selection. If you go back the selection will be lost. Are you sure you want to go back?"
        }
        confirmTitle={"Confirmation"}
      />
      {clickedProduct.id && (
        <ProductModal clickedProduct={clickedProduct} modalClose={modalClose} />
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
                      <Accordion
                        key={`category_${category}`}
                        style={{ marginBottom: "0.5em" }}
                      >
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
                                    formControlId={`product_${product.id}`}
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
                    <Col sm={{ offset: 8, span: 2 }}>
                      <Button
                        style={{ width: "100%" }}
                        variant="secondary"
                        onClick={backHandler}
                      >
                        Back
                      </Button>
                    </Col>
                    <Col sm={2}>
                      <Button style={{ width: "100%" }} type="submit">
                        Submit
                      </Button>
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

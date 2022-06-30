import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormDate from "../UI/FormDate";
import FormString from "../UI/FormString";
import FormDropdown from "../UI/FormDropdown";
import { useProductsData } from "../../hooks/dataHooks";
import FormSpinner from "../UI/FormSpinner";

const EmployeeProductSelection = () => {
  const { productsData, productsLoading } = useProductsData();

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
                {productsData.products.map((product) => (
                  <Row key={product.id} style={{ margin: "0.5em" }}>
                    <Col>
                      <input type="checkbox" name={product.id} />
                    </Col>
                    <Col>{product.title}</Col>
                    <Col>{product.price}</Col>
                    <Col>{product.brand}</Col>
                    <Col>{product.category}</Col>
                    <Col>
                      <img
                        src={product.thumbnail}
                        width={100}
                        alt={product.title}
                      />
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmployeeProductSelection;

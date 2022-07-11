import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEmployeeData, useSelectedProducts } from "../../store/employeeData";
import EmployeeReview from "../Review/EmployeeReview";

const ReveiewScreen = () => {
  const employeeData = useEmployeeData((state) => state.employeeData);
  const selectedProducts = useSelectedProducts(
    (state) => state.selectedProducts
  );

  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/productSelection");
  };

  return (
    <Container>
      <Card>
        <Card.Header>Review</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <h3>Your information</h3>
              <EmployeeReview employeeData={employeeData} />
            </Col>
          </Row>

          <Row>
            <Col>
              <h3>Your selected products</h3>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col sm={{ offset: 8, span: 2 }}>
              <Button
                style={{ width: "100%" }}
                variant="secondary"
                type="submit"
                onClick={backHandler}
              >
                Back
              </Button>
            </Col>
            <Col sm={2}>
              <Button style={{ width: "100%" }} variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ReveiewScreen;

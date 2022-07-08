import { Col, Container, Row } from "react-bootstrap";

const InvalidRoute = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Invalid Route</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            The route you are trying to access is invalid. Please check the URL
            and try again.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default InvalidRoute;

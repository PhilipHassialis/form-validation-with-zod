import { Col, Container, Row } from "react-bootstrap";
import { useEmployeeData } from "../../store/employeeData";

const EmployeeReview = ({ employeeData }) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>First name</Col>
        <Col>{employeeData.firstName}</Col>
        <Col sm={2}>Last name</Col>
        <Col>{employeeData.lastName}</Col>
      </Row>
      <Row>
        <Col sm={2}>Email</Col>
        <Col>{employeeData.email}</Col>
        <Col sm={2}>Phones</Col>
        <Col>
          {employeeData.phones.map((phone, indx) => (
            <div key={indx}>
              {phone.phone}({phone.phoneType})
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col sm={2}>Date of birth</Col>
        <Col>{employeeData.dateOfBirth.getTime()}</Col>
        <Col sm={2}>Country of birth</Col>
        <Col>{employeeData.countryOfBirth}</Col>
      </Row>
    </Container>
  );
};

export default EmployeeReview;

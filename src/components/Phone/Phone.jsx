import { Row, Col } from "react-bootstrap";
import { phoneCategories } from "../../schemas/newuser";
import FormDropdown from "../UI/FormDropdown";
import FormString from "../UI/FormString";

const phoneData = phoneCategories.map((cat) => ({
  value: cat,
  label: cat,
}));

const Phone = ({ control, errors, fieldName }) => {
  return (
    <Row>
      <Col sm={4}>
        <Row>
          <FormDropdown
            control={control}
            dropdownData={phoneData}
            errors={errors}
            fieldName={`${fieldName}.phoneType`}
            formControlId={`${fieldName}.phoneType`}
            label={"Phone Category"}
            placeholder="Select phone type"
          />
        </Row>
      </Col>
      <Col sm={6}>
        <Row>
          <FormString
            control={control}
            errors={errors}
            fieldName={`${fieldName}.phone`}
            label={"Phone"}
            placeholder={"Please type your phone"}
            formControlId={`${fieldName}.phone`}
          />
        </Row>
      </Col>
      <Col sm={2}></Col>
    </Row>
  );
};

export default Phone;

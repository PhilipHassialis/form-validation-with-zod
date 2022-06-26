import { get } from "react-hook-form";
import { Row, Col, Button } from "react-bootstrap";
import { initialPhoneType, phoneCategories } from "../../schemas/newuser";
import FormDropdown from "../UI/FormDropdown";
import FormString from "../UI/FormString";
import React from "react";

const phoneData = phoneCategories.map((cat) => ({
  value: cat,
  label: cat,
}));

const Phone = ({ control, errors, fieldName, append, remove, index }) => {
  return (
    <Row>
      <Col sm={3}>
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
      <Col sm={3} style={{ marginTop: "2rem" }}>
        <Button
          variant="warning"
          style={{ marginRight: "2px" }}
          onClick={() => remove(index)}
        >
          Remove
        </Button>
        <Button
          variant="success"
          onClick={() => append({ ...initialPhoneType })}
        >
          New Phone
        </Button>
      </Col>
    </Row>
  );
};

export default React.memo(Phone);

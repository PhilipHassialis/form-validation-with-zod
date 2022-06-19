import { Form, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDate = ({ formControlId, label, control, errors }) => {
  return (
    <Form.Group as={Col} controlId={formControlId}>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={"dateOfBirth"}
        control={control}
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => {
              field.onChange(date);
            }}
            selected={field.value}
          />
        )}
      />
      {errors.dateOfBirth?.message && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>
          {errors.dateOfBirth.message}
        </div>
      )}
    </Form.Group>
  );
};

export default FormDate;

import { Form, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { get } from "react-hook-form";

const FormDate = ({
  formControlId,
  label,
  control,
  errors,
  fieldName,
  placeHolder,
}) => {
  const myErrs = get(errors, fieldName);

  return (
    <Form.Group as={Col} controlId={formControlId}>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={fieldName}
        control={control}
        render={({ field }) => (
          <DatePicker
            customInput={
              <input
                className={`form-control ${myErrs?.message && "is-invalid"} `}
              />
            }
            placeholderText={placeHolder}
            onChange={(date) => {
              field.onChange(date);
            }}
            selected={field.value}
            dateFormat="dd/MM/yyyy"
          />
        )}
      />
      {myErrs?.message && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>{myErrs.message}</div>
      )}
    </Form.Group>
  );
};

export default FormDate;

import { get } from "react-hook-form";
import { Form, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";

const FormString = ({
  formControlId,
  label,
  placeholder,
  control,
  errors,
  fieldName,
  type = "text",
}) => {
  const myErrs = get(errors, fieldName);

  return (
    <Form.Group as={Col} className="mb-3" controlId={formControlId}>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={fieldName}
        control={control}
        defaultValue={""}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Control
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            ref={ref}
            isInvalid={myErrs}
          />
        )}
      />
      {myErrs?.message && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>{myErrs.message}</div>
      )}
    </Form.Group>
  );
};

export default FormString;

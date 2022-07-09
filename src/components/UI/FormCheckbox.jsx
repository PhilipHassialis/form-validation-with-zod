import { Controller, get } from "react-hook-form";
import { Form, Col } from "react-bootstrap";

const FormCheckbox = ({
  control,
  register,
  fieldName,
  value,
  name,
  errors,
  formControlId,
  label,
}) => {
  const myErrs = get(errors, fieldName);

  return (
    <Form.Group as={Col} className="mb-3" controlId={formControlId}>
      <Controller
        name={fieldName}
        control={control}
        render={({ field }) => (
          <Form.Check
            type="checkbox"
            value={value}
            name={name}
            {...register(fieldName)}
            isInvalid={myErrs}
            label={label}
          />
        )}
      />
    </Form.Group>
  );
};

export default FormCheckbox;

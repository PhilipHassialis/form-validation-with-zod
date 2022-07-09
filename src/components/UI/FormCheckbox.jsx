import { Controller, get } from "react-hook-form";
import { Form } from "react-bootstrap";

const FormCheckbox = ({
  control,
  register,
  fieldName,
  value,
  name,
  errors,
  checked,
}) => {
  const myErrs = get(errors, fieldName);

  return (
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
        />
      )}
    />
  );
};

export default FormCheckbox;

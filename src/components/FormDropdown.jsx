import { Form, Col } from "react-bootstrap";
import { Controller } from "react-hook-form";
import Select from "react-select";

const FormDropdown = ({
  formControlId,
  label,
  placeholder,
  control,
  errors,
  fieldName,
  dropdownData,
}) => {
  return (
    <Form.Group as={Col} controlId={formControlId}>
      <Form.Label>{label}</Form.Label>
      {dropdownData.length > 0 && (
        <Controller
          name={fieldName}
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <Select
              options={dropdownData}
              placeholder={placeholder}
              value={dropdownData.find((c) => c.value === field.value)}
              ref={field.ref}
              onChange={(val) => field.onChange(val.value)}
            />
          )}
        />
      )}
      {errors[fieldName]?.message && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>
          {errors[fieldName].message}
        </div>
      )}
    </Form.Group>
  );
};

export default FormDropdown;

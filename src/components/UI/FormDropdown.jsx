import { get } from "react-hook-form";
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
  const myErrs = get(errors, fieldName);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: myErrs?.message && "1px solid red",
    }),
  };

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
              styles={customStyles}
              options={dropdownData}
              placeholder={placeholder}
              value={dropdownData.find((c) => c.value === field.value)}
              ref={field.ref}
              onChange={(val) => field.onChange(val.value)}
            />
          )}
        />
      )}
      {myErrs?.message && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>{myErrs.message}</div>
      )}
    </Form.Group>
  );
};

export default FormDropdown;

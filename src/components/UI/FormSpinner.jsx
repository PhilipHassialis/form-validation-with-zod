import { Spinner } from "react-bootstrap";

const FormSpinner = ({ message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner animation="border" variant="primary" />
      <div>{message}</div>
    </div>
  );
};

export default FormSpinner;

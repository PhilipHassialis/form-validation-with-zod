import { Modal, Button } from "react-bootstrap";

const Confirmation = ({
  showCondition,
  confirmTitle,
  confirmMessage,
  cancelTitle,
  cancelHandler,
  okTitle,
  okClickHandler,
}) => {
  return (
    <Modal show={showCondition} onHide={cancelHandler}>
      <Modal.Header closeButton>
        <Modal.Title>{confirmTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{confirmMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            cancelHandler();
          }}
        >
          {cancelTitle}
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            okClickHandler();
          }}
        >
          {okTitle}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;

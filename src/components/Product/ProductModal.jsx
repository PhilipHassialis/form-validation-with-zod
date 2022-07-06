import { Modal, Row, Col, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils/commonUtils";

const ProductModal = ({ clickedProduct, modalClose }) => {
  return (
    <Modal
      size="lg"
      show={clickedProduct.id}
      onHide={modalClose}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {capitalizeFirstLetter(clickedProduct.title)} - Product Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row style={{ marginBottom: "1rem" }}>
          <Col>{clickedProduct.description}</Col>
        </Row>
        <Row>
          {clickedProduct.images.map((image) => (
            <Col>
              <img src={image} width={100} />
            </Col>
          ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={modalClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;

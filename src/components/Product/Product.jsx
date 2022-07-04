import { Row, Col } from "react-bootstrap";
import FormCheckbox from "../UI/FormCheckbox";

const Product = ({ product, control, register, fieldName, errors }) => {
  return (
    <Row style={{ margin: "0.5em" }}>
      <Col>
        <FormCheckbox
          name={product.id}
          value={product.id}
          fieldName={fieldName}
          control={control}
          register={register}
          errors={errors}
        />
      </Col>
      <Col>{product.title}</Col>
      <Col>{product.price}</Col>
      <Col>{product.brand}</Col>
      <Col>{product.category}</Col>
      <Col>
        <img src={product.thumbnail} width={100} alt={product.title} />
      </Col>
    </Row>
  );
};

export default Product;

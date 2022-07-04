import FormCheckbox from "../UI/FormCheckbox";

const Product = ({ product, control, register, fieldName, errors }) => {
  return (
    <tr>
      <td>
        <FormCheckbox
          name={product.id}
          value={product.id}
          fieldName={fieldName}
          control={control}
          register={register}
          errors={errors}
        />
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.brand}</td>
      <td>
        <img
          src={product.thumbnail}
          width={100}
          style={{ width: 100, maxHeight: 100 }}
          alt={product.title}
        />
      </td>
    </tr>
  );
};

export default Product;

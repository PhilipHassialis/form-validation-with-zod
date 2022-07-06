import { capitalizeFirstLetter } from "../../utils/commonUtils";
import FormCheckbox from "../UI/FormCheckbox";

const Product = ({
  product,
  control,
  register,
  fieldName,
  errors,
  onRowClick,
}) => {
  return (
    <tr
      onClick={(e) => {
        if (e.target.type !== "checkbox") {
          onRowClick(product);
        }
      }}
    >
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
      <td>{capitalizeFirstLetter(product.title)}</td>
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

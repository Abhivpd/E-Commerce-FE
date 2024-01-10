import { FaPlus } from "react-icons/fa";
import { IProductCard } from "../utils/models/products";

const ProductCard = ({ product }: { product: IProductCard }) => {
  console.log(product);
  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} className="productImage" />

      <span>{product.name}</span>
      <span>₹{product.price}</span>

      <div className="addToCartButton">
        <button onClick={product.handler}>
          <span>Add to Cart</span>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

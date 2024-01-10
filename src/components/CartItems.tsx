import { Link } from "react-router-dom";
import { ICartItem } from "../utils/models/products";
import { FaTrash } from "react-icons/fa";

const CartItems = ({ cartItem }: { cartItem: ICartItem }) => {
  return (
    <div className="cartItem">
      <section className="productSection">
        <img src={cartItem.image} alt={cartItem.name} className="itemImage" />

        <article className="itemArticle">
          <span className="itemName">{cartItem.name}</span>
          <span className="itemPrice">₹{cartItem.price}</span>
        </article>
      </section>

      <section className="productActions">
        <div className="quantityActions">
          <button>-</button>
          <p>{cartItem.quantity}</p>
          <button>+</button>
        </div>

        <button className="deleteAction">
          <FaTrash />
        </button>
      </section>
    </div>
  );
};

export default CartItems;

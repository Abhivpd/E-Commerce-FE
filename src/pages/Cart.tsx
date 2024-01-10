import { useState } from "react";
import "../styles/_cart.scss";
import { VscError } from "react-icons/vsc";
import CartItems from "../components/CartItems";
import { ICartItem } from "../utils/models/products";
import { Link } from "react-router-dom";

const cartItems: ICartItem[] = [
  {
    id: "asasas",
    image: "https://m.media-amazon.com/images/I/81o11eS8pLL._SX679_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 40,
    stock: 10,
  },
];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCoupon, setIsValidCoupon] = useState<boolean>(false);

  return (
    <div className="cart">
      <main className="cartProducts">
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => <CartItems key={i} cartItem={item} />)
        ) : (
          <p>Your Cart is empty</p>
        )}
      </main>

      <aside className="cartPrices">
        <span className="cartItemPrices">Subtotal: ₹{subtotal}</span>
        <span className="cartItemPrices">
          Shipping Charges: ₹{shippingCharges}
        </span>
        <span className="cartItemPrices">Tax: ₹{tax}</span>
        <span className="cartItemPrices">
          Discount: <span className="green">-₹{discount}</span>
        </span>
        <span className="cartItemPrices totalPrice">Total: ₹{total}</span>

        <div className="couponField">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="couponInput"
          />
          <button>Apply</button>
        </div>

        {couponCode &&
          (isValidCoupon ? (
            <span className="green couponText">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red couponText">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping" className="checkout-button">Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;

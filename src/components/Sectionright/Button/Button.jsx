import "./button.css";
import iconCart from "/images/icon-cart.svg";
function Button() {
  return (
    <button type="button">
      <img src={iconCart} alt="Cart icon" />
      Add to Cart
    </button>
  );
}

export default Button;

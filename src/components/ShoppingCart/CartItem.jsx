import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  deleteFromCartAction,
  increaseQuantAction,
  decreaseQuantAction,
} from "../../actions/cartAction";

const apiUrl = import.meta.env.VITE_API_URL;

export default function CartItem({ cartItem }) {
  const { name, image, price, quantity } = cartItem;

  const dispatch = useDispatch();

  return (
    <li className="cart__item">
      <em className="cart__item-name">{name}</em>
      <div className="cart__item-wrapper">
        <img
          src={`${apiUrl}/images/footwear/${image}`}
          className="cart__item-img"
          alt="cart item pic"
        />
        <div className="cart__item-column">
          <span className="cart__item-price">£{price.toFixed(2)}</span>
          <span className="cart__item-total">
            subtotal: £{(price * quantity).toFixed(2)}
          </span>
        </div>
        <div className="cart__item-column">
          <span
            className="cart__quant-btn"
            onClick={() => dispatch(increaseQuantAction(cartItem))}
          >
            <img
              src="/images/icons/chevron-up.svg"
              alt="chevron up icon"
              width={24}
            />
          </span>
          <span className="cart__item-qunatity">{quantity}</span>
          <span
            className="cart__quant-btn"
            onClick={() => dispatch(decreaseQuantAction(cartItem))}
          >
            <img
              src="/images/icons/chevron-down.svg"
              alt="chevron down icon"
              width={25}
            />
          </span>
        </div>
      </div>
      <span
        className="cart__item-remove"
        onClick={() => dispatch(deleteFromCartAction(cartItem))}
      >
        <img src="/images/icons/can-trash.svg" alt="trash icon" width={25} />
      </span>
    </li>
  );
}

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

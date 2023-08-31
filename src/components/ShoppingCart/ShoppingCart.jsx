import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { clearCartAction, getTotalsAction } from "../../actions/cartAction";
import { useModal } from "../../StateManager/ModalContext";
import Button from "../Button";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function ShoppingCart() {
  const cartState = useSelector((state) => state.cart);
  const { cartItems, cartTotal } = cartState;
  const currentUser = useCurrentUser();

  const { setShowModal1 } = useModal();

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getTotalsAction());
    },
    [cartItems, dispatch]
  );

  const cartItemsNum = cartItems.length;

  return (
    <div className="cart">
      {!cartItems.length ? (
        <h3 className="cart__title-center">cart is empty</h3>
      ) : (
        <h3 className="cart__title-center">your cart</h3>
      )}
      <ul className="cart__items-list">
        {cartItemsNum > 0 &&
          cartItems.map(function (cartItem) {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
      </ul>
      {cartItemsNum > 0 && (
        <footer className="cart__footer">
          <div className="cart__total">
            {!currentUser ? (
              <Link to="/login" onClick={() => setShowModal1(false)}>
                <Button className="button-details" text="login to order" />
              </Link>
            ) : (
              <Checkout cartTotal={cartTotal} />
            )}
            Total: <span>£{cartTotal.toFixed(2)}</span>
          </div>
          <span onClick={() => dispatch(clearCartAction())}>
            <Button className="button-red" text="clear cart" />
          </span>
        </footer>
      )}
    </div>
  );
}

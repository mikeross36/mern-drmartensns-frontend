import StripeCheckout from "react-stripe-checkout";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { createOrderAction } from "../../actions/orderActions";

const pubKey = import.meta.env.VITE_STRIPE_PUBKEY;

export default function Checkout({ cartTotal }) {
  const dispatch = useDispatch();

  function tokenHandler(token) {
    dispatch(createOrderAction(token, cartTotal));
    // console.log(token);
  }

  return (
    <>
      <StripeCheckout
        ComponentClass="me-2"
        stripeKey={pubKey}
        amount={cartTotal * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        currency="GBP"
      />
    </>
  );
}

Checkout.propTypes = {
  cartTotal: PropTypes.number,
};

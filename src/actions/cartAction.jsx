export function addItemToCartAction(footwear, quantity) {
  return function (dispatch) {
    const cartItem = {
      id: footwear._id,
      name: footwear.name,
      image: footwear.coverImage,
      quantity: Number(quantity),
      price: footwear.price,
    };
    dispatch({ type: "ADD_ITEM_TO_CART", payload: cartItem });
  };
}

export function deleteFromCartAction(footwear) {
  return function (dispatch) {
    dispatch({ type: "DELETE_FROM_CART", payload: footwear });
  };
}

export function increaseQuantAction(footwear) {
  return function (dispatch) {
    dispatch({ type: "INCREASE_QUANT", payload: footwear });
  };
}

export function decreaseQuantAction(footwear) {
  return function (dispatch) {
    dispatch({ type: "DECREASE_QUANT", payload: footwear });
  };
}

export function getTotalsAction() {
  return function (dispatch) {
    dispatch({ type: "GET_TOTALS" });
  };
}

export function clearCartAction() {
  return function (dispatch) {
    dispatch({ type: "CLEAR_CART" });
  };
}

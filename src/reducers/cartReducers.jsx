const initialState = {
  cartItems: [],
  cartTotal: 0,
  itemsTotal: 0,
};

function addItemToCart(state, action) {
  const cartItemsCopy = Array.from(state.cartItems);
  const currItemIdx = cartItemsCopy.findIndex((item) => {
    return item.id === action.payload.id;
  });
  if (currItemIdx < 0) {
    cartItemsCopy.push({ ...action.payload });
  } else {
    const currItemCopy = cartItemsCopy[currItemIdx];
    currItemCopy.quantity++;
    cartItemsCopy[currItemIdx] = currItemCopy;
  }
  return { ...state, cartItems: cartItemsCopy };
}

function deleteFromCart(state, action) {
  let cartItemsCopyDel = [...state.cartItems];
  cartItemsCopyDel = cartItemsCopyDel.filter(
    (item) => item.id !== action.payload.id
  );
  return { ...state, cartItems: cartItemsCopyDel };
}

function increaseQuant(state, action) {
  let cartItemsCopyInc = [...state.cartItems];
  const itemsIncQuant = cartItemsCopyInc.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  cartItemsCopyInc = itemsIncQuant;
  return { ...state, cartItems: cartItemsCopyInc };
}

function decreaseQuant(state, action) {
  let cartItemsCopyDec = [...state.cartItems];
  const itemsDecQuant = cartItemsCopyDec
    .map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity !== 0);
  cartItemsCopyDec = itemsDecQuant;
  return { ...state, cartItems: cartItemsCopyDec };
}

function getTotals(state) {
  let { cartTotal, itemsTotal } = state.cartItems.reduce(
    (acc, item) => {
      const cartItemTotal = item.price * item.quantity;
      acc.cartTotal += cartItemTotal;
      acc.itemsTotal += item.quantity;
      return acc;
    },
    { cartTotal: 0, itemsTotal: 0 }
  );
  cartTotal = Number(cartTotal);
  return { ...state, cartTotal, itemsTotal };
}

function clearCart(state) {
  return { ...state, cartItems: [] };
}

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return addItemToCart(state, action);
    case "DELETE_FROM_CART":
      return deleteFromCart(state, action);
    case "INCREASE_QUANT":
      return increaseQuant(state, action);
    case "DECREASE_QUANT":
      return decreaseQuant(state, action);
    case "GET_TOTALS":
      return getTotals(state);
    case "CLEAR_CART":
      return clearCart(state);
    default:
      return state;
  }
}

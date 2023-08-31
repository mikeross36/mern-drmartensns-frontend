const initialState = { footwear: [] };

export function getAllFootwearReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_FOOTWEAR_REQUEST":
      return { loading: true, ...state };
    case "GET_ALL_FOOTWEAR_SUCCESS":
      return { loading: false, success: true, footwear: action.payload };
    case "GET_ALL_FOOTWEAR_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function getFootwearReducer(state = {}, action) {
  switch (action.type) {
    case "GET_FOOTWEAR_REQUEST":
      return { loading: true, ...state };
    case "GET_FOOTWEAR_SUCCESS":
      return { loading: false, success: true, footwear: action.payload };
    case "GET_FOOTWEAR_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

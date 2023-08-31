export function getAllReviewsReducer(state = { reviews: [] }, action) {
  switch (action.type) {
    case "GET_ALL_REVIEWS_REQUEST":
      return { loading: true, ...state };
    case "GET_ALL_REVIEWS_SUCCESS":
      return { loading: false, success: true, reviews: action.payload };
    case "GET_ALL_REVIEWS_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function getReviewReducer(state = {}, action) {
  switch (action.type) {
    case "GET_REVIEW_REQUEST":
      return { loading: true, ...state };
    case "GET_REVIEW_SUCCESS":
      return { loading: false, success: true, review: action.payload };
    case "GET_REVIEW_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function addReviewReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_REVIEW_REQUEST":
      return { loading: true };
    case "ADD_REVIEW_SUCCESS":
      return { loading: false, success: true, content: action.payload };
    case "ADD_REVIEW_FAILED":
      return { loading: false, error: action.palyoad };
    default:
      return state;
  }
}

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      console.log(action.payload);
      return {
        ...state,
        products: action.products,
      };
    case "mug":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

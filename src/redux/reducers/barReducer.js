const initialState = {
  products: [],
  categories: [],
  cartItems: []
};

export const barReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getProducts":
      return {
        ...state,
        products: action.payload,
      };

    case "addToCart":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: state.cartItems.length + 1,
            productId: action.payload,
            amount: 1
          }
        ]
      }
    default:
      return state;
  }
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:6006/products')
      const data = await res.json();
        dispatch({ type: "getProducts", payload: data });
    } catch (error) {
      console.log("ошибка в getProducts");
    }
  };
};

export const addToCart = () => {
  return async dispatch => {
    const res = await fetch('')
  }
}

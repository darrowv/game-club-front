const initialState = {
  products: [],
};

export const barReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getProducts":
      return {
        ...state,
        products: action.payload,
      };

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

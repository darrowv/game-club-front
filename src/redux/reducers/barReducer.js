const initialState = {
  products: [],
  categories: [],
  cartItems: [],
};

export const barReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getProducts":
      return ({
        ...state,
        products: action.payload,
      });

    case "addToCart":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: action.payload._id,
            img: action.payload.img,
            name: action.payload.name,
            amount: 1,
          },
        ],
      }

    case "removeFromCart":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }
  
    case "increaseAmount":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item.amount += 1;
          }
          return item;
        }),
      };

    case "decreaseAmount":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item.amount -= 1;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:6006/products");
      const data = await res.json();
      const lastData = data.map((prod) => {
        return { ...prod, inCart: false }
      })
      dispatch({ type: "getProducts", payload: lastData });
    } catch (error) {
      console.log("ошибка в getProducts");
    }
  };
};

// export const addToCart = () => {
//   return async dispatch => {
//     const res = await fetch('')
//   }
// }

const initialState = {};

const imageMulter = (state = initialState, action) => {
  switch (action.type) {
    case "add/image":
      return {
        ...state,
        images: [action.payload, ...state.image],
      };
    default:
      break;
  }
};

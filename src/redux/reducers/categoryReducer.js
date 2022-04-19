const initialState = {
  category: []
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCats':
      return {
        ...state,
        category: action.payload
      }
    default:
      return state;
  }
}


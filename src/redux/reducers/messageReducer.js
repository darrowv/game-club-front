const initialState = {
  message: [],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "createMessage":
      return {
        ...state,
        message: action.payload
      }
    case 'getMessage':
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
};

export const loadMessage = () => {
  return async dispatch => {
    try {
      const res = await fetch('http://localhost:6006/message')
      const data = await res.json()
      dispatch({type: 'getMessage', payload: data})
    } catch (error) {
      console.log(error);
    }
  }
}

export const createMessage = (value) => {
  return async dispatch => {
    try {
      const res = fetch('http://localhost:6006/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: value
        })
      })
      const data = await res.json()
      dispatch({ type: 'createMessage', payload: data })
    } catch (error) {
      console.log(error);
    }
  }
}
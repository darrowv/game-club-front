const NewsInitialState = {
  news: [],
};

export const NewsReducer = (state = NewsInitialState, action) => {
  switch (action.type) {
    case "news/fetch/fulfilled":
      return {
        ...state,
        news: action.payload,
      };
    default:
      return state;
  }
};

export const fetchNews = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "news/fetch/pending" });
      const response = await fetch("http://localhost:6006/news");
      const json = await response.json();
      dispatch({ type: "news/fetch/fulfilled", payload: json });
    } catch (error) {
      dispatch({
        type: "news/fetch/rejected",
        payload: error.message,
      });
    }
  };
};

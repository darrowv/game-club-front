const CommentInitialState = {
  comments: [],
};

export const CommentsReducer = (state = CommentInitialState, action) => {
  switch (action.type) {
    case "comments/fetch/fulfilled": {
      return {
        ...state,
        comments: action.payload,
      };
    }
    case "addComment/fetch/fulfilled": {
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    }
    default:
      return state;
  }
};

export const fetchComments = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "comments/fetch/pending" });
      const response = await fetch("http://localhost:6006/comment");
      const json = await response.json();
      dispatch({ type: "comments/fetch/fulfilled", payload: json });
    } catch (error) {
      dispatch({
        type: "comments/fetch/rejected",
        payload: error.message,
      });
    }
  };
};

export const addComments = (value, news) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "addComment/fetch/pending" });
      const response = await fetch("http://localhost:6006/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: value,
          news
        }),
      });
      const json = await response.json();
      dispatch({ type: "addComment/fetch/fulfilled", payload: json });
    } catch (error) {
      dispatch({
        type: "addComment/fetch/rejected",
        payload: error.message,
      });
    }
  };
};

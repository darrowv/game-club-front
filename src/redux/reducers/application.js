const initialState = {
  signIn: false,
  signUp: false,
  error: null,
  users: [],
  token: null,
};

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signUp: true,
        error: null,
      };

    case "application/signup/fulfilled":
      return {
        ...state,
        signUp: false,
        error: action.error,
      };

    case "application/signup/rejected":
      return {
        ...state,
        signUp: false,
        error: action.error,
      };

    case "application/signin/pending":
      return {
        ...state,
        signIn: true,
        error: null,
      };

    case "application/signin/fulfilled":
      return {
        ...state,
        signIn: false,
        error: action.error,
        token: action.payload.token,
      };

    case "application/signin/rejected":
      return {
        ...state,
        signIn: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const createApp = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const res = await fetch("http://localhost:6006/users", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.error) {
      dispatch({ type: "application/signup/rejected", error: data.error });
    } else {
      dispatch({ type: "application/signup/fulfilled", payload: data });
    }
  };
};

export const auth = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signin/pending" });

    const res = await fetch("http://localhost:6006/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await res.json();

    if (json.error) {
      dispatch({ type: "application/signin/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signin/fulfilled", payload: json });

      localStorage.setItem("token", json.token);
    }
  };
};

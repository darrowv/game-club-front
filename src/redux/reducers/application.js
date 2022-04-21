const initialState = {
  signIn: false,
  signUp: false,
  error: null,
  users: {},
  token: localStorage.getItem("token"),
  id: localStorage.getItem("id"),
};

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add/image":
      return {
        ...state,
        users: action.payload,
      };
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
    case "application/users/pending":
      return {
        ...state,
        error: null,
      };
    case "application/users/fulfilled":
      return {
        ...state,
        users: action.payload,
      };
    case "application/users/rejected":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export const getUsersById = (id) => {
  return async (dispatch) => {
    dispatch({ type: "application/users/pending" });

    const res = await fetch(`http://localhost:6006/users/${id}`);
    const data = await res.json();

    if (data.error) {
      dispatch({ type: "application/users/rejected" });
    } else {
      dispatch({ type: "application/users/fulfilled", payload: data });
    }
  };
};

export const handleImage = (id, file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch(`http://localhost:6006/image/${id}`, {
        method: "PATCH",
        body: formData,
      });
      const data = await res.json();
      dispatch({ type: "add/image", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
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
      localStorage.setItem("id", json.id);
    }
  };
};
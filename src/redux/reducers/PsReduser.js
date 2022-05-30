const initialState = {
    place: [],
    error: null,
    load: true,
  };
  
  export const PsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ps/fetch/fulfilled": {
        return {
          ...state,
          place: action.payload,
          load: false,
        };
      }
      case "ps/fetch/rejected":
        return {
          ...state,
          error: action.error,
          load: false,
        };
      case "ps/fetch/pending":
        return {
          ...state,
          load: true,
        };
      case "ps/change/fulfilled": {
        return {
          ...state,
          place:  state.place.map((item) => {
              if(item._id === action.payload.id) {
                  item.user = action.payload.users
                  return item
              }
              return item
          }),
          load: false,
        };
      }
      case "ps/change/rejected": {
        return {
          ...state,
          error: action.error,
          load: false,
        };
      }
      case "ps/change/pending": {
        return {
          ...state,
          load: true,
        };
      }
      default:
        return state;
    }
  };
  
  export const loadPs = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: "ps/fetch/pending" });
        const res = await fetch(`http://localhost:6006/ps`);
        const json = await res.json();
  
        dispatch({ type: "ps/fetch/fulfilled", payload: json });
      } catch (e) {
        dispatch({ type: "ps/fetch/rejected", error: e.toString() });
      }
    };
  };
  export const patchPs = (id, boolean, users) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "ps/change/pending" });
        const patch_fetch = await fetch(`http://localhost:6006/ps/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ boolean: !boolean, user: users }),
        });
        const data = await patch_fetch.json();
        dispatch({ type: "ps/change/fulfilled", payload: {users, id} });
      } catch (e) {
        dispatch({ type: "ps/change/rejected", error: e.toString() });
      }
    };
  };
  
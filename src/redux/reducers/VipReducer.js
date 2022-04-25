const initialState = {
    place: [],
    error: null,
    load: true,
  };
  
  export const VipReducer = (state = initialState, action) => {
    switch (action.type) {
      case "vip/fetch/fulfilled": {
        return {
          ...state,
          place: action.payload,
          load: false,
        };
      }
      case "vip/fetch/rejected":
        return {
          ...state,
          error: action.error,
          load: false,
        };
      case "vip/fetch/pending":
        return {
          ...state,
          load: true,
        };
      case "vip/change/fulfilled": {
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
      case "vip/change/rejected": {
        return {
          ...state,
          error: action.error,
          load: false,
        };
      }
      case "vip/change/pending": {
        return {
          ...state,
          load: true,
        };
      }
      default:
        return state;
    }
  };
  
  export const loadVip = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: "vip/fetch/pending" });
        const res = await fetch(`http://localhost:6006/vip`);
        const json = await res.json();
  
        dispatch({ type: "vip/fetch/fulfilled", payload: json });
      } catch (e) {
        dispatch({ type: "vip/fetch/rejected", error: e.toString() });
      }
    };
  };
  export const patchVip = (id, boolean, users) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "vip/change/pending" });
        const patch_fetch = await fetch(`http://localhost:6006/vip/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ boolean: !boolean, user: users }),
        });
        const data = await patch_fetch.json();
        dispatch({ type: "vip/change/fulfilled", payload: {users, id} });
      } catch (e) {
        dispatch({ type: "vip/change/rejected", error: e.toString() });
      }
    };
  };
  
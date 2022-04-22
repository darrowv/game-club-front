const initialState = {
  place: [],
  error: null,
  load: true,
};

export const PlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "place/fetch/fulfilled": {
      return {
        ...state,
        place: action.payload,
        load: false,
      };
    }
    case "place/fetch/rejected":
      return {
        ...state,
        error: action.error,
        load: false,
      };
    case "place/fetch/pending":
      return {
        ...state,
        load: true,
      };
    case "place/change/fulfilled": {
      return {
        ...state,
        place:  state.place.map((item) => {
            if(item._id === action.payload._id) {
                item.user = !item.user
            }
            return item
        }),
        load: false,
      };
    }
    case "place/change/rejected": {
      return {
        ...state,
        error: action.error,
        load: false,
      };
    }
    case "place/change/pending": {
      return {
        ...state,
        load: true,
      };
    }
    default:
      return state;
  }
};

export const loadPlace = () => {
  return async (dispatch) => {
    console.log(123);
    try {
      dispatch({ type: "place/fetch/pending" });
      const res = await fetch(`http://localhost:6006/place`);
      const json = await res.json();
      console.log(res);

      dispatch({ type: "place/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "place/fetch/rejected", error: e.toString() });
    }
  };
};
export const patchFetch = (id, boolean, users) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "place/change/pending" });
      const patch_fetch = await fetch(`http://localhost:6006/place/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ boolean: !boolean, user: users }),
      });
      const data = await patch_fetch.json();
      dispatch({ type: "place/change/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "place/change/rejected", error: e.toString() });
    }
  };
};

export default function reducer(state = {
    fetching: false,
    fetched: false,
    error: false,
    isAuthenticated: false,
    user: null
}, action) {
    switch (action.type) {
      case "CLEAR_AIRING_TODAY": {
          return {
              ...state,
              fetched: false,
              fetching: true
          }
          break;
      }
      case "FETCH_AIRING_TODAY_REJECTED": {
          return {
              ...state,
              fetching: false,
              fetched: false,
              error: action.payload
          }
          break;
      }
      case "FETCH_AIRING_TODAY_FULFILLED": {
          return {
              ...state,
              fetching: false,
              fetched: true
          }
          break;
      }
    }
    return state;
}

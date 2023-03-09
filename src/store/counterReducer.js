const defaultState = {
  counter: 1
}

export function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_COUNTER':
      console.log(action.payload)
      return { counter: action.payload }
    default:
      return state
  }
}

export const setCounter = (counter) => (dispatch) => {
  dispatch({ type: "SET_COUNTER", payload: counter });
};
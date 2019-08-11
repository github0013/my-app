import { State } from "./context"

export type ActionType = {
  type: "increment"
}
const reducer: React.Reducer<State, ActionType> = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}

export default reducer

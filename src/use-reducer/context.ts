import React from "react"

import { ActionType } from "./reducer"

export interface State {
  errors?: any
  register?: any
  handleSubmit?: any
  count: number
}

interface ContextProps {
  state: State
  dispatch: React.Dispatch<ActionType>
}
const context = React.createContext<ContextProps>({
  state: { count: 0 },
  dispatch: value => {},
})

export const useContext = () => {
  return React.useContext<ContextProps>(context)
}

export default context

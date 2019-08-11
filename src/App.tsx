import React from "react"
import Context from "./use-reducer/context"
import reducer from "./use-reducer/reducer"
import Form from "./use-reducer/Form"
import useForm from "react-hook-form"

interface Props {}
const UseReducerApp: React.FC<Props> = props => {
  const { errors, register, handleSubmit } = useForm()

  const [state, dispatch] = React.useReducer(reducer, {
    errors,
    register,
    handleSubmit,
    count: 0,
  })
  console.log("coming directly from useForm - errors:", errors)
  console.log("coming from state - errors:", state.errors)
  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <Form />
      </Context.Provider>
    </>
  )
}
export default UseReducerApp

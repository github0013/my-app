import React from "react"
import { useContext } from "./context"
import Input from "./Input"
interface Props {}

const Form: React.FC<Props> = props => {
  const {
    state: { count, handleSubmit, errors },
    dispatch,
  } = useContext()
  return (
    <>
      <form
        onSubmit={handleSubmit(values => {
          console.log(values)
        })}
      >
        <>
          <Input name="userName" />
          {errors.userName ? "error" : null}
        </>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "increment" })
          }}
        >
          {count}
        </button>
      </div>
    </>
  )
}
export default Form

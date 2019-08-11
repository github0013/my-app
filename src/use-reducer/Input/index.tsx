import React from "react"
import { useContext } from "../context"

interface Props {
  name: string
}
const InputIndex: React.FC<Props> = ({ name }) => {
  const {
    state: { register },
  } = useContext()
  return (
    <div>
      <input name={name} ref={register({ required: true })} />
    </div>
  )
}
export default InputIndex

import { useContext } from "react"
import { NumberContext, Test } from "./Bai1"
import { Test2 } from "./test1"

export const Test1 = () => {
  const {name} = useContext(NumberContext);
  console.log('name', name)

  return (
    <Test2 />
  )
}
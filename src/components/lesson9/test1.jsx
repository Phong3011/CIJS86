import { useContext } from "react";
import { NumberContext } from "./Bai1";

export const Test2 = () => {
  const {name} = useContext(NumberContext);
  console.log('name', name)

  
  return (
    <div>{name}</div>
  )
}
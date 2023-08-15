import { createContext } from "react";
import { Test1 } from "./test";

export const NumberContext = createContext();

export const Test = () => {
  return (
    <NumberContext.Provider value={{name: 'Phong'}}>
      <Test1 />
    </NumberContext.Provider>
  )
}
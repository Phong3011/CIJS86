import { createContext } from "react";

export const PageRolesContext = createContext(null)

export const PageRolesProvider = (props) => {
  return(
    <PageRolesContext.Provider>
      {props.children}
    </PageRolesContext.Provider>
  )
}
import { useContext } from "react"
import { PageContext } from "./Context"
import { PageRolesContext } from "./Roles"

export const useCoreContext = () => {
  return(
    useContext(PageContext)
  ) 
        
}
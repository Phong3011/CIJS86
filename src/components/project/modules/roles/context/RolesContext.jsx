import { useEffect } from "react"
import { PageProvider } from "../../../hooks/Context"
import { GetListRoles } from "../proxy/getListRoles";

export const RolesProvider = (props) => {
  const {getListRole, loading, roleData} = GetListRoles();

  useEffect(() => {
    getListRole()
  }, [])
  
  const data = {  
    getListRole,
    roleData,
    loading
  }

  return(
    <PageProvider {...data}>{props.children}</PageProvider>
  )
}


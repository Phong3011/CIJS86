import React from 'react'
import { RolesProvider } from '../../context/RolesContext'
import { TableRolesRender } from './components/TableRoleRender'
import { useCheckPermission } from '../../../../hooks/useCheckPermission'

export const RolesPage = () => {
  const checkPermissionViewRoles = useCheckPermission("ROLES.VIEW")
  return (
    
    <RolesProvider>
      {checkPermissionViewRoles && <TableRolesRender/>}
    </RolesProvider>
  )
}

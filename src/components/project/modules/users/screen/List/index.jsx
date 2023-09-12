import React from 'react';
import TableRender from './components/TableRender';
import { UserProvider } from '../../context/UserContext';
import { useAppContext } from '../../../../hooks/useAppContext';
import { useCheckPermission } from '../../../../hooks/useCheckPermission';

export const UserPage = () => {
  const checkPermissionViewUser = useCheckPermission('USER.VIEW');

  return (
    <UserProvider>
      {checkPermissionViewUser && <TableRender/>}
    </UserProvider>
  )
}
import { useEffect, useState } from "react";
import { PageProvider } from "../../../hooks/Context";
import { GetListAccount, GetListUser } from "../proxy/getListUser";
import { GetListRoles } from "../../roles/proxy/getListRoles";

export const UserProvider = (props) => {
  const {getListUser, loading, userData} = GetListUser();
  const {getListRole,roleData} = GetListRoles()

  useEffect(() => {
    getListUser();
    getListRole();
  }, []);



  const data = {
    getListUser,
    userData,
    roleData,
    loading,
  };

  return <PageProvider {...data}>{props.children}</PageProvider>;
};

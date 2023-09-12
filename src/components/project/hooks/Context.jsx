import React, { createContext, useEffect, useState } from "react";
import { GetRolesDetail } from "../modules/roles/proxy/getRolesDetail";
import { get } from "lodash";

export const PageContext = createContext(null);
export const AppContext = createContext();

export const PageProvider = (props) => {
  return (
    <PageContext.Provider value={props}>{props.children}</PageContext.Provider>
  );
};

export const AppProvider = (props) => {
  const {correctSignin} = props;
  const getRoleId = localStorage.getItem("roles");
  const [roleDetail, setRoleDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getRolesDetail = async () => {
    setLoading(true);
    try {
      await fetch(
        `https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/Roles/${getRoleId}`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((result) => setRoleDetail(result));
        }
      });
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    if(correctSignin) {
      getRolesDetail()
    }
  }, [getRoleId, correctSignin])

  const data = {
    permissions: get(roleDetail, "permissions"),
  };

  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};

import { useState } from "react"

export const GetListRoles = () => {
  const [loading, setLoading] = useState(false)
  const [roleData, setRoleData] = useState()


  const getListRole = async () => {
    setLoading(true);
    try {
      await fetch(
        "https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/Roles",
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((result) => setRoleData(result));
        }
      });
    } catch (error) {}
    setLoading(false);
  };

  return {
    roleData,
    loading,

    getListRole
  }
}


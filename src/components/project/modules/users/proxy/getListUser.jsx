import { useState } from "react";

export const GetListUser = () => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState()

  const getListUser = async () => {
    setLoading(true);
    try {
      await fetch(
        "https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/Phong",
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      ).then((res) => {
        if (res.ok) {
          return res.json().then((result) => setUserData(result));
        }
      });
    } catch (error) {}
    setLoading(false);
  };

  return {
    userData,
    loading,
    getListUser
  }
}
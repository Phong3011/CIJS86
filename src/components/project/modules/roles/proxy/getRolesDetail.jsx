import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const GetRolesDetail = () => {
  const [currentQueryParaMeters] = useSearchParams();
  const showId = currentQueryParaMeters.get("id");
  const [roleDetail, setRoleDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getRolesDetail = async () => {
    if(showId) {
      setLoading(true);
      try {
        await fetch(
          `https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/Roles/${showId}`,
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
    }
  };
  console.log('roleDetail', roleDetail)
  
  return{
    loading,
    getRolesDetail,
    roleDetail,
    error
  }
}

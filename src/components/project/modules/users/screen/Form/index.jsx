import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserForm from "./components/UserForm";
import { useAppContext } from "../../../../hooks/useAppContext";

const UserDetail = (props) => {
  const [currentQueryParaMeters] = useSearchParams();
  const showId = currentQueryParaMeters.get("id");
  const getAction = currentQueryParaMeters.get("action");
  const { handleCancel, open, setOpen } = props;
  const [userDetail, setUserDetail] = useState();
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  useEffect(() => {
    if ((showId !== null && getAction === "Detail") || getAction === "Create") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [open, setOpen, handleCancel]);

  const getDetail = async() => {
    setLoading(true)
    try {
      await fetch(
        `https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/Phong/${showId}`,
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }

      )
        .then((res) => {
          if (res.ok) {
            return res.json().then((result) => setUserDetail(result));
          }
        })
        setError(false)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  };
  useEffect(() => {
    if(showId) {
      getDetail();
    }
  }, [open]);

  return (
    <>
      <Drawer
        open={open}
        onClose={handleCancel}
        closable={false}
        width={800}
        title="User"
      >
        {!loading && !error && <UserForm handleCancel={handleCancel} userDetail={userDetail} open={open} /> }
        
      </Drawer>
    </>
  );
};

export default UserDetail;

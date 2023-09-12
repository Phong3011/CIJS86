import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RolesForm } from "./components/RolesForm";
import { GetRolesDetail } from "../../proxy/getRolesDetail";
import axios from 'axios';

export const RolesDetail = (props) => {
  const [currentQueryParaMeters] = useSearchParams();
  const showId = currentQueryParaMeters.get("id");
  const getAction = currentQueryParaMeters.get("action");
  const { handleCancel, open, setOpen } = props;
  // const [roleDetail, setRoleDetail] = useState();
  const {getRolesDetail, roleDetail, loading, error} = GetRolesDetail()

  useEffect(() => {
    if ((showId !== null && getAction === "Detail") || getAction === "Create") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [open, setOpen, handleCancel]);

  useEffect(() => {
    if(showId){
      getRolesDetail()
    }
  },[open, showId])

  return (
    <>
      <Drawer
        open={open}
        onClose={handleCancel}
        closable={false}
        width={800}
        title="Roles"
      >
        {!loading && !error && (
          <RolesForm
            handleCancel={handleCancel}
            roleDetail={roleDetail}
            open={open}
          />
        )}
      </Drawer>
    </>
  );
};

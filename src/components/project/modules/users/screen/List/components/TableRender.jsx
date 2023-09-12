import React, { useState } from "react";
import { Button, Table } from "antd";

import { useCoreContext } from "../../../../../hooks/useCoreContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import UserDetail from "../../Form";

import { pagination } from "../../../../../constants/pagination.constanst";
import { TableColumns } from "./TableColumns";
import { useCheckPermission } from "../../../../../hooks/useCheckPermission";

const TableRender = () => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const newQueryParameter = new URLSearchParams();
  const checkPermissionCreate = useCheckPermission("USER.CREATE");

  const [open, setOpen] = useState(false);
  const { columns } = TableColumns(setOpen);
  const { loading, userData } = useCoreContext();

  const openModal = () => {
    setOpen(true);
  };

  const handleClickCreate = () => {
    setOpen(true);
    newQueryParameter.set("action", "Create");
    setSearchParams(newQueryParameter);
  };

  const handleCancel = () => {
    setOpen(false);
    setSearchParams(newQueryParameter);
  };

  return (
    <>
      {checkPermissionCreate && (
        <Button
          className="float-right mx-5 mb-5"
          type="primary"
          onClick={() => handleClickCreate()}
        >
          + Create
        </Button>
      )}
      <Table
        dataSource={userData}
        columns={columns}
        loading={loading}
        bordered
        pagination={pagination}
      />
      <UserDetail handleCancel={handleCancel} open={open} setOpen={setOpen} />
    </>
  );
};

export default TableRender;

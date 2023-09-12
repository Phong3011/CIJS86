import { Button, Table } from "antd";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import TableRoleColumns from "./TableRoleColumns";
import { useCoreContext } from "../../../../../hooks/useCoreContext";
import { pagination } from "../../../../../constants/pagination.constanst";
import { RolesDetail } from "../../Form";
import { useCheckPermission } from "../../../../../hooks/useCheckPermission";

export const TableRolesRender = () => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const newQueryParameters = new URLSearchParams();
  const checkPermissionCreate = useCheckPermission("ROLES.CREATE")

  const [open, setOpen] = useState(false);
  const { columns } = TableRoleColumns(setOpen);
  const { roleData, loading } = useCoreContext();
  const openModal = () => {
    setOpen(true);
  };

  const handleClickCreate = () => {
    setOpen(true);
    newQueryParameters.set("action", "Create");
    setSearchParams(newQueryParameters);
  };

  const handleCancel = () => {
    setOpen(true);
    setSearchParams(newQueryParameters);
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
        dataSource={roleData}
        columns={columns}
        loading={loading}
        bordered
        pagination={pagination}
      />
      <RolesDetail handleCancel={handleCancel} open={open} setOpen={setOpen} />
    </>
  );
};

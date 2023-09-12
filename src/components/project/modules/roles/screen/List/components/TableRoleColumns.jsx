import { Input, Modal } from "antd";
import React from "react";
import {useSearchParams } from "react-router-dom";
import { DeleteUser } from "../../../../users/proxy/delete";
import { useOpacity } from "../../../../../hooks/useOpacity";
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { useCheckPermission } from "../../../../../hooks/useCheckPermission";
import { DeleteRoles } from "../../../proxy/delete";
import { GetListRoles } from "../../../proxy/getListRoles";

const { confirm } = Modal;
const TableRoleColumns = (setOpen) => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const newQueryParameter = new URLSearchParams();

  const { opacity, setOpacity } = useOpacity();
  const checkPerMissionEditRoles = useCheckPermission("ROLES.EDIT")

  const handleClickEdit = (id) => {
    setOpen(true);
    newQueryParameter.set("id", id);
    newQueryParameter.set("action", "Detail");
    setSearchParams(newQueryParameter);
  };

  
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: {
        compare: (a, b) => a.name.length - b.name.length,
        multiple: 2,
      },
      filterDropDown: ({ setSelectedKeys, selectedKeys, confirm }) => {
        return (
          <Input
            autoFocus
            placeholder="Search here"
            value={selectedKeys[0]}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
          />
        );
      },
      filterIcon: () => {
        return <SearchOutlined/>;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <div
            className="flex gap-3 action"
            onMouseOver={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0.6)}
          >
            {checkPerMissionEditRoles && (
              <EditOutlined
              onClick={() => {
                handleClickEdit(record.id);
              }}
              style={{ opacity: opacity, color: "blue" }}
            />
            )}           
          
          </div>
        );
      },
    },
  ];
  return {
    columns,
  };
};

export default TableRoleColumns;

import { useNavigate, useSearchParams } from "react-router-dom";
import { DeleteUser } from "../../../proxy/delete";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useCoreContext } from "../../../../../hooks/useCoreContext";
import { get } from "lodash";
import { Input, Modal } from "antd";
import { useOpacity } from "../../../../../hooks/useOpacity";
import { useCheckPermission } from "../../../../../hooks/useCheckPermission";

const { confirm } = Modal;

export const TableColumns = (setOpen) => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const newQueryParameter = new URLSearchParams();
  const checkPermissionEditUser = useCheckPermission("USER.EDIT");
  const checkPermissionDeleteUser = useCheckPermission("USER.DELETE");

  const { proxyDeleteUser } = DeleteUser();

  const { roleData, getListUser } = useCoreContext();
  const { opacity, setOpacity } = useOpacity();

  const handleClickEdit = (id) => {
    setOpen(true);
    newQueryParameter.set("id", id);
    newQueryParameter.set("action", "Detail");
    setSearchParams(newQueryParameter);
  };

  const handleClickDelete = (id) => {
    confirm({
      title: "Confirm Delete",
      icon: <ExclamationCircleOutlined />,
      content: "Are u sure ?",
      onOk: async () => {
        try {
          await proxyDeleteUser(id);
        } catch (error) {}
        getListUser();
      },
      onCancel() {},
    });
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
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => {
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
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(String(value).toLowerCase());
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Roles",
      dataIndex: "roles",
      key: "roles",
      render: (record) => {
        if (Array.isArray(roleData) && roleData.length > 0) {
          const findRoleData = roleData.find((e) => e.id === record);
          return get(findRoleData, "name", "");
        }
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
            {checkPermissionEditUser && (
              <EditOutlined
                onClick={() => handleClickEdit(record.id)}
                style={{ opacity: opacity, color: "blue" }}
              />
            )}
            {checkPermissionDeleteUser && (
              <DeleteOutlined
                onClick={() => handleClickDelete(record.id)}
                style={{ opacity: opacity, color: "red" }}
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

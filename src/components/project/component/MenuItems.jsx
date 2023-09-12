import React, { useState } from "react";
import { StepBackwardOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, useNavigate } from "react-router-dom";
import ImageLogo from "../img/logo.jpg";

const MenuItems = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const { setTitle } = props;

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("User", "/user", <StepBackwardOutlined />),
    getItem("Roles", "/roles", <StepBackwardOutlined />),
  ];
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={collapsed ? { background: "#333" } : { background: "#000" }}
    >
      <Link
        to="/"
        className="text-white flex justify-center items-center h-[66px] gap-[10px]"
      >
        {collapsed ? (
          <img src={ImageLogo} alt="logo" className="w-16 h-10" />
        ) : (
          <>
            <div>
              <div className="flex w-full flex-nowrap">
                <img src={ImageLogo} alt="logo" className="w-16 h-10" />
                <h1 className="mt-2 font-sans text-lg">PhongProject</h1>
              </div>
            </div>
          </>
        )}
      </Link>
      <Menu
        onClick={(onClickParams) => {
          const { key: path } = onClickParams;
          if (Array.isArray(items) && items.length > 0) {
            const pathName = items.find((e) => e.key === path);
            if (pathName) {
              setTitle(pathName.label);
            }
            navigate(path);
          }
        }}
        theme="dark"
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default MenuItems;

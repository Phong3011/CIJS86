import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "./App.css";
import MenuItems from "./components/project/component/MenuItems";
import LayoutHeader from "./components/project/component/LayoutHeader";
import Sider from "antd/es/layout/Sider";
import { UserPage } from "./components/project/modules/users/screen/List";
import { RolesPage } from "./components/project/modules/roles/screen/List";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/project/modules/signin/screen/Signin";
import { AppProvider } from "./components/project/hooks/Context";

const { Header, Content } = Layout;

const App = () => {
  const [title, setTitle] = useState("");
  const [correctSignin, setCorrectSignin] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('roles')){
      setCorrectSignin(true)
    }
  }, [localStorage.getItem('roles')])

  return (
    <AppProvider correctSignin={correctSignin}>
      {!correctSignin ? (
        <Signin setCorrectSignin={setCorrectSignin}/>
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <MenuItems setTitle={setTitle} />
          </Sider>
          <Layout>
            <Header className="w-full bg-white">
              <LayoutHeader title={title} />
            </Header>
            <Content className="px-5 mt-24">
              <Routes>
                <Route path="/" element={<span></span>} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/roles" element={<RolesPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      )}
    </AppProvider>
    // <>
    // {!correctSignin ? (
    //     <Signin />
    // ) : (
    //   <AppProvider>
    //   <Layout style={{ minHeight: "100vh" }}>
    //     <Sider>
    //       <MenuItems setTitle={setTitle} />
    //     </Sider>
    //     <Layout>
    //       <Header className="w-full bg-white">
    //         <LayoutHeader title={title} />
    //       </Header>
    //       <Content className="px-5 mt-24">
    //           <Routes>
    //             <Route path="/" element={<span></span>} />
    //             <Route path="/user" element={<UserPage />} />
    //             <Route path="/roles" element={<RolesPage />} />
    //           </Routes>
    //       </Content>
    //     </Layout>
    //   </Layout>
    // </AppProvider>
    // )}
    // </>
  );
};

export default App;

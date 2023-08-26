import React, { createContext, useContext, useEffect, useState } from "react";
import { Layout, Tabs } from "antd";
import './App.css';
import MenuItems from "./components/project/MenuItems";
import LayoutHeader from "./components/project/LayoutHeader";
import TableRender from "./components/project/Table";
import Signin from "./components/project/Signin";
import Todo from "./components/test/Todo";

const App = () => {
  // const [title,setTitle] = useState('')
  // console.log(title);

  return (
    // <Layout style={{minHeight: '100vh'}}>
      //  <Signin />
    //   {/* <ContactUs/> */}
      
    //   {/* <MenuItems setTitle={setTitle}/>
    //   <LayoutHeader title={title}/> */}
    //   <TableRender/>
    // </Layout>
    <Todo/>
    
  );
};

export default App;

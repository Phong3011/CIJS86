import React, { createContext, useContext, useEffect, useState } from "react";
import Layout from "./components/lesson2/Layout";
import Card from "./components/lesson2/Theme";

import {  Spin } from "antd";
import { Route, Routes } from "react-router-dom";
import { Lesson10 } from "./components/lesson10";


export const TicketContext = createContext();

const App = () => {
  const [numberProduct, setNumberProduct] = useState(15);
  const [loading, setLoading] = useState(false);
  console.log("loading", loading);

  const renderLoading = () => {
    if (loading) {
      return <Spin tip="Loading..."></Spin>;
    }
    return (
      <Routes>
        <Route path="/" element={<Lesson10 />} />
        <Route path="/About" element={<Lesson10 />} />
        <Route path="/Product" element={<Lesson10 />} />
      </Routes>
      //  <>
      //   <Layout/>
      //   <Card/>
      //  </>
    );
  };

  return (
    <div>
      <TicketContext.Provider
        value={{ numberProduct, setNumberProduct, setLoading }}
      >
        {renderLoading()}
      </TicketContext.Provider>
    </div>
  );
};

export default App;

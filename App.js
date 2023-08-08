import React, { useEffect, useState }  from "react";
import Layout from "./components/lesson2/Layout";
import Card from "./components/lesson2/Theme";
import Test from "./components/lesson4/test";
import { HomeWork } from "./components/lesson4/test01";
import { EffectDemo } from "./components/lesson4/Test02";
import Lorem from "./components/lesson8/Bai1";
import Bai2 from "./components/lesson8/Bai2";

const App = () => {
  const [age, setAge] = useState(13)

  useEffect(() => {
    setInterval(() => {
      setAge(14)
    }, 10000)
    clearInterval();
  }, [])

  return (
   <>
    {/* <Layout/>
    <Card/>
    <Test/>
    <HomeWork /> */}
    {/* <EffectDemo age={age}/> */}
    {/* <Lorem/> */}
    <Bai2/>

   </>
);
};

export default App;

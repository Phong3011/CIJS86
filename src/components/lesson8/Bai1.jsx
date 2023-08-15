import React, { useEffect } from "react";
import Lorem from "./Lorem";

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo({top:'0' , left:'0'})
}, [])

const handleClick =() => {
  window.scrollTo({top:'0' , left:'0'})
}

  return (
    <div>
      <Lorem/>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
};

export default ScrollTop;

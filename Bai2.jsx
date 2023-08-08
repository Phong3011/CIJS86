import { Input } from "antd";
import React, { useState } from "react";

const Bai2 =() => {

  const [value,setValue] = useState('')

  const handleChange = (e) => {
    setInterval(() => {
     if((e.target.value)){
       setValue(e.target.value.length)
     }
     else(
      setValue(0)
     ) 
    },500)
  }
  
  return(
    <>
      <Input onChange={(e) => handleChange(e)}></Input>
      <p>Word: {value}</p>
    </>
  )   
}

export default Bai2;
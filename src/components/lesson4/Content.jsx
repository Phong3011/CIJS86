import {Button, Input } from "antd";
import React from "react";
import { UserOutlined } from '@ant-design/icons';

const Content = () => {

  const clickSubmit =() => {
    alert('Đăng nhập thành công');
  }

  return(
    <div>
      <Input size="large" placeholder="Enter your name" prefix={<UserOutlined />} style={{margin:'20px 0'}}></Input>
      <Input.Password placeholder="Password" style={{margin:'20px 0'}} ></Input.Password>
      <Input placeholder="Enter your email" style={{margin:'20px 0'}}></Input>
      <Input placeholder="Enter your phone number" style={{margin:'20px 0'}}></Input>
      <Button type="primary" onClick={clickSubmit}>Submit</Button>
    </div>
  )
}

export default Content;
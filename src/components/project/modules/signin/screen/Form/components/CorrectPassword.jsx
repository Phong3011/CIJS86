import { Button, Input, Typography } from "antd";
import React from "react";
import CoreInput from "../../../../../hooks/CoreInput";
import { useSignin } from "../hooks/useSignin";

export const CorrectPassword = (props) => {
  const { setMissPassWord} = props;
  const {methodForm,onSubmit } = useSignin(props);
  const {control} = methodForm;
  
  return (
    <div className="w-1/3 mt-24">
      <div className="w-full text-center">
        <Typography.Title level={2}>Đăng nhập</Typography.Title>
      </div>
      <form onSubmit={onSubmit}>
        <div className="px-3">
          <CoreInput control={control} name='account' label='Account'   />
        </div>
        <div className="px-3 mt-5">
          <CoreInput control={control} name='password' label='Password' type='password' />
        </div>
        <div className="flex justify-end pr-5">
          <Button className="mt-5 " type="primary" htmlType="Submit">
            Signin
          </Button>
        </div>
      </form>

      <div className="pl-5">
        <Typography.Text
          className="cursor-pointer hover:text-sky-500"
          underline
          onClick={() => setMissPassWord(true)}
        >
          Quên mật khẩu
        </Typography.Text>
      </div>
    </div>
  );
};

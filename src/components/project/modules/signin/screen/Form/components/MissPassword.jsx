import { Button, Input, Typography } from "antd";
import React from "react";
import CoreInput from "../../../../../hooks/CoreInput";
import { useMissPassword } from "../hooks/useMissPassword";

const MissPassword = (props) => {
  const { methodForm,onSubmit } = useMissPassword();
  const { control} = methodForm;
  const { setMissPassWord } = props;
  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="w-full">
        <div className="mt-24 text-center">
          <Typography.Title level={2}>Quên mật khẩu</Typography.Title>
        </div>
        <div className="mx-10">
          <CoreInput label="Email" control={control} name="email"></CoreInput>
        </div>
        <div className="mx-10 mt-10">
          <Button
            className="w-full font-semibold hover:shadow-md"
            type="primary"
            htmlType="submit"
          >
            Send password to email
          </Button>
        </div>
        <div className="mx-10 mt-4">
          <button
            className="w-full h-8 bg-gray-200 border-none hover:bg-gray-400 hover:shadow-md "
            onClick={() => setMissPassWord(false)}
          >
            Back
          </button>
        </div>
      </div>
    </form>
  );
};

export default MissPassword;

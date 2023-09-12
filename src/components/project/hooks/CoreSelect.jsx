import { Select, Space, Typography } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

const CoreSelect = (props) => {
  const { control, name, label, options } = props;
  return (
    <div className="mx-2 mt-5">
      <div>
        <Typography>{label}</Typography>
      </div>
      <Controller
        control={control}
        name={name}
        render={({ 
          field: { onChange, value, onBlur},
          fieldState:{error}
         }) => (
          <div className="w-full">
            <Select
              allowClear
              className="w-full"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              options={options}
              status={error? error:''}
            />
            {error && <div className='text-red-600'>{error.message}</div>}
          </div>
        )}
      />
    </div>
  );
};
export default CoreSelect;

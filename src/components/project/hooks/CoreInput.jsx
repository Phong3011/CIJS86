import {Input, Typography } from "antd";
import {Controller } from "react-hook-form";

const CoreInput = (props) =>  {
  const {control,name,label, type} = props;
  return (
    <div className="mx-2 mt-5">
      <div>
        <Typography>{label}</Typography>
      </div>
      <Controller
      control={control}
      name={name}
      render={({
        field:{onChange,value, onBlur},
        fieldState: {error}
      })=>{
        return(
        <div>
          {type === 'password' ? (
            <Input.Password placeholder="" onChange={onChange} value={value} status={error ? error : ''} onBlur={onBlur}/>
          ) : (
            <Input placeholder="" onChange={onChange} value={value} status={error ? error : ''} onBlur={onBlur}/>
          )}
          
          {error && <div className='text-red-600'>{error.message}</div>}
        </div>
      )}}
      />
    </div>  
  );
}

export default CoreInput;
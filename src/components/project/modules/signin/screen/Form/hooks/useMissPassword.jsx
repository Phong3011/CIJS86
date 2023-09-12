import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { GetListUser } from "../../../../users/proxy/getListUser";
import { useEffect } from "react";
import { notification } from "antd";

export const useMissPassword = () => {
  const {getListUser,userData} = GetListUser()
  console.log('userData', userData)
  useEffect(() => {
    getListUser()
  },[])

  const methodForm = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(
      yup.object({
        email: yup.string().email(),
      })
    ),
  });

  const onSubmit = methodForm.handleSubmit(async (data) => {
    
    const findUser = userData.find((item) => item.email === data.email)
    console.log('findUser', findUser)

    if(findUser){
      const accountOfEmail = {
        account: findUser.account,
        password: findUser.password
      }
      console.log('true', true)
      emailjs
      .send("service_0mh7xga", "template_64wnjbc", accountOfEmail, "swQHNKfv7iEQzrxl8")
      .then(
        (result) => {
          console.log('result', result)
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
    else{
      notification.error({
        placement:'bottomRight',
        message:"Error",
        description:'Email wrong'
      })
    }
   
    methodForm.reset({ email: "" });
  });
  return {
    onSubmit,
    methodForm
  };
};

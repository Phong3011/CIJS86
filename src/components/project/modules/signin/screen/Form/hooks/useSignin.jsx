import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { GetListUser } from "../../../../users/proxy/getListUser";
import { useEffect } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const useSignin = (props) => {
  const {setCorrectSignin} = props;
  const { userData, getListUser } = GetListUser();
  const navigate = useNavigate();
  useEffect(() => {
    getListUser();
  }, []);

  console.log("userData", userData);
  const methodForm = useForm({
    defaultValues: {
      account: "",
      password: "",
    },
    resolver: yupResolver(
      yup.object({
        account: yup.string().required("Account is required"),
        password: yup.string().required("Password is required"),
      })
    ),
  });

  const onSubmit = methodForm.handleSubmit(async (data) => {
    if (Array.isArray(userData) && userData.length > 0) {
      const checkLogin = userData.find(
        (item) =>
          item.account === data.account && item.password === data.password
      );

      if (checkLogin) {
        localStorage.setItem('roles', checkLogin.roles)
        setCorrectSignin(true)
        navigate("/");
      } else {
        setCorrectSignin(false);
        notification.error({
          placement: "bottomRight",
          message: "Error Signin",
          description: "Account or Password wrong",
        });
      }
    }
  });

  return {
    methodForm,
    onSubmit,
  };
};

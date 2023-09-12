import {get} from 'lodash';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCoreContext } from '../../../../../hooks/useCoreContext';
import { CreateUser } from '../../../proxy/createUser';
import { EditUser } from '../../../proxy/editUser';
import { useSearchParams } from 'react-router-dom';

export const useUserForm = (props) => {
  const {userDetail, handleCancel} = props;
  const { getListUser } = useCoreContext();
  const { proxyCreateUser } = CreateUser();
  const { proxyEditUser } = EditUser();
  const [currentQueryParaMeters] = useSearchParams();
  const showId = currentQueryParaMeters.get("id");

  

  const initialValue = {
    id: "",
    name: "",
    email: "",
    account:'',
    password:'',
    roles: "",
  };

  const methodForm = useForm({
    mode: "onTouched",
    defaultValues: {
      id: get(userDetail, "id", ""),
      name: get(userDetail, "name", ""),
      email: get(userDetail, "email", ""),
      account: get(userDetail,'account',''),
      password:get(userDetail,'password',''),
      roles: get(userDetail, "roles", ""),
    },
    resolver: yupResolver(
      yup.object({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("Sai định dạng")
          .required("Email is required"),
        account:yup.string().required('Account is required'),
        password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,'Invalid password'),
        roles: yup.string().required("Role is required"),
        
      })
    ),
  });

  const onSubmit = methodForm.handleSubmit(async (data) => {
    try {
      if (showId) {
        await proxyEditUser(showId, data);
      } else {
        await proxyCreateUser(data);
      }
      handleCancel();
      getListUser();
    } catch (error) {}
  });

  return {
    methodForm,
    onSubmit,
    initialValue
  }
}
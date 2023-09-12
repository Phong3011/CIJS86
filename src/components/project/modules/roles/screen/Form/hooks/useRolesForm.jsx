import React from 'react'
import { useCoreContext } from '../../../../../hooks/useCoreContext';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {get} from 'lodash'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { EditRoles } from '../../../proxy/editRoles';
import { CreateRoles } from '../../../proxy/createRoles';

export const useRolesForm = (props) => {
  const {roleDetail, handleCancel} = props;
  const {getListRole} = useCoreContext()
  const [currentQueryParameters] = useSearchParams()
  const showId = currentQueryParameters.get('id')
  const {proxyEditRoles} = EditRoles()  
  const {proxyCreateRoles} = CreateRoles()


  const formatPermissions = () => {
    if(Array.isArray(roleDetail?.permissions) && roleDetail?.permissions.length > 0) {
      return roleDetail.permissions
    }
    return []
  }

  const initialValue ={
    name:'',
    id:'',
    permissions: []
  };

  const methodForm = useForm({
    mode:'onTouched',
    defaultValues:{
      id: get(roleDetail,'id',''),
      name: get(roleDetail,'name',''),
      permissions: formatPermissions()
    },
    resolver: yupResolver(
      yup.object({
        name: yup.string().required('Roles is required')
      })
    )
  })

  const onSubmit = methodForm.handleSubmit(async(data) => {
    try {
      if(showId){
        await proxyEditRoles(showId,data)
      }
      else{
        await proxyCreateRoles(data)
      }
      handleCancel()
      getListRole()
    } catch (error) {
      
    }
  })
  
  return {
    methodForm,
    initialValue,
    onSubmit
  }
}

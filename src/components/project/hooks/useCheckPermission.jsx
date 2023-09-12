import { useAppContext } from "./useAppContext"

export const useCheckPermission = (permission) => {
  const {permissions} = useAppContext();
  console.log('permissions', permissions)
  if(Array.isArray(permissions) && permissions.length > 0) {
    const checkPermission = permissions.find(item => item === permission);
    if(checkPermission) {
      return true;
    }
    return false;
  }
 
}
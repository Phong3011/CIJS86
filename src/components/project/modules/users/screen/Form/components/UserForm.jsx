import React, { useEffect } from "react";
import CoreInput from "../../../../../hooks/CoreInput";
import CoreSelect from "../../../../../hooks/CoreSelect";

import { Button } from "antd";
import { useSearchParams } from "react-router-dom";

import { useUserForm } from "../hooks/useUserForm";
import { useCoreContext } from "../../../../../hooks/useCoreContext";

const UserForm = (props) => {
  const { open } = props;
  const [currentQueryParaMeters] = useSearchParams();
  const showId = currentQueryParaMeters.get("id");
  const { methodForm, initialValue, onSubmit } = useUserForm(props);
  const { roleData } = useCoreContext();
  const { control, reset,} = methodForm;

  useEffect(() => {
    if (!showId) {
      reset(initialValue);
    }
  }, [open]);

  const formatRoleData = () => {
    if (Array.isArray(roleData) && roleData.length > 0) {
      return roleData.map((item) => {
        return {
          value: item.id,
          label: item.name,
        };
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CoreInput control={control} name="name" label="Name" />
      <CoreInput control={control} name="email" label="Email" />
      <CoreInput control={control} name="account" label="Account" />
      <CoreInput control={control} name="password" label="Password"/>
      <CoreSelect
        control={control}
        name="roles"
        label="Roles"
        options={formatRoleData()}
      />
      <div className="mx-2">
        <Button className="float-right mt-7" htmlType="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default UserForm;

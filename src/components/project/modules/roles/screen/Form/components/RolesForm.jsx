import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRolesForm } from "../hooks/useRolesForm";
import CoreInput from "../../../../../hooks/CoreInput";
import { Button } from "antd";
import { GroupPermission } from "./CheckboxGroup";
import { FormProvider } from "react-hook-form";

export const RolesForm = (props) => {
  const { open, roleDetail } = props;

  const [currentQueryParaMeters] = useSearchParams();
  const showId = currentQueryParaMeters.get("id");
  const { methodForm, initialValue, onSubmit } = useRolesForm(props);
  const { control, reset } = methodForm;

  useEffect(() => {
    if (!showId) {
      reset(initialValue);
    }
  }, [open]);

  return (
    <FormProvider {...methodForm}>
      <form onSubmit={onSubmit}>
        <CoreInput control={control} name="name" label="Roles" />
        <GroupPermission roleDetail={roleDetail} />
        <div className="mx-2">
          <Button className="float-right mt-7" htmlType="submit">
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

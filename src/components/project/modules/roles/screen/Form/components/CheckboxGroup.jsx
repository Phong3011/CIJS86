import { Checkbox, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { useSelections } from 'ahooks';
import { useSearchParams } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

export const GroupPermission = (props) => {
  const {roleDetail} = props
  console.log('roleDetail', roleDetail)
  const {setValue, watch} = useFormContext();
  const [currentQueryParaMeters] = useSearchParams();
  const showId = currentQueryParaMeters.get('id');

  const defaultSelected = () => {
    if(showId && Array.isArray(roleDetail.permissions) && roleDetail.permissions.length > 0) {
      return roleDetail.permissions
    }
    return []
  }

  const list = [
    "USER.VIEW",
    "USER.CREATE",
    "USER.EDIT",
    "USER.DELETE",
    "ROLES.VIEW",
    "ROLES.CREATE",
    "ROLES.EDIT",
    "ROLES.DELETE"
  ]

  const { selected, allSelected, isSelected, toggle, toggleAll, partiallySelected } = useSelections(
    list,
    defaultSelected(),
  );

  useEffect(() => {
    setValue('permissions', selected);
  }, [selected])

  return (
    <div>
      <div style={{ borderBottom: '1px solid #E9E9E9', padding: '10px 0' }}>
        <Checkbox checked={allSelected} onClick={toggleAll} indeterminate={partiallySelected}>
          Check all
        </Checkbox>
      </div>
      <Row style={{ padding: '10px 0' }}>
        {list.map((o) => (
          <Col span={12} key={o} className='p-4'>
            <Checkbox checked={isSelected(o)} onClick={() => toggle(o)}>
              {o}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </div>
  );
};
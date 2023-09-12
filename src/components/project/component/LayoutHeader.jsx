import { Typography } from 'antd';
import React from 'react'

const LayoutHeader = (props) => {
  const {title} = props;

  return (
    <Typography.Title className='px-0 mt-2 text-black' level={3}>{title}</Typography.Title>
    
  )
}

export default LayoutHeader;

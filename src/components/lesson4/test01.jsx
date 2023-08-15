import { Input, Typography } from 'antd';
import React, { useState } from 'react';

export const HomeWork = () => {
  const [valueInput, setValueInput] = useState('');

  const products = [
    {
      name: 'test01',
      price: '10$',
      description: 'mua hang di 1'
    },
    {
      name: 'test02',
      price: '20$',
      description: 'mua hang di 2'
    },
    {
      name: 'test03',
      price: '30$',
      description: 'mua hang di 3'
    }
  ];

  const handleChange = (e) => {
    setValueInput(e.target.value)
  }

  const renderMap = (object) => {
    return (
      <> 
          <div style={{display: 'flex', flexWrap: 'noWrap'}}><p style={{margin: 0}}>Tên: </p>{object.name}</div>  
          <div  style={{display: 'flex', flexWrap: 'noWrap'}}><p style={{margin: 0}}>Giá: </p>{object.price}</div>  
          <div  style={{display: 'flex', flexWrap: 'noWrap'}}><p style={{margin: 0}}>Mô tả: </p>{object.description}</div> 
        </> 
    )
  }

  const renderProduct = () => {
    if(valueInput !== '') {
      const searchProduct = products.filter(item => (item.name).toLocaleLowerCase() === valueInput.toLowerCase);
      if(Array.isArray(searchProduct) && searchProduct.length > 0) {
        return searchProduct.map(item =>
          renderMap(item)
        )
      }
      return <Typography.Text type='danger'>Not Found</Typography.Text>
    }
    return products.map(item => renderMap(item)) 
  }

  return (
    <>
    <Input onChange={handleChange}></Input>
    <div>{renderProduct()}</div>
    </>
  )
}
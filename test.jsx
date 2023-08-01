import { Input, Typography } from "antd";
import React, { useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const products = [
    {
      name: "Product 1",
      price: "$10",
      description: "Máy ảnh",
    },
    {
      name: "Product 2",
      price: "$20",
      description: "Tàu",
    },
    {
      name: "Product 3",
      price: "$30",
      description: "xe",
    },
    {
      name: "Product 4",
      price: "$40",
      description: "cơm",
    },
  ];

  const newProducts = () => {
    const arrProducts = products.map((item) => (
      <>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>Tên:</p>
          {item.name}
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>Giá:</p>
          {item.price}
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>Mô tả:</p>
          {item.description}
        </div>
      </>
    ));

    const filterValue = products.filter(
      (item) =>
        item.name.toLowerCase() === value.toLowerCase() ||
        item.price === value ||
        item.description === value
    );

    const conditionArr = filterValue.map((item) => (
      <>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>Tên:</p>
          {item.name}
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>Giá:</p>
          {item.price}
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>Mô tả:</p>
          {item.description}
        </div>
      </>
    ));
    if (value !== "") {
      if (Array.isArray(filterValue) && filterValue.length > 0) {
        return conditionArr;
      }
      return <Typography.Text type="danger">Not Found</Typography.Text>
    }
    return arrProducts;
  };

  return (
    <div>
      <Input onChange={handleValue}></Input>
      {newProducts()}
    </div>
  );
};

export default Test;

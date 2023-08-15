import { Typography } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Lesson10 = () => {
  const { pathname } = useLocation();

  const [name, setName] = useState();
  const [product, setProduct] = useState([]);
  const [detailProduct, setDetailProduct] = useState(null);

  useEffect(() => {
    fetch("https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/tasks", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json().then((result) => setProduct(result));
        }
      })
      .then((tasks) => {
      })
      .catch((error) => {
      });
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setName("Home");
    } else if (pathname === "/about") {
      setName("About");
    } else if (pathname === "/product") {
      setName("Shop");
    }
  }, [pathname]);

  const handleClick = (id) => {
    const findItemProduct = product.find((i) => i.id === id);
    if (findItemProduct) {
      setDetailProduct(findItemProduct);
    }
  };

  const renderLists = () => {
    if (Array.isArray(product) && product.length > 0) {
      return product.map((item, index) => {
        return (
          <li onClick={() => handleClick(item.id)}>
            name{index + 1} description{index + 1} cost{index + 1}
          </li>
        );
      });
    }
    return [];
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link to="/">
          <Typography.Title level={3}>Home</Typography.Title>
        </Link>
        <Link to="/about">
          <Typography.Text>About</Typography.Text>
        </Link>
        <Link to="/product">
          <Typography.Text>Product</Typography.Text>
        </Link>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {pathname === "/product" && (
            <ul style={{ listStyle: "none", cursor: 'pointer' }}>{renderLists()}</ul>
          )}
        </div>
        <div>
          {detailProduct !== null && pathname === '/product' && (
            <ul style={{listStyle: 'none'}}>
              <li>{detailProduct.name}</li>
              <li>{detailProduct.description}</li>
              <li>{detailProduct.cost}$</li>
            </ul>
          )}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography.Title level={3}>{name}</Typography.Title>
      </div>
    </>
  );
};

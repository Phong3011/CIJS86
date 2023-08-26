import { DeleteOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Typography, Tabs } from "antd";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem("list")));
  const [add, setAdd] = useState();
  const [error, setError] = useState("");

  const handleInput = (e) => {
    if (value.find((item) => item.name === e.target.value)) {
      setError("Key đã tồn tại");
    } else {
      setAdd(e.target.value);
      setError("");
    }
  };
  const clickAdd = () => {
    setValue((prev) => {
      if (prev.find((item) => item.name === add)) {
        setError("Key đã tồn tại");
        return prev;
      }
      return [...prev, ...[{ name: add, isChecked: false }]];
    });
  };

  const handleChangeTab = (key) => {
    console.log(key);
  };
  const handleChangeCheckbox = (e, index) => {
    if (e) {
      setValue((prev) => {
        return prev.map((i, ind) => {
          if (ind !== index) {
            return i;
          }
          return {
            name: i.name,
            isChecked: e.target.checked,
          };
        });
      });
    }
  };

  const handleDelete = (nameDelete) => {
    setValue((prev) => {
      return prev.filter((item) => item.name !== nameDelete);
    });
  };

  const handleRemoveAll = () => {
    setValue((prev) => {
      return prev.filter((item) => item.isChecked === false);
    });
  };

  const renderUI = () => {
    return (
      <div className="flex flex-nowrap w-64 justify-between">
        <div className="flex flex-wrap">
          <Input
            className="w-full mr-4"
            placeholder="add details"
            onChange={(e) => handleInput(e)}
          />
          {error && <div className="text-red-500 w-full">{error}</div>}
        </div>
        <Button type="primary" onClick={clickAdd}>
          Add
        </Button>
      </div>
    );
  };

  const items = [
    {
      key: "1",
      label: "All",
      children: (
        <div>
          {renderUI()}
          {Array.isArray(value) &&
            value.length > 0 &&
            value.map((item, index) => {
              return (
                <div className="w-full flex flex-wrap" key={index.toString()}>
                  <Checkbox
                    checked={item.isChecked}
                    onChange={(e) => handleChangeCheckbox(e, index)}
                  >
                    {item.name}
                  </Checkbox>
                </div>
              );
            })}
        </div>
      ),
    },
    {
      key: "2",
      label: "Active",
      children: (
        <div>
          {renderUI()}
          {Array.isArray(value) &&
            value.length > 0 &&
            value
              .filter((i) => i.isChecked === false)
              .map((item, index) => {
                return (
                  <div className="w-full flex flex-wrap" key={index.toString()}>
                    <Checkbox
                      checked={item.isChecked}
                      onChange={(e) => handleChangeCheckbox(e, item.name)}
                    >
                      {item.name}
                    </Checkbox>
                  </div>
                );
              })}
        </div>
      ),
    },
    {
      key: "3",
      label: "Completed",
      children: (
        <div>
          {Array.isArray(value) &&
            value.length > 0 &&
            value
              .filter((i) => i.isChecked === true)
              .map((item, index) => {
                return (
                  <div className="w-full flex flex-wrap" key={index.toString()}>
                    <div className="w-64 flex flex-nowrap justify-between">
                      <Checkbox
                        checked={item.isChecked}
                        onChange={(e) => handleChangeCheckbox(e, item.name)}
                      >
                        {item.name}
                      </Checkbox>
                      <DeleteOutlined
                        className="text-red-400 cursor-pointer"
                        onClick={() => handleDelete(item.name)}
                      />
                    </div>
                  </div>
                );
              })}
          <div className="ml-auto">
            <Button danger onClick={() => handleRemoveAll()}>
              Delete All
            </Button>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(value));
  }, [value]);

  console.log("value", value);
  return (
    <div>
      <Typography.Title level={2} className="text-center">
        #todo
      </Typography.Title>
      <Tabs defaultActiveKey="1" items={items} onChange={handleChangeTab} />
    </div>
  );
};
export default Todo;

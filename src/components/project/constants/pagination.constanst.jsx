import { Typography } from "antd";

export const pagination = {
  defaultPageSize: 10,
  showSizeChanger: true,
  pageSizeOptions: ['5', '10', '15'],
  showTotal: (total) => {
    return <Typography.Title level={4}>{`Total : ${total}`}</Typography.Title>;
  },
}
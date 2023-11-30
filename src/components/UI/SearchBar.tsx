import React from "react";
import { Input, Select, Space } from "antd";


const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
  },
];


const SearchBar = () => (
  <Space.Compact className="w-full">
    <Select defaultValue="Zhejiang" options={options} />
    <Input />
  </Space.Compact>
);

export default SearchBar;
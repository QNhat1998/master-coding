import React from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
const arrPhone = [
  {
    id: 1,
    name: "Samsung Galaxy A56",
    brand: "samsung",
    ram: "8GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-xanh-thumb-600x600.jpg",
  },
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    brand: "samsung",
    ram: "12GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-5g-600x600.jpg",
  },
  {
    id: 1,
    name: "Xiaomi Redmi Note 14",
    brand: "xiaomi",
    ram: "8GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/320730/xiaomi-redmi-note-14-pro-thumb-600x600.jpg",
  },
  {
    id: 1,
    name: "Xiaomi Redmi Note 13",
    brand: "xiaomi",
    ram: "4GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/309831/xiaomi-redmi-note-13-black-thumb-600x600.jpg",
  },
  {
    id: 1,
    name: "iPhone 16 Pro Max 256GB",
    brand: "apple",
    ram: "12GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg",
  },
  {
    id: 1,
    name: "iPhone 14 Pro Max 256GB",
    brand: "apple",
    ram: "8GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-black-thumbnew-600x600.jpg",
  },
];
const Search = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 7: Tìm kiếm phần tử dựa trên thuộc tính yêu cầu
      </h1>
      <p>Cho danh sách sản phẩm</p>
      <CodeSnippet content={arrPhone} id="arrPhone" />
    </div>
  );
};

export default Search;

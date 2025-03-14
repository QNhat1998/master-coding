import React, { useState } from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
import Button from "../components/button/button";
import SelectProducts from "../components/select/select";
const products = [
  { name: "iPhone", category: "Electronics" },
  { name: "Samsung TV", category: "Electronics" },
  { name: "Nike Shoes", category: "Fashion" },
  { name: "Levi's Jeans", category: "Fashion" },
  { name: "Blender", category: "Home Appliances" },
];
const Filter = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 3: Lọc các phần tử hiển thị dựa trên hãng
      </h1>
      <p>Cho một danh sách các sản phẩm:</p>
      <CodeSnippet content={products} id="products" />
      <p>
        Xây dựng giao diện với một select cho phép lọc các phần tử hiển thị dựa
        trên category
      </p>
      <Button setClicked={() => setClicked(!clicked)} />
      {clicked && <SelectProducts products={products}/>}
    </div>
  );
};

export default Filter;

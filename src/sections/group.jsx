import React, { useState } from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
import Button from "../components/button/button";
const products = [
  { name: "iPhone", category: "Electronics" },
  { name: "Samsung TV", category: "Electronics" },
  { name: "Nike Shoes", category: "Fashion" },
  { name: "Levi's Jeans", category: "Fashion" },
  { name: "Blender", category: "Home Appliances" },
];

const Group = () => {
  const [clicked, setClicked] = useState(false);

  const groupProduct = products.reduce((categoryList, { category, name }) => {
    if (!category[category]) {
      categoryList[category] = [];
    }
    categoryList[category].push(name);
    return categoryList;
  }, {});
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 4: Nhóm các phần tử dựa trên danh mục
      </h1>
      <p>Cho danh sách sản phẩm với category:</p>
      <CodeSnippet content={products} id="products" />
      <p>Viết chương trình nhóm sản phẩm theo danh mục.</p>
      <Button setClicked={() => setClicked(!clicked)} />
      <CodeSnippet content={groupProduct} height={250} animate clicked={clicked} />
    </div>
  );
};

export default Group;

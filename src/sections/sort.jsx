import React, { useState } from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
import Button from "../components/button/button";
const items = [
  { name: "Keyboard", price: 50 },
  { name: "Mouse", price: 20 },
  { name: "Monitor", price: 150 },
  { name: "Speaker", price: 100 },
];
const Sort = () => {
  const [clicked, setClicked] = useState(false);
  const sortedItems = [...items].sort(
    (item1, item2) => item1.price - item2.price
  );
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 6: Sắp xếp các sản phẩm theo giá từ thấp đến cao
      </h1>
      <p>Cho danh sách sản phẩm:</p>
      <CodeSnippet content={items} id="items" />
      Viết chương trình sắp xếp sản phẩm theo giá từ thấp đến cao.
      <Button setClicked={() => setClicked(!clicked)} />
      <CodeSnippet
        content={sortedItems}
        height={250}
        animate
        clicked={clicked}
      />
    </div>
  );
};

export default Sort;

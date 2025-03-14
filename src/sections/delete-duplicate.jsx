import { useState } from "react";
import Button from "../components/button/button";
import CodeSnippet from "../components/code-snippet/code-snippet";
const randomArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

const DeleteDuplicate = () => {
  const [clicked, setClicked] = useState(false);

  const handleDeleteDuplicate = () => {
    const newArray = randomArray.filter(
      (value, index, seft) => seft.indexOf(value) === index
    );

    return newArray;
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 2: Loại bỏ các phần tử trùng lặp khỏi mảng (Không dùng 2 vòng lặp)
      </h1>
      <p>Cho một danh sách số ngẫu nhiên trong mảng</p>
      <CodeSnippet content={randomArray} id="arrNumber" space={0} />
      <p>
        Thực hiện lọc và loại bỏ các phần tử trùng lặp trong mảng mà không dùng
        2 vòng lặp
      </p>
      <Button setClicked={() => setClicked(!clicked)} />
      <CodeSnippet
        content={handleDeleteDuplicate()}
        height={250}
        space={0}
        animate
        clicked={clicked}
      />
    </div>
  );
};

export default DeleteDuplicate;

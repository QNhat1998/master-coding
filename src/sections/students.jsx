import Button from "../components/button/button";
import CodeSnippet from "../components/code-snippet/code-snippet";
import { useState } from "react";

const students = [
  { name: "Nam", score: 85 },
  { name: "Hoa", score: 92 },
  { name: "Tuấn", score: 78 },
  { name: "Lan", score: 90 },
];

const Students = () => {
  const [clicked, setClicked] = useState(false);

  const handleTopScore = () => {
    let topStudent = students[0];
    for (let i = 1; i < students.length; i++) {
      if (students[i].score > topStudent.score) topStudent = students[i];
    }
    return `${topStudent.name} có điểm cao nhất`;
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 1: Tìm sinh viên có điểm cao nhất
      </h1>
      <p>Cho danh sách sinh viên:</p>
      <CodeSnippet content={students} id="students" />
      <p>Trả về kết quả sinh viên có điểm cao nhất lớp</p>
      <Button setClicked={() => setClicked(!clicked)} />
      {clicked && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md text-black">
          <span className="text-2xl font-bold">{handleTopScore()}</span>
        </div>
      )}
    </div>
  );
};

export default Students;

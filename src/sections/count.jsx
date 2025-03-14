import React, { useState } from "react";
import Button from "../components/button/button";
import CodeSnippet from "../components/code-snippet/code-snippet";
const employees = [
  { name: "John", department: "HR" },
  { name: "Alice", department: "IT" },
  { name: "Bob", department: "HR" },
  { name: "Charlie", department: "IT" },
  { name: "David", department: "Finance" },
];
const Count = () => {
  const [clicked, setClicked] = useState(false);

  const countEmployees = Object.entries(
    employees.reduce((departmentList, employee) => {
      departmentList[employee.department] =
        (departmentList[employee.department] || 0) + 1;
      return departmentList;
    }, {})
  )
    .map(([department, count]) => `${department}: ${count} nhân viên`)
    .join(", ");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 5: Đếm số lượng nhân viên dựa trên phòng ban
      </h1>
      <p>Cho danh sách nhân viên:</p>
      <CodeSnippet content={employees} id="employees" />
      <p>Viết chương trình đếm số lượng nhân viên trong từng phòng ban.</p>
      <Button setClicked={() => setClicked(!clicked)} />
      {clicked && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md text-black">
          <span className="text-2xl font-bold">{countEmployees}</span>
        </div>
      )}
    </div>
  );
};

export default Count;

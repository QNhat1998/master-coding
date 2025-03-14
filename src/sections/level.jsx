import React, { useState } from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
import Button from "../components/button/button";
const employees = [
  { id: 1, name: "CEO", managerId: null },
  { id: 2, name: "Manager A", managerId: 1 },
  { id: 3, name: "Manager B", managerId: 1 },
  { id: 4, name: "Employee A1", managerId: 2 },
  { id: 5, name: "Employee A2", managerId: 2 },
  { id: 6, name: "Employee B1", managerId: 3 },
];

const employeesTree = (employees) => {
  const map = new Map();

  // map.set(key,value)
  // Lưu data employee vào map với 1 object employee thêm children
  employees.forEach((employee) => {
    map.set(employee.id, { ...employee, children: [] });
  });

  let ceo = null;
  //Nếu có managerId tức là nhân viên này có cấp trên
  // Dùng map.get(emp.managerId) để lấy đối tượng của người quản lý.
  // Nếu tìm thấy manager, thêm nhân viên này vào children của manager bằng manager.children.push(map.get(emp.id))
  employees.forEach((employee) => {
    if (employee.managerId === null) {
      ceo = map.get(employee.id) || null;
    } else {
      const manager = map.get(employee.managerId);
      if (manager) {
        manager.children.push(map.get(employee.id));
      }
    }
  });

  return ceo;
};

const Level = () => {
  const [clicked, setClicked] = useState(false);

  const employeesData = employeesTree(employees);
  console.log(employeesData);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 8: Chuyển danh sách nhân viên thành cây phân cấp (Tree)
      </h1>
      <p>Cho danh sách nhân viên:</p>
      <CodeSnippet content={employees} id="employees" />
      <p>Chuyển danh sách trên thành cấu trúc cây phân cấp.</p>
      <p>Kết quả mong muốn:</p>
      <Button setClicked={() => setClicked(!clicked)} />
      <CodeSnippet
        content={employeesData}
        height={200}
        animate
        clicked={clicked}
      />
    </div>
  );
};

export default Level;

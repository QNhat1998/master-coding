import React, { useState } from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
import Button from "../components/button/button";
const orders = [
  {
    id: 1,
    customer: "Alice",
    items: [{ product: "Laptop", price: 1500, quantity: 1 }],
  },
  {
    id: 2,
    customer: "Bob",
    items: [
      { product: "Phone", price: 700, quantity: 2 },
      { product: "Tablet", price: 400, quantity: 1 },
    ],
  },
  {
    id: 3,
    customer: "Alice",
    items: [
      { product: "Laptop", price: 1500, quantity: 1 },
      { product: "Mouse", price: 50, quantity: 2 },
    ],
  },
];
const Analysis = () => {
  const [clicked, setClicked] = useState(false);

  let totalRevenue = 0;
  let maxSpending = 0;
  let topCustomer = "";
  const customerSpending = {};

  orders.forEach((order) => {
    const orderTotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    totalRevenue += orderTotal;
    customerSpending[order.customer] =
      (customerSpending[order.customer] || 0) + orderTotal;

    if (customerSpending[order.customer] > maxSpending) {
      maxSpending = customerSpending[order.customer];
      topCustomer = order.customer;
    }
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Bài 9: Phân tích dữ liệu bán hàng</h1>
      <p>Cho danh sách đơn hàng:</p>
      <CodeSnippet content={orders} id="orders" />
      <p>Viết chương trình:</p>
      <p>1. Tính tổng doanh thu.</p>
      <p>2. Tìm khách hàng có tổng chi tiêu cao nhất.</p>
      <Button setClicked={() => setClicked(!clicked)} />
      {clicked && (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="flex items-center gap-2 text-lg font-semibold text-blue-700">
            <span className="text-gray-900">Tổng doanh thu:</span>
            <span className="text-green-600 font-bold">
              ${totalRevenue.toLocaleString()}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-lg font-semibold text-yellow-600">
            <span className="text-gray-900">
              Khách hàng chi tiêu nhiều nhất:
            </span>
            <span className="text-red-600 font-bold">{topCustomer}</span>
            <span className="text-green-600 font-bold">
              (${maxSpending.toLocaleString()})
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analysis;

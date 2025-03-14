import { useState } from "react";

export default function SelectProducts({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Lấy danh sách category duy nhất
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Lọc sản phẩm theo category
  const filteredProducts =
    selectedCategory === "All" || selectedCategory === ""
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full p-6 flex items-start gap-4">
      {/* Dropdown chọn category */}
      <select
        className="h-10 p-2 border bg-white text-black font-bold border-gray-300 rounded-md focus:ring focus:ring-blue-300"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} className="text-black font-bold" value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Danh sách sản phẩm */}
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.name} className="p-2 border-b">
              {product.name} -{" "}
              <span className="text-gray-500">{product.category}</span>
            </li>
          ))
        ) : (
          <p className="text-red-500 mt-2">Không có sản phẩm nào.</p>
        )}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
import SelectFilter from "../components/select/select-filter";
import Button from "../components/button/button";
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
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "samsung",
    ram: "12GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/307174/samsung-galaxy-s24-ultra-5g-600x600.jpg",
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 14",
    brand: "xiaomi",
    ram: "8GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/320730/xiaomi-redmi-note-14-pro-thumb-600x600.jpg",
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 13",
    brand: "xiaomi",
    ram: "4GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/309831/xiaomi-redmi-note-13-black-thumb-600x600.jpg",
  },
  {
    id: 5,
    name: "iPhone 16 Pro Max 256GB",
    brand: "apple",
    ram: "12GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg",
  },
  {
    id: 6,
    name: "iPhone 14 Pro Max 256GB",
    brand: "apple",
    ram: "8GB",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-black-thumbnew-600x600.jpg",
  },
];

const SearchModal = ({ filteredPhones }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 h-[350px] gap-6">
      {filteredPhones.length > 0 ? (
        filteredPhones.map((phone) => (
          <div
            key={phone.id}
            className="border-black border-2 p-4 rounded-lg shadow-md text-left"
          >
            <img
              src={phone.image}
              alt={phone.name}
              className="w-full h-40 object-cover mb-2 rounded-md"
            />
            <h2 className="text-lg font-semibold">{phone.name}</h2>
            <p className="text-gray-600">
              📌 Brand: {phone.brand.toUpperCase()}
            </p>
            <p className="text-gray-600">💾 RAM: {phone.ram}</p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">
          Không tìm thấy sản phẩm nào.
        </p>
      )}
    </div>
  );
};

const Search = () => {
  const [clicked, setClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const filteredPhones = arrPhone.filter(
    (phone) =>
      phone.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedBrand === "" || phone.brand === selectedBrand) &&
      (selectedRam === "" || phone.ram === selectedRam)
  );
  const brands = [...new Set(arrPhone.map((phone) => phone.brand))];
  const rams = [...new Set(arrPhone.map((phone) => phone.ram))];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 7: Tìm kiếm phần tử dựa trên thuộc tính yêu cầu
      </h1>
      <p>Cho danh sách sản phẩm</p>
      <CodeSnippet content={arrPhone} id="arrPhone" />
      <Button setClicked={() => setClicked(prev => !prev)} />
      <div
        className={`absolute ${
          clicked ? "top-0" : "top-full"
        } left-0 right-0 w-full h-full transition-all duration-500 bg-white p-10 flex flex-col gap-10`}
      >
        <h1 className="text-2xl font-bold mb-4 text-black">
          Danh sách điện thoại
        </h1>
        <div className="flex gap-4 items-center mb-10">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên..."
            className="p-2 text-black border-black border-2 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SelectFilter
            label="Thương hiệu"
            options={brands}
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          />
          <SelectFilter
            label="RAM"
            options={rams}
            value={selectedRam}
            onChange={(e) => setSelectedRam(e.target.value)}
          />
        </div>
        <SearchModal filteredPhones={filteredPhones} />
        <Button label="Thoát" setClicked={() => setClicked(prev => !prev)} />
      </div>
    </div>
  );
};

export default Search;

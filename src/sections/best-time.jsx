import React, { useEffect, useState } from "react";
import CodeSnippet from "../components/code-snippet/code-snippet";
const BestTime = () => {
  const [prices, setPrices] = useState([]);
  console.log(prices);

  useEffect(() => {
    if (prices) {
      const pricesRandom = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * 20)
      );
      setPrices(pricesRandom);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">
        Bài 10: Tìm thời điểm tốt nhất để mua và bán cổ phiếu (Best Time to Buy
        and Sell Stock)
      </h1>
      <p>
        Bạn được cung cấp một mảng
        <span className="text-red-500 bg-secondary rounded-lg p-2">
          prices[]
        </span>
        , trong đó
        <span className="text-red-500 bg-secondary rounded-lg p-2">
          prices[i]
        </span>
        đại diện cho giá cổ phiếu vào ngày thứ
        <span className="text-red-500 bg-secondary rounded-lg p-2">i</span> (từ
        ngày 0 đến ngày
        <span className="text-red-500 bg-secondary rounded-lg p-2">n-1</span>
        trong tuần).
        <br />
        Nhiệm vụ của bạn là tìm ra cặp thời điểm mua & bán sao cho lợi nhuận thu
        được là lớn nhất.
        <br />• Bạn chỉ được mua trước khi bán (tức là
        <span className="text-red-500 bg-secondary rounded-lg p-2">
          i &lt; j
        </span>
        với
        <span className="text-red-500 bg-secondary rounded-lg p-2">
          prices[i]
        </span>
        là giá mua,
        <span className="text-red-500 bg-secondary rounded-lg p-2">
          prices[j]
        </span>
        là giá bán). <br />• Nếu không có giao dịch nào có lợi nhuận dương, trả
        về 0.
      </p>
      <CodeSnippet content={prices} id="prices" space={0} />
    </div>
  );
};

export default BestTime;

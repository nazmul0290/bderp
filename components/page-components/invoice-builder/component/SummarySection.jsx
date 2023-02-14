import React from "react";
import { useSelector } from "react-redux";

const SummarySection = () => {
  const items = useSelector((state) => state.invoice.items);

  const subTotal = [...items]
    ?.map((item) => item.subtotal)
    .reduce((total, subtotal) => (total += subtotal), 0)
    .toFixed(2);

  return (
    <div className="flex justify-end w-full mt-5 ">
      <div className="w-2/3"></div>
      <div className="w-1/3">
        <div className="px-2 py-2 text-white bg-gray-900">
          <h1>Invoice Summary</h1>
        </div>
        <div className="px-2 py-2">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>$ {subTotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>$ 0.00</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>$ 0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;

import TextField from "@/components/global-components/inputs/CustomTextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemForm from "./ItemForm";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeEditable, removeItem } from "@/redux/resolvers/invoiceSlice";

const InvoiceItemsTable = () => {
  const items = useSelector((state) => state.invoice.items);
  console.log(items);
  const dispatch = useDispatch();

  return (
    <section className="mt-10">
      <div className="overflow-hidden border rounded-md">
        <section className="w-fulloverflow-auto ">
          <div className="flex justify-between w-full text-white bg-gray-800 border-b">
            <div className="w-2/6 px-2 py-4 text-sm font-medium">Name</div>
            <div className="w-1/6 px-2 py-4 text-sm font-medium">Quantity</div>
            <div className="w-1/6 px-2 py-4 text-sm font-medium">
              Unit Price
            </div>
            <div className="w-1/6 px-2 py-4 text-sm font-medium">Tax</div>
            <div className="w-1/6 px-2 py-4 text-sm font-medium">Subtotal</div>
          </div>
          {items.map((item) => {
            const deleteItem = () => {
              dispatch(removeItem(item.id));
            };

            const makeEditableHandler = () => {
              dispatch(makeEditable(item.id));
            };

            if (item.isEditing) {
              return <ItemForm key={item.id} item={item} />;
            }

            return (
              <div key={item.id} className="invoice__items">
                <div className="flex w-full justify-evenly">
                  <div className="w-2/6 px-2 py-4 text-sm ">{item.name}</div>
                  <div className="w-1/6 px-2 py-4 text-sm">{item.quantity}</div>
                  <div className="w-1/6 px-2 py-4 text-sm">
                    {item.unit_price}
                  </div>
                  <div className="w-1/6 px-2 py-4 text-sm">{item.tax}</div>
                  <div className="w-1/6 px-2 py-4 text-sm">{item.subtotal}</div>
                </div>
                <div className="flex justify-center w-full border-b ">
                  <div className="w-5/6 px-2 py-4 text-sm">
                    {item.description}
                  </div>
                  <div className="w-1/6 px-2 py-4 text-sm invoice__items--action">
                    <button onClick={makeEditableHandler}>
                      <CheckIcon />
                    </button>
                    <button onClick={deleteItem}>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default InvoiceItemsTable;

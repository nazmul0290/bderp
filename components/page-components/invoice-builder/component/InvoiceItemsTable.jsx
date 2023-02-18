import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemForm from "./ItemForm";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { makeEditable, removeItem } from "@/redux/resolvers/invoiceSlice";
import { makePriceString } from "@/utils/tools";

const InvoiceItemsTable = () => {
  const items = useSelector((state) => state.invoice.items);
  const dynamicFormRef = useRef(null);
  const [tax, setTax] = useState([
    {
      value: 0,
      display: "Non Taxable",
      is_taxable: false,
      tax_name: "",
      tax_rate: 0
    },
  ]);

  const dispatch = useDispatch();

  return (
    <section className="mt-10 dynamic_form_section" ref={dynamicFormRef}>
      <div className="overflow-hidden border rounded-md">
        <section className="w-fulloverflow-auto ">
          <div className="flex justify-between w-full text-white bg-gray-800 border-b">
            <div className="w-2/12 px-2 py-4 text-sm font-medium">
              Service Date
            </div>
            <div className="w-3/12 px-2 py-4 text-sm font-medium">Name</div>
            <div className="w-1/12 px-2 py-4 text-sm font-medium text-center">
              Qty
            </div>
            <div className="w-2/12 px-2 py-4 text-sm font-medium text-right">
              Unit Price
            </div>
            <div className="w-2/12 px-2 py-4 text-sm font-medium">Tax</div>
            <div className="w-1/12 px-2 py-4 text-sm font-medium text-right">
              Subtotal
            </div>
            <div className="w-1/12 px-2 py-4 text-sm font-medium"></div>
          </div>
          {items.map((item) => {
            const deleteItem = () => {
              dispatch(removeItem(item.id));
            };

            const makeEditableHandler = () => {
              dispatch(makeEditable(item.id));
            };

            if (item.isEditing) {
              return (
                <ItemForm dynamicFormRef={dynamicFormRef} key={item.id} item={item} tax={tax} setTax={setTax} />
              );
            }

            return (
              <div key={item.id} className="border-b invoice__items">
                <div className="flex w-full ">
                  <div className="w-2/12 px-2 py-4 text-sm ">
                    {item.service_date}
                  </div>
                  <div className="w-3/12 px-2 py-4 text-sm ">
                    {item.product_name}
                  </div>
                  <div className="w-1/12 px-2 py-4 text-sm text-center">
                    {item.product_qty}
                  </div>
                  <div className="w-2/12 px-2 py-4 text-sm text-right">
                    {makePriceString(Number(item.unit_price))}
                  </div>
                  <div className="w-2/12 px-2 py-4 text-sm">
                    {item.is_taxable && `${item.tax_name}-${item.tax_rate}%`}
                  </div>
                  <div className="w-1/12 px-2 py-4 text-sm text-right">
                    {makePriceString(item.subtotal)}
                  </div>

                  <div className="w-1/12 px-2 py-4 text-sm invoice__items--action">
                    <button onClick={(event) => {
                      event.stopPropagation();
                      makeEditableHandler();
                      }}>
                      <EditIcon />
                    </button>
                    <button onClick={deleteItem}>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
                {item.product_desctiption && (
                  <div className="flex justify-end w-full border-b ">
                    <div className="w-5/6 px-2 pb-4 text-sm">
                      {item.product_desctiption}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default InvoiceItemsTable;

import React, { useCallback, useState } from "react";
import InvoiceHeader from "./InvoiceHeader";

import InvoiceItemsTable from "./InvoiceItemsTable";
import uuid from "react-uuid";
import {
  addInvoiceItem,
  showDescriptionField,
} from "@/redux/resolvers/invoiceSlice";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "@/utils/is-empty";
import SummarySection from "./SummarySection";
import InformationSection from "./InformationSection";
import { TextareaAutosize, TextField } from "@mui/material";

const InvoiceForm = ({ invoiceFormik }) => {
  const invoice = useSelector((state) => state.invoice);

  const dispatch = useDispatch();

  const addNewItemHandler = () => {
    console.log(invoice.items);
    const items = invoice.items;
    const variables = {
      id: uuid(),
      product_name: "",
      product_qty: 0,
      unit_price: 0,
      isEditing: true,
      product_desctiption: "",
      product_discount: "",
      is_taxable: false,
      tax_name: "",
      tax_rate: 0,
      tax_amount: 0,
      subtotal: 0,
    };
    if (isEmpty(items)) {
      dispatch(addInvoiceItem(variables));
      return;
    }

    const isTrueHave = items.find((item) => item.isEditing === true);

    if (isEmpty(isTrueHave)) {
      dispatch(addInvoiceItem(variables));
    }
    console.log(isTrueHave);
  };

  return (
    <div>
      <div className="">
        <InvoiceHeader invoiceFormik={invoiceFormik} />
        <div>
          <InformationSection />
        </div>
        {invoice.description_edit && (
          <div
          className="my-3"
            onBlur={() => {
              dispatch(showDescriptionField());
            }}
          >
            <TextField
              autoFocus
              fullWidth
              className=""
              placeholder="invoice description"
            />
          </div>
        )}
        <div>
          <InvoiceItemsTable />
        </div>
        <div className="mt-3">
          <div
            className="p-3 font-bold text-center transition-all duration-100 border-2 border-dashed rounded-md cursor-pointer hover:border-solid hover:border-purple-400"
            onClick={(event) => {
              event.stopPropagation();
              addNewItemHandler();
            }}
          >
            <h1>Add new Invoice Item</h1>
          </div>
        </div>
        <SummarySection />
      </div>
    </div>
  );
};

export default InvoiceForm;

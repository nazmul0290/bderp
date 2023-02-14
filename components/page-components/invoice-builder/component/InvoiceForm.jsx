import React, { useCallback, useState } from "react";
import InvoiceHeader from "./InvoiceHeader";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactsIcon from "@mui/icons-material/Contacts";
import SenderRecieverBox from "./SenderRecieverBox";
import InvoiceItemsTable from "./InvoiceItemsTable";
import uuid from "react-uuid";
import {
  addInvoiceItem,
  addRecieverDetailes,
  addSenderDetails,
} from "@/redux/resolvers/invoiceSlice";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "@/utils/is-empty";
import SummarySection from "./SummarySection";

const InvoiceForm = () => {
  const invoice = useSelector((state) => state.invoice);
  console.log(invoice);
  const dispatch = useDispatch();

  const addNewItemHandler = () => {
    console.log(invoice.items);
    const items = invoice.items;
    const variables = {
      id: uuid(),
      name: "",
      quantity: 0,
      unit_price: 0,
      description: "",
      tax: {
        name: "",
        tax: "",
      },
      subtotal: 0,
      isEditing: true,
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
        <InvoiceHeader />
        <div>
          <div className="flex gap-5 mt-10 cursor-pointer">
            <SenderRecieverBox
              Icon={ApartmentIcon}
              contactFor="Sender contact details"
              nameFor="Sender name"
              infoFor="From"
              headerAddressModal="Sender Address"
              headerInfoModal="Sender Info"
              action={addSenderDetails}
              senderDetails={invoice.information.sender_details}
            />
            <SenderRecieverBox
              Icon={ContactsIcon}
              contactFor="Reciever contact details"
              nameFor="Reciever name"
              infoFor="To"
              action={addRecieverDetailes}
              headerAddressModal="Reciever Address"
              senderDetails={invoice.information.reciever_details}
              headerInfoModal="Reciever Info"
            />
          </div>
        </div>
        <div>
          <InvoiceItemsTable />
        </div>
        <div className="mt-3">
          <div
            className="p-3 font-bold text-center transition-all duration-100 border-2 border-dashed rounded-md cursor-pointer hover:border-solid hover:border-purple-400"
            onClick={addNewItemHandler}
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

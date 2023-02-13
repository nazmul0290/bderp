import React, { useCallback, useState } from "react";
import InvoiceHeader from "./InvoiceHeader";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactsIcon from "@mui/icons-material/Contacts";
import SenderRecieverBox from "./SenderRecieverBox";
import InvoiceItemsTable from "./InvoiceItemsTable";

const InvoiceForm = () => {
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
              inputName="sender"
              headerAddressModal="Sender Address"
              headerInfoModal="Sender Info"
            />
            <SenderRecieverBox
              Icon={ContactsIcon}
              contactFor="Reciever contact details"
              nameFor="Reciever name"
              infoFor="To"
              inputName="reciever"
              headerAddressModal="reciever Address"
              headerInfoModal="reciever Info"
            />
          </div>
        </div>
        <div>
          <InvoiceItemsTable />
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;

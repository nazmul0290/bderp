import React from "react";
import SenderRecieverBox from "./SenderRecieverBox";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactsIcon from "@mui/icons-material/Contacts";

import {
  addRecieverDetailes,
  addSenderDetails,
} from "@/redux/resolvers/invoiceSlice";
import { useSelector } from "react-redux";

const InformationSection = () => {
  const invoice = useSelector((state) => state.invoice);
  return (
    <div className="flex gap-5 mt-10 cursor-pointer items-start">
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
  );
};

export default InformationSection;

import Button from "@/components/ui/Button";
import {
  showClientInfoField,
  showCompanyInfoField,
  showDescriptionField,
} from "@/redux/resolvers/invoiceSlice";
import isEmpty from "@/utils/is-empty";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const InvoiceController = ({ downloadPDFHandler }) => {
  const [addPayment, setAddPayment] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-col gap-5">
        <Button
          secondary
          onClick={() => {
            dispatch(showCompanyInfoField());
          }}
        >
          Add company info
        </Button>
        <Button
          secondary
          onClick={() => {
            dispatch(showClientInfoField());
          }}
        >
          Add client info
        </Button>
        <Button
          secondary
          onClick={() => {
            dispatch(showDescriptionField());
          }}
        >
          Add description
        </Button>
        <Button
          secondary
          onClick={() => {
            setAddPayment(!addPayment);
          }}
        >
          Add payment
        </Button>
        {addPayment && (
          <TextField
            onBlur={() => setAddPayment(!addPayment)}
            autoFocus
            size="small"
          />
        )}
        <hr />
        <Button> Delete invoice </Button>
        <Button onClick={downloadPDFHandler}> Download PDF </Button>
        <Button> Save</Button>
      </div>
    </div>
  );
};

export default InvoiceController;

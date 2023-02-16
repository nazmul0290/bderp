import CustomTextField from "@/components/global-components/inputs/CustomTextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const InvoiceHeader = ({ invoiceFormik }) => {
  const { values, handleChange, errors, touched, handleSubmit, setFieldValue } =
    invoiceFormik;

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files

    setFieldValue("company_logo", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex gap-5 ">
      <div className="w-1/2 ">
        <div className="inline-block p-4 transition-all duration-100 border-2 border-dashed rounded-md hover:border-solid hover:border-purple-400">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {values.company_logo ? (
              <Image
                src={URL.createObjectURL(values.company_logo[0])}
                alt="dkf"
                width={100}
                height={150}
              />
            ) : (
              <div>
                <Image
                  src="/img/invoice/image-placeholder-svg-png-icon-free-download-148071-onlinewebfontscom.png"
                  alt="invoice-image-placeholder"
                  width={100}
                  height={150}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-5">
        <div className="flex justify-between gap-5">
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Invoice</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Invoice"
              name="invoice_type"
              value={invoiceFormik.values.invoice_type}
              onChange={invoiceFormik.handleChange}
              size="small"
            >
              <MenuItem value="General Invoice" defaultChecked>
                Invoice
              </MenuItem>
              <MenuItem value="Invoice Tax">Invoice Tax</MenuItem>
              <MenuItem value="Commercial Invoice">Commercial Invoice</MenuItem>
              <MenuItem value="Proforma Invoice">Proforma Invoice</MenuItem>
              <MenuItem value="Bill">Bill</MenuItem>
              <MenuItem value="Purchase Order">Purchase Order</MenuItem>
            </Select>
          </FormControl>
          <div>
            <CustomTextField
              type="text"
              label="Invoice"
              name="invoice_number"
              error={touched.invoice_number && Boolean(errors.invoice_number)}
              value={values.invoice_number}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Issue Date"
                name="issue_date"
                inputFormat="MM/DD/YYYY"
                value={values.issue_date}
                onChange={(value) => {
                  invoiceFormik.setFieldValue("issue_date", value);
                }}
                renderInput={(params) => <CustomTextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Due Date"
                inputFormat="MM/DD/YYYY"
                value={values.due_date}
                name="due_date"
                onChange={(value) => {
                  invoiceFormik.setFieldValue("due_date", value);
                }}
                renderInput={(params) => <CustomTextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;

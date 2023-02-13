import CustomTextField from "@/components/global-components/inputs/CustomTextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const InvoiceHeader = () => {
  const [imgUrl, setImgUrl] = useState();
  const [value, setValue] = useState(dayjs());
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
    setImgUrl(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex gap-5 ">
      <div className="w-1/2 ">
        <div className="inline-block p-4 transition-all duration-100 border-2 border-dashed rounded-md hover:border-solid hover:border-purple-400">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {imgUrl ? (
              <Image
                src={URL.createObjectURL(imgUrl[0])}
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
              size="small"
            >
              <MenuItem value={10}>Invoice</MenuItem>
              <MenuItem value={20}>Invoice Tax</MenuItem>
              <MenuItem value={30}>Commercial Invoice</MenuItem>
              <MenuItem value={30}>Proforma Invoice</MenuItem>
              <MenuItem value={30}>Bill</MenuItem>
              <MenuItem value={30}>Purchase Order</MenuItem>
            </Select>
          </FormControl>
          <div>
            <CustomTextField type="text" label="Invoice" />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Issue Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={(value) => {
                  setValue(value);
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
                value={value}
                onChange={(value) => {
                  setValue(value);
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

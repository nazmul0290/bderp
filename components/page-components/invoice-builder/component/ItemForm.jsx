import TextField from "@/components/global-components/inputs/CustomTextField";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "@/redux/resolvers/invoiceSlice";
import {
  invoiceItemsValidationSchema,
  itemTaxValidationSchema,
} from "@/utils/yupValidation";
import { useEffect } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import uuid from "react-uuid";
import { dateParsing } from "@/utils/tools";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const ItemForm = ({ item, tax, setTax }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const initialValues = {
    product_name: item.product_name,
    product_qty: item.product_qty,
    unit_price: item.unit_price,
    product_desctiption: item.product_desctiption,
    product_discount: item.product_discount,
    is_taxable: false,
    tax_name: "",
    tax_rate: 0,
    tax_amount: 0,
    service_date: "",
  };
  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema: invoiceItemsValidationSchema,
      onSubmit: (values) => {
        console.log(values);
        const variables = {
          id: item.id,
          isEditing: false,
          ...values,
          subtotal: values.product_qty * values.unit_price, //I will change it
        };

        console.log(variables);

        dispatch(updateItem(variables));
      },
    });

  const formik = useFormik({
    initialValues: {
      name: "",
      tax: 0,
    },
    validationSchema: itemTaxValidationSchema,
    onSubmit: (values) => {
      const newTax = [
        ...tax,
        {
          value: uuid(),
          is_taxable: true,
          display: `${values.name}-${values.tax}%`,
          tax_name: values.name,
          tax_rate: values.tax,
        },
      ];

      setTax(newTax);
      setFieldValue("is_taxable", true);
      setFieldValue("tax_name", values.name);
      setFieldValue("tax_rate", values.tax);
      setIsOpen(false);
    },
  });

  const deleteItem = () => {
    dispatch(removeItem(item.id));
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const taxOnChangeHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setFieldValue("is_taxable", value.is_taxable);
    if (value.is_taxable) {
      setFieldValue("tax_name", value.tax_name);
      setFieldValue("tax_rate", value.tax_rate);
    }
  };

  return (
    <>
      <Modal
        size="small"
        title="New tax rate"
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              label="Name"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className="mt-5">
            <TextField
              label="Tax"
              type="number"
              name="tax"
              value={formik.values.tax}
              onChange={formik.handleChange}
              error={formik.touched.tax && Boolean(formik.errors.tax)}
              helperText={formik.touched.tax && formik.errors.tax}
            />
          </div>
          <div className="mt-5 text-right">
            <Button>Set tax</Button>
          </div>
        </form>
      </Modal>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full md:flex-row">
          <div className="flex px-2 py-4 text-sm font-medium md:w-2/12">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Issue Date"
                inputFormat="MM/DD/YYYY"
                onChange={(value) => {
                  setFieldValue("service_date", dateParsing(new Date(value)));
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => {
                  return (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <div {...inputProps} ref={inputRef}>
                        {InputProps?.endAdornment}
                      </div>
                      {values.service_date && (
                        <div className="flex items-center justify-center ml-2 text-sm">
                          <p>{values.service_date}</p>{" "}
                          <button
                            type="button"
                            onClick={() => {
                              setFieldValue("service_date", "");
                            }}
                          >
                            <HighlightOffIcon color="error" />
                          </button>
                        </div>
                      )}
                    </Box>
                  );
                }}
              />
            </LocalizationProvider>
          </div>
          <div className="px-2 py-4 text-sm font-medium md:w-3/12">
            <TextField
              label="Name"
              name="product_name"
              autoFocus
              value={values.product_name}
              onChange={handleChange}
              error={touched.product_name && Boolean(errors.product_name)}
              /*      helperText={touched.product_name && errors.product_name} */
            />
          </div>
          <div className="px-2 py-4 text-sm font-medium md:w-1/12">
            <TextField
              name="product_qty"
              label="Qty"
              value={values.product_qty}
              onChange={handleChange}
              error={touched.product_qty && Boolean(errors.product_qty)}
              /*  helperText={touched.product_qty && errors.product_qty} */
            />
          </div>
          <div className="px-2 py-4 text-sm font-medium md:w-2/12">
            <TextField
              name="unit_price"
              label="Unit Price"
              value={values.unit_price}
              error={touched.unit_price && Boolean(errors.unit_price)}
              /*   helperText={touched.unit_price && errors.unit_price} */
              onChange={handleChange}
            />
          </div>
          <div className="px-2 py-4 text-sm font-medium md:w-2/12">
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="demo-simple-select-label">Tax</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tax"
                name="tax"
                size="small"
                onChange={taxOnChangeHandler}
              >
                {tax.map((item) => {
                  return (
                    <MenuItem
                      key={item.value}
                      defaultChecked={item.name === values.tax_name}
                      value={item}
                    >
                      {item.display}
                    </MenuItem>
                  );
                })}
                <MenuItem
                  value={{
                    value: 1,
                    is_taxable: false,
                  }}
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  + new tax rate
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex items-center w-2/12 px-2 py-4 text-sm font-medium">
            {values.product_qty * values.unit_price === 0
              ? ""
              : (values.product_qty * values.unit_price).toFixed(2)}{" "}
          </div>
        </div>
        <div className="flex justify-between w-full border-b">
          <div className="md:w-2/12"></div>
          <div className="px-2 py-4 text-sm font-medium md:w-8/12">
            <TextField
              label="Description"
              multiline
              rows={3}
              name="product_desctiption"
              value={values.product_desctiption}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end gap-2 px-2 py-4 text-sm font-medium md:w-2/12">
            <button type="submit">
              <CheckIcon />
            </button>
            <button onClick={deleteItem}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ItemForm;

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  invoice_name: "",
  invoice_id: "",
  issue_date: "",
  due_date: "",
  information: {
    sender_details: {
      company_name: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      tax_number: "",
      website: "",
      country_name: "",
    },
  },
  items: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
});

export default invoiceSlice;

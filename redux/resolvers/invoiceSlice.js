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
      country_id: "",
      phone_number: {},
      state: "",
      city: "",
      union: "",
      zipcode: "",
      address_line_1: "",
      address_line_2: "",
    },
    reciever_details: {
      company_name: "",
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      tax_number: "",
      website: "",
      country: {},
      phone_number: {},
      state: "",
      city: "",
      union: "",
      zipcode: "",
      address_line_1: "",
      address_line_2: "",
    },
  },
  items: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addRecieverDetailes: (state, action) => {
      state.information.reciever_details = {
        ...state.information.reciever_details,
        ...action.payload,
      };
    },
    addSenderDetails: (state, action) => {
      state.information.sender_details = {
        ...state.information.sender_details,
        ...action.payload,
      };
    },
    addInvoiceItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    makeEditable: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isEditing: true };
        }
        return item;
      });
    },
  },
});

export const {
  addRecieverDetailes,
  addSenderDetails,
  addInvoiceItem,
  updateItem,
  removeItem,
  makeEditable,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;

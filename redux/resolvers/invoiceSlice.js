const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  invoice_name: "",
  invoice_number: "",
  issue_date: "",
  due_date: "",
  description_edit: false,
  description: "",
  information: {
    sender_details: {
      display_name: "",
      attention: "",
      company_name: "",
      company_info_edit: false,
      company_info: "",
      first_name: "",
      last_name: "",
      mobile: "",
      mobile_country_code: "",
      email: "",
      country_id: "",
      country_name: "",
      state_name: "",
      district_name: "",
      thana_name: "",
      union_name: "",
      zipcode: "",
      street_address_line_1: "",
      street_address_line_2: "",
      house: "",
      website: "",
      tax_number: "",
    },
    reciever_details: {
      display_name: "",
      attention: "",
      company_name: "",
      client_info_edit: false,
      company_info: "",
      first_name: "",
      last_name: "",
      mobile: "",
      mobile_country_code: "",
      email: "",
      country_id: "",
      country_name: "",
      state_name: "",
      district_name: "",
      thana_name: "",
      union_name: "",
      zipcode: "",
      street_address_line_1: "",
      street_address_line_2: "",
      house: "",
      website: "",
      tax_number: "",
    },
  },
  items: [],
  customer_name: "",
  order_discount: 0,
  shipping_charge: 0,
  order_adjustment: 0,
  total_amount: 0,
  grand_total_amount: 0,
  adjustment_text: "",
  invoice_terms: "",
  total_tax: 0,
  invoice_type: "",
  invoice_currency: "",
  status: 1,
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
      state.total_amount = state.items
        .map((item) => {
          if (item.is_taxable) {
            return (
              item.product_qty * item.unit_price * (1 + item.tax_rate / 100)
            );
          }
          return item.product_qty * item.unit_price;
        })
        .reduce((total, subtotal) => total + subtotal, 0);
    },
    updateItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
            product_qty: Number(action.payload.product_qty),
            unit_price: Number(action.payload.unit_price),
          };
        }
        return item;
      });

      state.total_amount = state.items
        .map((item) => {
          console.log(item);
          if (item.is_taxable) {
            return (
              item.product_qty * item.unit_price * (1 + item.tax_rate / 100)
            );
          }
          return item.product_qty * item.unit_price;
        })
        .reduce((total, subtotal) => total + subtotal, 0);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total_amount = state.items
        .map((item) => {
          if (item.is_taxable) {
            return (
              item.product_qty * item.unit_price * (1 + item.tax_rate / 100)
            );
          }
          return item.product_qty * item.unit_price;
        })
        .reduce((total, subtotal) => total + subtotal, 0);
    },

    makeEditable: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isEditing: true };
        }
        return item;
      });
    },
    showCompanyInfoField: (state, action) => {
      state.information.sender_details = {
        ...state.information.sender_details,
        company_info_edit: !state.information.sender_details.company_info_edit,
      };
    },
    showClientInfoField: (state, action) => {
      state.information.reciever_details = {
        ...state.information.reciever_details,
        client_info_edit: !state.information.reciever_details.client_info_edit,
      };
    },
    showDescriptionField: (state, action) => {
      state.description_edit = !state.description_edit;
      console.log(state);
    },
    addInvoiceInformation: (state, action) => {
      console.log(action.payload);
      const {
        issue_date,
        due_date,
        invoice_number,
        invoice_terms,
        invoice_type,
      } = action.payload;
      state.issue_date = issue_date;
      state.due_date = due_date;
      state.invoice_number = invoice_number;
      state.invoice_type = invoice_type;
      state.invoice_terms = invoice_terms;
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
  addInvoiceInformation,
  showCompanyInfoField,
  showClientInfoField,
  showDescriptionField,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;

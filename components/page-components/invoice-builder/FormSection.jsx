import { addInvoiceInformation } from "@/redux/resolvers/invoiceSlice";
import isEmpty from "@/utils/is-empty";
import { invoiceCreateMutation } from "@/utils/resolvers/mutation";
import dayjs from "dayjs";
import { useFormik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import InvoiceController from "./component/InvoiceController";
import InvoiceForm from "./component/InvoiceForm";

const dateParsing = (date) => {
  return new Date(date).toLocaleDateString("en-CA");
};

const FormSection = () => {
  const invoice = useSelector((state) => state.invoice);
  console.log(invoice);
  const dispatch = useDispatch();

  const invoiceFormik = useFormik({
    initialValues: {
      invoice_type: "General Invoice",
      invoice_number: "",
      issue_date: dayjs(),
      due_date: dayjs(),
      invoice_terms: "",
      company_logo: "",
    },
  });

  const { mutate, isLoading } = useMutation(invoiceCreateMutation);

  const downloadPDFHandler = async () => {
    await dispatch(
      addInvoiceInformation({
        ...invoiceFormik.values,
        issue_date: dateParsing(invoiceFormik.values.issue_date),
        due_date: dateParsing(invoiceFormik.values.due_date),
      })
    );
    console.log(invoiceFormik.values);
    const variables = {};
    if (!isEmpty(invoice.issue_date))
      variables.invoice_date = invoice.issue_date;
    if (!isEmpty(invoice.due_date)) variables.due_date = invoice.due_date;
    if (!isEmpty(invoice.invoice_type))
      variables.invoice_type = invoice.invoice_type;

    variables.order_discount = invoice.order_discount;

    variables.shipping_charge = invoice.shipping_charge;

    variables.order_adjustment = invoice.order_adjustment;
    variables.total_amount = invoice.total_amount;
    variables.total_tax = invoice.total_tax;

    variables.grand_total_amount =
      invoice.total_amount +
      invoice.shipping_charge +
      invoice.total_tax -
      invoice.order_discount;
    if (!isEmpty(invoice.adjustment_text))
      variables.adjustment_text = invoice.adjustment_text;
    if (!isEmpty(invoice.invoice_terms))
      variables.invoice_terms = invoice.invoice_terms;
    if (!isEmpty(invoice.invoice_currency))
      variables.invoice_currency = invoice.invoice_currency;

    variables.status = invoice.status;
    if (!isEmpty(invoice.items))
      variables.invoiceItems = invoice.items.map((item) => {
        return { ...item, is_taxable: item.is_taxable ? 1 : 0 };
      });
    if (!isEmpty(invoice.information.sender_details.first_name))
      variables.sender = invoice.information.sender_details;
    if (!isEmpty(invoice.information.reciever_details.first_name))
      variables.receiver = invoice.information.reciever_details;

    if (!isEmpty(invoice.issue_date))
      variables.invoice_date = invoice.issue_date;

    variables.invoice_number = invoice.invoice_number;

    console.log(variables);

    mutate(
      { body: variables },
      {
        onSuccess: async (data) => {
          console.log(data);
        },
        onError: async (err) => {
          console.log(err);
        },
      }
    );
  };

  return (
    <section>
      <div></div>
      <div className="flex flex-col gap-5 mt-5 md:flex-row">
        <div className="max-w-sm mx-auto md:w-1/4">
          <InvoiceController downloadPDFHandler={downloadPDFHandler} />
        </div>
        <div className="p-3 border rounded-md shadow-xl md:w-3/4">
          <InvoiceForm invoiceFormik={invoiceFormik} />
        </div>
      </div>
    </section>
  );
};

export default FormSection;

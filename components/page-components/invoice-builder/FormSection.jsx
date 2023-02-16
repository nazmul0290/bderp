import { addInvoiceInformation } from "@/redux/resolvers/invoiceSlice";
import isEmpty from "@/utils/is-empty";
import { invoiceCreateMutation } from "@/utils/resolvers/mutation";
import { dateParsing, downloadFile } from "@/utils/tools";
import { invoiceDetailsValidation } from "@/utils/yupValidation";
import dayjs from "dayjs";
import { useFormik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import InvoiceController from "./component/InvoiceController";
import InvoiceForm from "./component/InvoiceForm";

const FormSection = () => {
  const invoice = useSelector((state) => state.invoice);

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
    validationSchema: invoiceDetailsValidation,
  });

  const { mutate, isLoading } = useMutation(invoiceCreateMutation);

  const downloadPDFHandler = async () => {
    if (!invoiceFormik.values.invoice_number) {
      invoiceFormik.setFieldTouched("invoice_number", true);
      invoiceFormik.setFieldError("invoice_number");
      console.log(invoiceFormik.errors);
      return;
    }

    console.log(invoiceFormik.values);
    const variables = {};

    if (!isEmpty(invoiceFormik.values.issue_date))
      variables.invoice_date = dateParsing(invoiceFormik.values.issue_date);
    if (!isEmpty(invoiceFormik.values.issue_date))
      variables.due_date = dateParsing(invoiceFormik.values.due_date);
    if (!isEmpty(invoiceFormik.values.invoice_type))
      variables.invoice_type = invoiceFormik.values.invoice_type;

    variables.order_discount = invoice.order_discount;

    variables.shipping_charge = invoice.shipping_charge;

    variables.order_adjustment = invoice.order_adjustment;
    variables.total_amount = invoice.total_amount;
    variables.total_tax = invoice.total_tax;

    variables.invoice_number = invoiceFormik.values.invoice_number;

    variables.grand_total_amount =
      invoice.total_amount +
      invoice.shipping_charge +
      invoice.total_tax -
      invoice.order_discount;
    if (!isEmpty(invoice.adjustment_text))
      variables.adjustment_text = invoice.adjustment_text;
    if (!isEmpty(invoiceFormik.values.invoice_terms))
      variables.invoice_terms = invoiceFormik.values.invoice_terms;
    if (!isEmpty(invoice.invoice_currency))
      variables.invoice_currency = invoice.invoice_currency;

    variables.status = invoice.status;
    if (!isEmpty(invoice.items))
      variables.invoiceItems = invoice.items.map((item) => {
        return { ...item, is_taxable: item.is_taxable ? 1 : 0 };
      });

    if (!isEmpty(invoice.information.sender_details.company_name)) {
      variables.sender = invoice.information.sender_details;
    } else {
      return toast.error("Sender information is mission.");
    }

    if (!isEmpty(invoice.information.reciever_details.company_name)) {
      variables.receiver = invoice.information.reciever_details;
    } else {
      return toast.error("Receiver Information is mission . ");
    }

    console.log(variables);

    // this is for download the generated pdf

    mutate(
      { body: variables },
      {
        onSuccess: async (data) => {
          downloadFile("/pdf/sample.pdf", "Sample pdf");
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

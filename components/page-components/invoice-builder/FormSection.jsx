import { useFormik } from "formik";
import React from "react";
import InvoiceController from "./component/InvoiceController";
import InvoiceForm from "./component/InvoiceForm";

const FormSection = () => {
  return (
    <section>
      <div></div>
      <div className="flex flex-col gap-5 mt-5 md:flex-row">
        <div className="max-w-sm mx-auto md:w-1/4">
          <InvoiceController />
        </div>
        <div className="p-3 border rounded-md shadow-xl md:w-3/4">
          <InvoiceForm />
        </div>
      </div>
    </section>
  );
};

export default FormSection;

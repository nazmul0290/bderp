import { useFormik } from "formik";
import React from "react";
import InvoiceController from "./component/InvoiceController";
import InvoiceForm from "./component/InvoiceForm";

const FormSection = () => {
  const { values, setFieldValue, handleChange } = useFormik({
    initialValues: {
      template: { id: 1, name: "Durward Reynolds" },
    },
  });

  return (
    <section>
      <div></div>
      <div className="flex gap-5 mt-5">
        <div className="w-3/4 p-3 border rounded-md shadow-xl">
          <InvoiceForm />
        </div>
        <div className="w-1/4">
          <InvoiceController />
        </div>
      </div>
    </section>
  );
};

export default FormSection;

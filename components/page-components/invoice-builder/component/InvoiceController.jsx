import Button from "@/components/ui/Button";
import React from "react";

const InvoiceController = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <Button secondary>Add company info</Button>
        <Button secondary>Add client info</Button>
        <Button secondary>Add description</Button>
        <Button secondary>Add payment</Button>
        <hr />
        <Button> Delete invoice </Button>
        <Button> Download PDF </Button>
        <Button> Save</Button>
      </div>
    </div>
  );
};

export default InvoiceController;

/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import SingupStageWizard from "../ui/SingupStageWizard";
import { Formik, useFormik } from "formik";

import { Button, Grid, TextField } from "@mui/material";
import CustomSelectOption from "./component/CustomSelectOption";

// This is test data. It will be removed....
const businessType = [
  {
    id: "01",
    category: "Trading",
    img: "/img/signup/trading.png",
  },
  {
    id: "02",
    category: "Services",
    img: "/img/signup/services.png",
  },
  {
    id: "03",
    category: "Retails",
    img: "/img/signup/retail.png",
  },
  {
    id: "04",
    category: "Manufacturing",
    img: "/img/signup/manufacturing.png",
  },
  {
    id: "05",
    category: "Others",
    img: "/img/signup/others.png",
  },
];

const BusinessTypeWizard = () => {
  const [selectedBusiness, setSelectedBusiness] = useState([]);
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <div>
          <SingupStageWizard activeStep={1} />
        </div>
        <div className="mt-2 text-center md:mt-5 text-primary">
          <h1 className="text-sm font-bold lg:text-xl md:text-lg">
            Welcome Shariful! Let's Get Started...
          </h1>
          <h1 className="font-bold xl:text-2xl lg:text-xl md:text-lg ">
            What do you do?
          </h1>
          <p className="font-medium">
            Which of the following best describer the type of business you in?
          </p>
        </div>
        <div className="mx-auto max-w-[500px] mt-4">
          <h1 className="text-sm font-bold lg:text-xl md:text-lg text-primary">
            Hey! Have you forgotten to put your company name ?
          </h1>
          <div className="max-w-[300px] mx-auto mt-2">
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                name="companyName"
                fullWidth
                required
                id="companyName"
                type="text"
                label="Company Name "
              />
            </Grid>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto gap-5 mt-10 max-w-[700px] flex-wrap">
          {businessType.map((business) => {
            return (
              <CustomSelectOption
                business={business}
                key={business.id}
                selectedBusiness={selectedBusiness}
                setSelectedBusiness={setSelectedBusiness}
              />
            );
          })}
        </div>
        <div className="flex justify-center mt-10 space-x-3">
          <Button className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] ">
            Proceed
          </Button>
          <Button className="px-6 py-2 text-white rounded-md bg-gradient-to-r from-[#4680ff] to-[#5b89ec] ">
            Skip
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypeWizard;

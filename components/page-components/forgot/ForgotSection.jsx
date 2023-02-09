/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/ui/Button";
import Headline from "@/components/ui/Headline";
import Paragraph from "@/components/ui/Paragraph";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomTextField from "../../global-components/inputs/CustomTextField";

const ForgotSection = () => {
  return (
    <section className="container py-10">
      <div className="flex items-center justify-between md:space-x-4">
        <div className="hidden md:w-1/2 md:block">
          <Image
            src="/img/forgot/forgot-page-vector.jpg"
            alt="Forgot Password."
            width={600}
            height={600}
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="max-w-[500px] mx-auto">
            <div>
              <Headline>Forget Password?</Headline>
              <Paragraph>
                Enter your email and we'll send you instructions to reset your
                password
              </Paragraph>
            </div>
            <form className="mt-5">
              <Grid item xs={12}>
                <CustomTextField
                  /* value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email} */
                  type="email"
                  name="email"
                  label="Email"
                />
              </Grid>

              <Grid item xs={12} className="mt-5">
                <Button fullWidth variant="contained">
                  {" "}
                  Send Resent Link{" "}
                </Button>
              </Grid>
            </form>
            <div className="mt-5 text-center">
              <Link href="/login">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotSection;

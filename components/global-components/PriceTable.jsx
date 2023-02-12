import React, { useEffect, useState } from "react";
import BigHeadline from "../ui/BigHealine";
import Headline from "../ui/Headline";
import Paragraph from "../ui/Paragraph";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useLocalStorage } from "@/lib/hooks/useHooks";
import isEmpty from "@/utils/is-empty";
import { getTableFeaturePlan } from "@/utils/resolvers/query";

const PriceTable = () => {
  const [packageItems] = useLocalStorage("bdERP_price", getTableFeaturePlan);

  return (
    <div>
      <div className="text-center">
        <Headline>
          Different Businesses have different needs. Find a plan that suits
          yours. <br />
          <span className="text-primaryBlue"> Pricing & Features</span>
        </Headline>
      </div>
      <div className="w-full mt-14">
        {/*TODO: Here Header part  will render from api data. */}
        <table className="w-full">
          <thead className="mb-5 border border-collapse">
            <tr className="py-5">
              <th className="border">
                <Headline className="px-10 py-5 text-left">Pricing</Headline>
              </th>
              <th scope="col" className="border ">
                <Paragraph className="px-2 text-lg font-semibold">
                  Free
                </Paragraph>
              </th>

              <th scope="col" className="relative border">
                <Paragraph className="px-2 text-lg font-semibold">
                  Standard
                </Paragraph>
                <div className="pricing_header_top_div">
                  <p className=" pricing_header_top">small business</p>
                </div>
              </th>
              <th scope="col" className="relative border">
                <Paragraph className="px-2 text-lg font-semibold">
                  Proffetional
                </Paragraph>
                <div className="pricing_header_top_div">
                  <p className=" pricing_header_top">medium business</p>
                </div>
              </th>
              <th scope="col" className="relative border bg-[#f8f9fc]">
                <Paragraph className="px-2 text-lg font-semibold">
                  Premium
                </Paragraph>
                <div className="pricing_header_top_div">
                  <p className=" pricing_header_top">established firms</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="space-y-6 text-center border text-primary">
            <tr className="border">
              <th scope="row" className="pl-10 text-left border">
                <h3 className="py-5">Monthly</h3>
              </th>
              <td className="border ">
                <span className="block text-sm">0</span>
              </td>
              <td className="border ">
                <span className="block text-sm">500BDT</span>
              </td>
              <td className="border">
                <span className="block text-sm">1500BDT</span>
              </td>
              <td className="border bg-[#f8f9fc]">
                <span className="block text-sm">3000BDT</span>
              </td>
            </tr>
            <tr className="border">
              <th scope="row" className="pl-10 text-left border">
                <h3 className="py-5 text-primaryBlue">Yearly (save 20%)</h3>
              </th>
              <td className="border ">
                <span className="block text-sm">0</span>
              </td>
              <td className="border ">
                <span className="block text-sm">4800BDT</span>
              </td>
              <td className="border">
                <span className="block text-sm">14,400BDT</span>
              </td>
              <td className="border bg-[#f8f9fc]">
                <span className="block text-sm">28,800BDT</span>
              </td>
            </tr>

            {packageItems.map((packItem) => {
              return (
                <tr className="border" key={packItem.id}>
                  <th scope="row" className="pl-10 text-left border">
                    <h3
                      className={`${
                        isEmpty(packItem.plans) ? "text-primaryBlue" : ""
                      } py-5 `}
                    >
                      {packItem.name}
                    </h3>
                  </th>
                  {packItem.plans.map((plan, idx) => {
                    return (
                      <td
                        className={`${
                          plan.plan_name === "Premium" ? "bg-[#f8f9fc]" : ""
                        } border `}
                        key={idx}
                      >
                        <span className="block text-sm">
                          {" "}
                          {plan.access === "Limit" ? (
                            plan.access_value
                          ) : plan.access === "Yes" ? (
                            <CheckIcon color="primary" />
                          ) : (
                            <CloseIcon color="error" />
                          )}{" "}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;

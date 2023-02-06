import React from "react";
import Headline from "../ui/Headline";
import Paragraph from "../ui/Paragraph";
import ProcessEfficiencyCard from "./component/ProcessEfficiencyCard";

const processEfficiency = [
  {
    id: "1",
    imgUrl: "/img/about-us/transfer.png",
    content: "Easy Data Transfer Between Internal and External Parties.",
  },
  {
    id: "2",
    imgUrl: "/img/about-us/real-time-data.png",
    content: "Sharing Real-Time Data Between Departments.",
  },
  {
    id: "3",
    imgUrl: "/img/about-us/transparent-way.png",
    content: "Trancking Business resources in a transparent way.",
  },
  {
    id: "4",
    imgUrl: "/img/about-us/report.png",
    content: "Get monthly or yearly sales report in one click.",
  },
  {
    id: "5",
    imgUrl: "/img/about-us/sales-team.png",
    content: "Manage Your sales team in one hand",
  },
];

const AuditSection = () => {
  return (
    <section className="container py-10">
      <div>
        <h1 className="text-xl">Control, Audit &</h1>
        <p className="text-xl text-primary">Audit & Manage Your Business</p>
        <Headline>Processes Efficiently</Headline>
        <Paragraph className="mt-4">
          We can customize ourt ERP solution according to your business
          requirement, So we can minimize your extra hassle. You can get a real
          time view of your business with the best BD ERP software. You can
          focus on your business functions and can gain more revenue or expand.
        </Paragraph>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {processEfficiency.map((process) => {
          return (
            <ProcessEfficiencyCard
              key={process.id}
              imgUrl={process.imgUrl}
              content={process.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AuditSection;

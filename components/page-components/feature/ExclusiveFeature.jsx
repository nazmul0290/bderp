/* eslint-disable react/no-unescaped-entities */
import Headline from "@/components/ui/Headline";
import { exclusiveFeature } from "@/lib/data";
import React from "react";

const ExclusiveFeature = () => {
  return (
    <section className="my-10">
      <div className="container">
        <div>
          <Headline>
            Let's See How Our Exclusive Features Can Help Your Business
          </Headline>
        </div>
        <div className="flex flex-col mt-5 space-y-5">
          {exclusiveFeature.map((feature) => {
            return (
              <div className="" key={feature.id}>
                <div>
                  <h1 className="text-[#115dde] text-lg md:text-xl font-semibold ">
                    {feature.title}
                  </h1>
                  {feature.content ? (
                    <p className="text-sm lg:text-lg ">{feature.content}</p>
                  ) : (
                    <div className="text-sm lg:text-lg">
                      <h1 className="font-semibold">{feature.listTitle}</h1>
                      <ul>
                        {feature.lists.map((item, index) => (
                          <li key={index}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeature;

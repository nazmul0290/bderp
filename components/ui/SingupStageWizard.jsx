import React from "react";

const SingupStageWizard = ({ activeStep = 0 }) => {
  return (
    <>
      <div className="max-w-lg p-5 mx-auto">
        <div className="flex items-center">
          <div className="relative flex items-center text-white">
            <div className="flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out border-2 border-[#3987fa] rounded-full bg-[#3987fa] text">
              1
            </div>
          </div>
          <div
            className={`flex-auto transition duration-500 ease-in-out border-t-2 ${
              activeStep < 1 ? "border-gray-300" : "border-[#3987fa]"
            }`}
          ></div>
          <div className="relative flex items-center ">
            <div
              className={`flex items-center justify-center w-12 h-12 py-3 transition duration-500 ease-in-out  border-2 border-[#3987fa] rounded-full ${
                activeStep === 1
                  ? "bg-[#3987fa] text-white"
                  : "text-primary bg-white"
              }`}
            >
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingupStageWizard;

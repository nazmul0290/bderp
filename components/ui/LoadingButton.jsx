import React from "react";
import Button from "./Button";

const LoadingButton = () => {
  return (
    <Button className="relative w-full h-8 my-0 ">
      <div className="absolute w-5 h-5 border-2 border-gray-200 border-solid rounded-full"></div>

      <div className="absolute w-5 h-5 border-2 border-green-500 border-solid rounded-full shadow-md animate-spin border-t-transparent"></div>
    </Button>
  );
};

export default LoadingButton;

import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  containsNumber,
  containsSpecialChars,
  containsUpperAndLowercase,
} from "@/lib/passwordTester";

const DisplayError = ({ password }) => {
  return (
    <div className="flex flex-col mt-5 space-y-1">
      {password.length < 8 ? (
        <div className="flex space-x-2 text-sm text-red-500">
          <CloseIcon fontSize="small" /> <p>Use 8 or More Characters</p>
        </div>
      ) : (
        <div className="flex space-x-2 text-sm text-green-500">
          <CheckIcon fontSize="small" /> <p>Use 8 or More Characters</p>
        </div>
      )}

      {containsUpperAndLowercase(password) ? (
        <div className="flex space-x-2 text-sm text-green-500">
          <CheckIcon fontSize="small" />{" "}
          <p> Use Upper and Lower-Case Letters (e.g. Aa)</p>
        </div>
      ) : (
        <div className="flex space-x-2 text-sm text-red-500">
          <CloseIcon fontSize="small" />{" "}
          <p> Use Upper and Lower-Case Letters (e.g. Aa)</p>
        </div>
      )}

      {containsNumber(password) ? (
        <div className="flex space-x-2 text-sm text-green-500">
          <CheckIcon fontSize="small" /> <p>Use a Number (e.g. 1234)</p>
        </div>
      ) : (
        <div className="flex space-x-2 text-sm text-red-500">
          <CloseIcon fontSize="small" /> <p>Use a Number (e.g. 1234)</p>
        </div>
      )}

      {containsSpecialChars(password) ? (
        <div className="flex space-x-2 text-sm text-green-500">
          <CheckIcon fontSize="small" /> <p>Use a Symbol (e.g. ! @ # $)</p>
        </div>
      ) : (
        <div className="flex space-x-2 text-sm text-red-500">
          <CloseIcon fontSize="small" /> <p>Use a Symbol (e.g. ! @ # $)</p>
        </div>
      )}
    </div>
  );
};

export default DisplayError;

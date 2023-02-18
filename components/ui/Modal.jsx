import { Dialog, Transition } from "@headlessui/react";

import React, { Fragment } from "react";
import Button from "./Button";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({ isOpen, closeModal, children, title, size }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment} onClick={(e) => e.stopPropagation()}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="z-50 min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`${
                  size === "small" ? "max-w-sm" : "max-w-xl"
                } relative inline-block w-full  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md shadow-xl`}
              >
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                )}
                <div className="absolute text-red-500 top-3 right-4">
                  <CloseIcon onClick={closeModal} className="cursor-pointer" />
                </div>
                <div className="mt-2">
                  <p className="pt-2 text-sm ">{children}</p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;

import React, { useState } from "react";
import Modal from "./Modal";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="text-xl">
        Connect with us on
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://www.youtube.com/@procodrr"
          target="_blank"
        >
          YouTube
        </a>
      </h1>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Popup
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={
          <p className="text-xl font-bold text-red-400">Hello Iam Popup </p>
        }
        footer={
          <div className="flex justify-end">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Ok
            </button>
          </div>
        }
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ipsa
        sequi cupiditate delectus soluta veritatis fugit accusamus unde nesciunt
        quibusdam.
      </Modal>
    </>
  );
}

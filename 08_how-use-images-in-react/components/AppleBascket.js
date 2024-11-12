import React from "react";

const AppleBascket = ({ applecount, baskeName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span> {applecount} </span> apples{" "}
      </h1>{" "}
      <p> {baskeName} </p>{" "}
    </div>
  );
};

export default AppleBascket;

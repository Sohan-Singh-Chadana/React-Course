import React from "react";
import Button from "./Button";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";
import AppleBascket from "./AppleBascket";
import "./AppleCounter.css";

const AppleCounter = () => {
  return (
    <section>
      <AppleBascket applecount={10} baskeName="Basket 1" />
      <Button imgUrl={LeftArrow} titleName="lLeftArrow" />{" "}
      <Button imgUrl={RightArrow} titleName="RightArrow" />{" "}
      <AppleBascket applecount={0} baskeName="Basket 2" />
    </section>
  );
};

export default AppleCounter;

import React from "react";
import AppleBascket from "./AppleBascket";
import Button from "./Button";
import LeftArrowImg from "../assets/images/left-arrow.png";
import RightArrowImg from "../assets/images/right-arrow.png";
import "./AppleCounter.css";

import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector("#root"));

const totalAppleCount = 10;
let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = () => {
  const leftClickHandeler = () => {
    if (rightAppleCount > 0) {
      rightAppleCount--;
      leftAppleCount++;
      root.render(<AppleCounter />);
    }
  };
  const rightClickHandeler = () => {
    if (leftAppleCount > 0) {
      leftAppleCount--;
      rightAppleCount++;
      root.render(<AppleCounter />);
    }
  };

  return (
    <>
      <section>
        <AppleBascket appleCount={leftAppleCount} basketName={"Basket 1"} />{" "}
        <Button
          imgUrl={LeftArrowImg}
          titleName={"LeftArrow"}
          clickHandler={leftClickHandeler}
        />{" "}
        <Button
          imgUrl={RightArrowImg}
          titleName={"RightArrow"}
          clickHandler={rightClickHandeler}
        />{" "}
        <AppleBascket appleCount={rightAppleCount} basketName={"Basket 2"} />{" "}
      </section>{" "}
      <p style={{ textAlign: "center", marginTop: "32px" }}>
        <button onClick={() => {}}> Re - Render </button>{" "}
      </p>{" "}
    </>
  );
};

export default AppleCounter;

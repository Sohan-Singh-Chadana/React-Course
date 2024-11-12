// declarative programming
import React, { useState } from "react";
import AppleBascket from "./AppleBascket";
import Button from "./Button";
import LeftArrowImg from "../assets/images/left-arrow.png";
import RightArrowImg from "../assets/images/right-arrow.png";
import "./AppleCounter.css";

const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );

  const leftClickHandeler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };
  const rightClickHandeler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
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
    </>
  );
};

export default AppleCounter;

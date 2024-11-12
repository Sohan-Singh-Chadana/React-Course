import React from "react";

const Button = ({ imgUrl, titleName }) => {
  return (
    <button title={titleName}>
      <img src={imgUrl} alt={titleName} />{" "}
    </button>
  );
};

export default Button;

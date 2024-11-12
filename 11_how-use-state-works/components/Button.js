const Button = ({ imgUrl, titleName, clickHandler }) => {
  return (
    <button title={titleName} onClick={clickHandler}>
      <img src={imgUrl} alt={titleName} />{" "}
    </button>
  );
};
export default Button;

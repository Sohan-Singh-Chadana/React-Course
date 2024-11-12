const Button = ({ imageUrl, clickHandler, children }) => {
  return (
    <button onClick={clickHandler} title={children} className="button">
      {" "}
      <img src={imageUrl} alt={children} />{" "}
    </button>
  );
};

export default Button;

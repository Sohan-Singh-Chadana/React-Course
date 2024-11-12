import React from "react";

const ContextMenu = ({ menuPosition, setMenuPosition, setExpenses, rowId }) => {
  if (!menuPosition.left) return;
  return (
    <>
      <div className="context-menu" style={{ ...menuPosition }}>
        <div
          onClick={() => {
            setMenuPosition({});
          }}
        >
          Edit
        </div>
        <div
          onClick={() => {
            setExpenses((prevState) =>
              prevState.filter((expense) => {
                return expense.id !== rowId;
              })
            );
            setMenuPosition({});
          }}
        >
          Delete
        </div>
      </div>
    </>
  );
};

export default ContextMenu;

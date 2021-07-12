import React from "react";

const CardLoneMoreButton = p => {
  return (
    <div className="float-right m-1" style={{ position: "absolute", right: 0 }}>
      <button
        type="button"
        className="btn btn-light m-0 text-left"
        style={{ border: "#444444", background: "#ffffff77" }}
      >
        <i className="fas fa-ellipsis-v" />
      </button>
    </div>
  );
};
export default CardLoneMoreButton;

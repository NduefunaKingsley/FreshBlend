import React from "react";

export default function Tab({ image, title, text, buttonText, onButtonClick , price }) {
  return (
    <div className="tab">
      <img
        src={image}
        alt={title}
        className="tab-image"
      />

      <div className="tab-text-area">
        <h2 className="tab-head">{title}</h2>
        <p className="tab-text">{text}</p>
        <div className="tab-btn-container">
          <button
          onClick={onButtonClick}
          className="tab-btn"
        >
          {buttonText}
         </button>
         <p className="tab-item-price">{price}</p>
        </div>
      </div>
    </div>
  );
}

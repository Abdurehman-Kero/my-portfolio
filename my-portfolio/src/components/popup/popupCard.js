import React, { useState } from "react";

const PopupCard = ({ message, date }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full px-10 bg-[#157210] text-white text-center flex items-center justify-between text-sm md:text-base relative popup">
      <span>{message}</span>
      <span>
        {date}
        <button
          className="ml-4 text-lg font-bold focus:outline-none hover:text-gray-300"
          onClick={handleClose}
        >
          &times;
        </button>
      </span>
    </div>
  );
};

export default PopupCard;

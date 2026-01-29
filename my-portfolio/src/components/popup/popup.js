// src/components/PopUp.js
import React, { useState, useEffect } from "react";
import PopupCard from "./popupCard.js";

const PopUp = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();

    // Format current date
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);

    // Dates to check
    const newYear = new Date(today.getFullYear(), 8, 11); // Semptember 11
    const christmas = new Date(today.getFullYear(), 11, 25); // December 25
    const myBirthday = new Date(today.getFullYear(), 6, 1); // July 1 (Fraol's birthday)

    // Check conditions
    if (
      today.getDate() === newYear.getDate() &&
      today.getMonth() === newYear.getMonth()
    ) {
      setAlertMessage("🌻🌻🌻 መልካም አዲስ አመት Happy new year for all Ethiopians!🌻🌻🌻");
    } else if (
      today.getDate() === christmas.getDate() &&
      today.getMonth() === christmas.getMonth()
    ) {
      setAlertMessage("🎄🎅 Merry Christmas! Enjoy the festive season! 🎅🎄");
    } else if (
      today.getDate() === myBirthday.getDate() &&
      today.getMonth() === myBirthday.getMonth()
    ) {
      setAlertMessage("🎂🎉🎈 Guess who’s leveling up today? Yep, it’s me! Happy Birthday to this awesome coder!");
    } else {
      setAlertMessage("🌟 May you have a day full of progress and positivity!");
    }
  }, []);

  return (
    <div>
      {/* Display the PopupCard */}
      {alertMessage && <PopupCard message={alertMessage} date={currentDate} />}
    </div>
  );
};

export default PopUp;

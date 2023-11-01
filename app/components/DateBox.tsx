"use client";
import { MyDate } from "../../types";
import React, { useEffect, useState } from "react";

/**
 * DateBox component displays the current time and updates it in real-time.
 */
const DateBox = () => {
  // Get the current time as a string
  const date = new Date().toLocaleTimeString();

  // Initialize the 'time' state with the current time
  const [time, setTime] = useState<MyDate>({ time: date });

  // Use useEffect to update the time state every second
  useEffect(() => {
    // Set up an interval to update the time every second
    const interval = setInterval(() => {
      // Update the 'time' state with the current time
      setTime({ time: new Date().toLocaleTimeString() });
    }, 1000); // Interval set to 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Render the time on the page
  return (
    <div className="absolute right-14 top-6 px-2 py-1">
      <h1 className="font-semibold text-xl ">{time.time}</h1>
    </div>
  );
};

export default DateBox;

"use client";
import { useHydration } from "@/hooks/useHydration";
import { MyDate } from "../../lib/types";
import React, { useEffect, useState } from "react";

/**
 * DateBox component displays the current time and updates it in real-time.
 */
const DateBox = () => {
  const hydrated = useHydration();

  // Initialize the 'time' state with the current time
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  // Use useEffect to update the time state every second
  useEffect(() => {
    // Set up an interval to update the time every second
    const interval = setInterval(() => {
      // Update the 'time' state with the current time
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Interval set to 1 second

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Render the time on the page
  return (
    <div className="px-2 py-1 w-min">
      {hydrated ? (
        <time className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-700">
          {time}
        </time>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default DateBox;

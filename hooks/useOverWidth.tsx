/**
 * React Hook to track whether the screen width exceeds a specified threshold.
 * @param {number} size - The threshold width to determine if the screen is over.
 * @returns {boolean} - A boolean value indicating whether the screen width exceeds the specified threshold.
 *
 * @example
 * const isScreenWidthOver = useOverWidth(700);
 *
 * if (isScreenWidthOver) {
 *   // Perform actions when the screen width is over 700 pixels.
 *   // ...
 * }
 */
"use client";
import { useEffect, useState } from "react";

export default function useOverWidth(size: number) {
  const [over, setOver] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Event handler to update the 'over' state based on the window width.
     */
    const handleResize = () => {
      setOver(window.innerWidth > size);
    };

    // Add an event listener for window resize events
    window.addEventListener("resize", handleResize);

    // Initialize the state based on the initial window width
    handleResize();

    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []); // The empty dependency array ensures the effect runs only on mount and unmount

  // Return the boolean state indicating whether the screen width exceeds the threshold
  return over;
}

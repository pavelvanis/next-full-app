/**
 * React Hook to determine whether a component has been fully hydrated on the client side.
 * @returns {boolean} - A boolean value indicating whether the component has been hydrated.
 *
 * @example
 * const isComponentHydrated = useHydration();
 *
 * if (isComponentHydrated) {
 *   // Perform actions once the component has been fully hydrated.
 *   // ...
 * }
 */
import { useEffect, useState } from "react";

export function useHydration() {
  const [hydrated, setHydrated] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Set the 'hydrated' state to true once the component has been fully hydrated.
     */
    setHydrated(true);
  }, []); // The empty dependency array ensures the effect runs only on mount

  // Return the boolean state indicating whether the component has been fully hydrated
  return hydrated;
}

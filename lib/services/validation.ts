/**
 * Validates a password based on specified conditions.
 *
 * @param {string} password - The password to be validated.
 * @returns {string[]} - An array of error messages indicating conditions that the password does not meet. Returns an empty array if the password is valid.
 */
export function passwordValidation(password: string): string[] {
  // Define validation conditions
  const validationConditions = {
    "digit": function (password: string) {
      return /\d/.test(password);
    },
    "uppercase letter": function (password: string) {
      return /[A-Z]/.test(password);
    },
    "lowercase letter": function (password: string) {
      return /[a-z]/.test(password);
    },
    "special character": function (password: string) {
      return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    },
    "eight characters": function (password: string) {
      return password.length >= 8;
    },
  };

  // Check each validation condition and collect error messages
  const failedConditions = Object.entries(validationConditions)
    .filter(([condition, validationFunction]) => !validationFunction(password))
    .map(([condition]) => `Password must contain ${condition}.`);

  // Return the array of error messages or an empty array if no errors
  return failedConditions.length > 0 ? failedConditions : [];
}

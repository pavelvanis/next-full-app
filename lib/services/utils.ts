import { NextResponse } from "next/server";

/**
 * Validates a password based on specified conditions.
 *
 * @param {string} password - The password to be validated.
 * @returns {string[]} - An array of error messages indicating conditions that the password does not meet. Returns an empty array if the password is valid.
 */
export function passwordValidation(password: string): string[] {
  // Define validation conditions
  const validationConditions = {
    digit: function (password: string) {
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
    "less than sixteen characters": function (password: string) {
      return password.length <= 16;
    },
  };

  // Check each validation condition and collect error messages
  const failedConditions = Object.entries(validationConditions)
    .filter(([condition, validationFunction]) => !validationFunction(password))
    .map(([condition]) => `Password must contain ${condition}.`);

  // Return the array of error messages or an empty array if no errors
  return failedConditions.length > 0 ? failedConditions : [];
}

/**
 * Checks if the given string is a valid email address.
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 */
export function validEmail(email: string) {
  const tester = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return tester.test(email);
}

/**
 * Validates the length and format of a given name.
 *
 * @param {string} name - The name to be validated.
 * @returns {string | null} - Returns an error message if validation fails, otherwise returns null.
 */
export function validName(name: string): string | null {
  const length = name.length;

  // Check if the name length is within the allowed range.
  if (length < 4 || length > 14) {
    return "Name length must be between 4-14";
  }

  // Define a regular expression pattern for allowed characters in the name.
  const namePattern = /^[a-zA-Z-]+$/;

  // Check if the name format is valid.
  return namePattern.test(name)
    ? null
    : "Name can contain only a-z, A-Z, -";
}

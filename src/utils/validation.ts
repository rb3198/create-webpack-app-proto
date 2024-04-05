import { ValidationResponse } from "../types/ValidationResponse";

/**
 * Validates CLI input by the user
 * @param args Arguments captured by commander
 * @returns {ValidationResponse} Validation Response with a boolean and a corresponding error message
 */
export const validateInput = (args: string[]): ValidationResponse => {
  if (!args || args.length === 0) {
    return {
      isValid: false,
      message: "Name of the program is required.",
    };
  }
  return {
    isValid: true,
    message: "",
  };
};

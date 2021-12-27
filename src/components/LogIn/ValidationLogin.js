const isValidLength = (value, minLength, maxLength) =>
  value.length < minLength || value.length > maxLength;

const createMaxMinLengthError = (fieldName, max, min) =>
  `Country ${fieldName} should be from ${max} to ${min} letters`;

const formValidationLogin = (value) => {
  const errors = {};

  if (isValidLength(value.emailInput, 2, 30)) {
    errors.email = createMaxMinLengthError("emailInput", 2, 30);
  }
  if (isValidLength(value.passwordInput, 2, 20)) {
    errors.password = createMaxMinLengthError("passwordInput", 2, 20);
  }

  return errors;
};

export default formValidationLogin;

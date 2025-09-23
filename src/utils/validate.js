export const validateSignIn = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email address is not valid";

  if (!isPasswordValid)
    return "Your password must contain atleast 8 characters - one digit(0-9) - one lowercase letter (a-z) and one uppercase letter (A-Z)";

  return null;
};

export const validateSignUp = (email, password, userName, phoneNumber) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isUsernameValid = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(userName);

  const isPhoneNumberValid = /^(?:\+91)?[6-9]\d{9}$/.test(phoneNumber);

  if (!isEmailValid) return "Email address is not valid";

  if (!isPasswordValid)
    return "Your password must contain atleast 8 characters - one digit(0-9) - one lowercase letter (a-z) and one uppercase letter (A-Z)";

  if (!isUsernameValid)
    return "Username must start with a letter, be 3-20 characters long, and can only contain letters, numbers, underscores, or hyphens.";

  if (!isPhoneNumberValid)
    return "Please enter Valid Phone number - 10 digits (optionally with +91)";

  return null;
};

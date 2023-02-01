const passwordValidation = (password: string) => {
  if (
    password.length >= 8 &&
    /\d/.test(password) &&
    /[!@#$%^&*]/.test(password)
  ) {
    return true;
  } else {
    return false;
  }
};

export default passwordValidation;

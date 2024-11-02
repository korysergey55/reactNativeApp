const validateEmail = (email: string) => {
  const emailRegexport = /\S+@\S+\.\S+/;
  return emailRegexport.test(email);
};

export default validateEmail;

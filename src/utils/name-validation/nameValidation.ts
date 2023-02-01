const nameValidation = (name: string) =>
  name.length >= 2 && name.length <= 50 && /^[a-zA-Z]+$/.test(name);

export default nameValidation;

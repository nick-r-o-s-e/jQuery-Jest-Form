import toggleErrorLabel from "./errorLabel";

const changeErrorStyle = (
  validation: boolean,
  input: JQuery<HTMLElement>
): boolean => {
  const id = input.attr("id");

  let errorLabel: string;

  switch (id) {
    case "inputName":
      errorLabel = "Only Letters(2-50 characters)";
      if (!validation) {
        toggleErrorLabel(".divName", "add", errorLabel);
      } else {
        toggleErrorLabel(".divName", "remove");
      }
      break;
    case "inputEmail":
      errorLabel = "Provide valid Email (example@example.com)";
      if (!validation) {
        toggleErrorLabel(".divEmail", "add", errorLabel);
      } else {
        toggleErrorLabel(".divEmail", "remove");
      }
      break;
    case "inputPassword":
      errorLabel =
        "At least 8 characters, 1 number and 1 special character (!,@,#,$,%,^,&,*)";
      if (!validation) {
        toggleErrorLabel(".divPassword", "add", errorLabel);
      } else {
        toggleErrorLabel(".divPassword", "remove");
      }
      break;

    default:
      break;
  }

  //// RETURN ERROR PRESENCE AS BOOLEAN ////
  if (validation) {
    input.removeClass("error-field");
    return true;
  } else {
    input.addClass("error-field");
    return false;
  }
};

export default changeErrorStyle;

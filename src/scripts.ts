import nameValidation from "./utils/name-validation/nameValidation";
import emailValidation from "./utils/email-validation/emailValidation";
import passwordValidation from "./utils/password-validation/passwordValidation";
import changeErrorStyle from "./error-input-styling-ts/errorStyle";

$(() => {
  const form = $("<form>").addClass("form");
  $(".container").append("<h1>Registration</h1>");
  $(".container").append(form);

  // !!! VALIDATION FUNCTIONS HAVE THE SAME INDEX AS CORRESPONDING INPUT FIELDS IN THE FORM !!! //
  const inputFieldNames = ["Name", "Email", "Password"];
  const validations = [nameValidation, emailValidation, passwordValidation];

  //// CREATING INPUT FIELDS ////
  inputFieldNames.forEach((name, i) => {
    const div = $("<div>").addClass(`form-floating mb-3 div${name}`);
    const inputID = `input${name}`;
    div.append(
      $("<input>")
        .attr({
          type: `${i == 0 || i == 1 ? "text" : name.toLowerCase()}`,
          id: inputID,
          name: name.toLowerCase(),
          placeholder: name,
          required: true,
        })
        .addClass("form-control")
    );
    div.append(
      $("<label>")
        .attr({ for: inputID, id: `label${name}` })

        .append(`${name}`)
    );

    form.append(div);
  });

  //// SUBMIT BTN ////
  form.append(
    $("<button>")
      .attr("type", "submit")
      .addClass("btn btn-danger submit-btn")
      .append("Submit")
  );

  //// INPUT LISTENERS ON "INPUT" FOR ERROR CHECK AND NO ERROR SHOWING IF INPUT IS EMPTY ////
  inputFieldNames.forEach((name, i) => {
    const input = $(`#input${name}`);
    input.on("input", (e) => {
      changeErrorStyle(
        input.val() ? validations[i](String(input.val())) : true,
        input
      );
    });
  });

  form.on("submit", (e) => {
    e.preventDefault();

    const inputs = $.map(
      $(e.target).find("input"),
      (input: HTMLInputElement) => [[input.value, input.id]]
    );

    //// CHECK ERROR ON EACH INPUT AND RETURN TRUE IF ALL IS VALID(false if not) ////
    const allValid = inputs.reduce((acc, currInput, i) => {
      const value = currInput[0];
      const id = `#${currInput[1]}`;
      const valid = changeErrorStyle(validations[i](value), $(id));
      return acc ? valid : false;
    }, true);

    if (allValid) {
      $("h1").html("Success!").addClass("success-heading");

      $(".form")
        .html("")
        .addClass("succes-form")
        .append($("<i>").addClass("fa-solid fa-check"));
    }
  });
});

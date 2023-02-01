import emailValidation from "./emailValidation";

describe("name validation tests", () => {
  it("sould return true only if email matches regex email validation", () => {
    expect(emailValidation("")).toBeFalsy;
    expect(emailValidation("qwerty")).toBeFalsy;
    expect(emailValidation("qwerty@")).toBeFalsy;
    expect(emailValidation("qwerty@qwe")).toBeFalsy;
    expect(emailValidation("qwerty@qwe.")).toBeFalsy;
    expect(emailValidation("qwerty@qwe.a")).toBeFalsy;

    expect(emailValidation("qwerty@qwe.com")).toBeTruthy;
    expect(emailValidation("qwerty@qwe.co")).toBeTruthy;
  });
});

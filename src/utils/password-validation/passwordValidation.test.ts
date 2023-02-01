import passwordValidation from "./passwordValidation";

describe("password validation tests", () => {
  it("should return false if password is shorter than 8 characters", () => {
    expect(passwordValidation("")).toBeFalsy();
    expect(passwordValidation(" ")).toBeFalsy();
    expect(passwordValidation("1234567")).toBeFalsy();
    expect(passwordValidation("a14567!")).toBeFalsy();
  });

  it("should return false if password doesn't have at least 1 digit", () => {
    expect(passwordValidation("#qweRtyui$")).toBeFalsy();
  });

  it("should return false if password doesn't have at least 1 special character", () => {
    expect(passwordValidation("1qweRtyui3")).toBeFalsy();
  });
});

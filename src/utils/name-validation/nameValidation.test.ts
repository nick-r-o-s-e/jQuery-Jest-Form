import nameValidation from "./nameValidation";

describe("name validation tests", () => {
  it("should return false when name has less than 2 characters and more than 50", () => {
    expect(nameValidation("")).toBeFalsy();
    expect(nameValidation("q")).toBeFalsy();
    expect(nameValidation("a".repeat(51))).toBeFalsy();
  });
  it("should return false when name contains something other than letters", () => {
    expect(nameValidation("1")).toBeFalsy();
    expect(nameValidation("-")).toBeFalsy();
    expect(nameValidation("?")).toBeFalsy();
    expect(nameValidation(" ")).toBeFalsy();
  });
});

import {blankValues} from "../form-validate"

describe('BlankValues', () => {
  test("Should return an error if fieldName was not provided", () => {

    expect(() => blankValues("", "test")).toThrowError("FieldName is not provided")
  })

  test("Should return true if value string is not blank", () => {
    const result = blankValues("name", "mocked value")

    expect(result).toBeTruthy()
  })

  test("Should return message error if value string is blank", () => {
    const result = blankValues("name", "")

    expect(result).toBe("name cannot be blank")
  })
});
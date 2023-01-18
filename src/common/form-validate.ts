export const blankValues = (fieldName: string, value: string): string | boolean => {
  if (!fieldName) {
    throw new Error("FieldName is not provided")
  }

  return value.trim() ? true : `${fieldName} cannot be blank`
}
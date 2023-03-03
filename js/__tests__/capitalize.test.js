import { capitalize } from '../capitalize.js'

test('Should be able to correctly capitalize lowercase string book to Book', () => {
  expect(capitalize("book")).toBe("Book")
})

test('Should be able to return same string if all letters are uppercase', () => {
  expect(capitalize("HELLO")).toBe("HELLO")
})

test('Should not throw error if first character is non alpha numberic', () => {
  expect(capitalize("!testing")).toBe("!testing")
})

test('Should return null if input is not a type of string', () => {
  expect(capitalize(false)).toBe(null)
})

test('Should return empty string if argument is zero length', () => {
  expect(capitalize("")).toBe("")
})
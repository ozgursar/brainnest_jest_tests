import { reverseString } from '../reverse-string'

test('Should be able to reverse strings. koob! to book!', () => {
  expect(reverseString("!koob")).toBe("book!")
})

test('Should be able to reverse numbers. 54321 to "12345"', () => {
  expect(reverseString(54321)).toBe("12345")
})

test('Should return null if argument is not a type of string or number', () => {
  expect(reverseString(undefined)).toBe(null)
})

test('Should return empty string if argument is zero length', () => {
  expect(reverseString("")).toBe("")
})
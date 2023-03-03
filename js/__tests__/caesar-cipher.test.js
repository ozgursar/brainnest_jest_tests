import { caesarCipher } from '../caesar-cipher'

describe("Valid operations", () => {

  test('Wraps from z to a', function() {
    expect(caesarCipher('Z', 1)).toEqual('A')
  })

  test('Supports large shift keys', function() {
    expect(caesarCipher('Testing Caesar123 with Jest!', 85)).toEqual('Alzapun Jhlzhy123 dpao Qlza!')
  })

  test('Supports negative shift keys', function() {
    expect(caesarCipher('Testing Caesar123 with Jest!', -45)).toEqual('Alzapun Jhlzhy123 dpao Qlza!')
  })

  test('Test with all lower case text input', function() {
    expect(caesarCipher('lowercase-text', 12)).toEqual('xaiqdomeq-fqjf')
  })

  test('Test with all upper case text input', function() {
    expect(caesarCipher('ALL UPPERCASE!', 9)).toEqual('JUU DYYNALJBN!')
  })

  test('Supports punctuation', function() {
    expect(caesarCipher('!.,"-', 1)).toEqual('!.,"-')
  })

  test('Supports decipher', function() {
    expect(caesarCipher('Alzapun Jhlzhy123 dpao Qlza!', 85, true)).toEqual('Testing Caesar123 with Jest!')
  })
})

describe("Invalid input case", () => {
  test('Returns null if input text is not a string', function() {
    expect(caesarCipher(12345, 10)).toEqual(null)
  })
})
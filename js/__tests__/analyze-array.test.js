import { analyzeArray } from '../analyze-array'
const testObject = analyzeArray([9,4,5,3,14])
const invalidInputObject = analyzeArray([9,"b","a",3,14])
const invalidObjectWithString = analyzeArray("test-string")
const invalidObjectWithEmptryArray = analyzeArray([])
const invalidObjectWithMissingElements = analyzeArray([9,4,,3,14])

describe("Valid calculations", () => {
 
  test('Calculates correct min', function() {
    expect(testObject.min).toEqual(3)
  })

  test('Calculates correct max', function() {
    expect(testObject.max).toEqual(14)
  })
  
  test('Calculates correct average', function() {
    expect(testObject.average).toEqual(7)
  })
  
  test('Calculates correct length', function() {
    expect(testObject.length).toEqual(5)
  })

})

describe("Invalid input cases", () => {
  test('Returns null with string input', function() {
    expect(invalidObjectWithString).toEqual(null)
  })
  
  test('Returns null with empty array', function() {
    expect(invalidObjectWithEmptryArray).toEqual(null)
  })
  
  test('Returns average as NaN with non-number array elements', function() {
    expect(invalidInputObject.average).toEqual(NaN)
  })

  test('Returns null if array has missing elements', function() {
    expect(invalidObjectWithMissingElements).toEqual(null)
  })
})

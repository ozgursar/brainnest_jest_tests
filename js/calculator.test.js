import { Calculator } from './calculator.js'

describe("valid additions", () => {
  test('1 + 2 = 3', () => {
    const calculator = new Calculator(1, 2)
    expect(calculator.add()).toBe(3)
  })

  test('5 + 9 = 14', () => {
    const calculator = new Calculator(5, 9)
    expect(calculator.add()).toBe(14)
  })
})

describe("invalid additions, null or missing inputs", () => {
  test('1 + a = NaN', () => {
    const calculator = new Calculator(1, "a")
    expect(calculator.add()).toBe(NaN)
  })

  test('null + null = 0', () => {
    const calculator = new Calculator(null, null)
    expect(calculator.add()).toBe(0)
  })

  test('5 + missing input = NaN', () => {
    const calculator = new Calculator(5,)
    expect(calculator.add()).toBe(NaN)
  })
})

describe("valid subtractions", () => {
  test('18 - 7 = 11', () => {
    const calculator = new Calculator(18, 7)
    expect(calculator.subtract()).toBe(11)
  })

  test('12 - -4 = 16', () => {
    const calculator = new Calculator(12, -4)
    expect(calculator.subtract()).toBe(16)
  })
})

describe("invalid subtractions", () => {
  test('-10 - a = NaN', () => {
    const calculator = new Calculator(-10, "a")
    expect(calculator.subtract()).toBe(NaN)
  })
})

describe("valid multiplications", () => {
  test('3 * 5 = 15', () => {
    const calculator = new Calculator(3, 5)
    expect(calculator.multiply()).toBe(15)
  })

  test('3.5 * 1000 = 3500', () => {
    const calculator = new Calculator(3.5, 1000)
    expect(calculator.multiply()).toBe(3500)
  })
})

describe("invalid multiplications", () => {
  test('a * 8 = NaN', () => {
    const calculator = new Calculator("a", "8")
    expect(calculator.multiply()).toBe(NaN)
  })
})

describe("valid divisions", () => {
  test('77 / 7 = 11', () => {
    const calculator = new Calculator(77, 7)
    expect(calculator.divide()).toBe(11)
  })
})

describe("invalid divisions", () => {
  test('150 / a = NaN', () => {
    const calculator = new Calculator(150, "a")
    expect(calculator.divide()).toBe(NaN)
  })
})

describe("division by zero case", () => {
  test('40 / 0 throws error', () => {
    const calculator = new Calculator(40, 0)
    expect(() => {
      calculator.divide()
    }).toThrow(new Error("Division by 0!"))
  })
})

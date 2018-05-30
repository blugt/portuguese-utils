import isValidHoliday from 'validators/isValidHoliday'

describe('Holiday validator', () => {
  test('Returns false for incorrect type parameters or incorrect format dates', () => {
    expect(isValidHoliday(undefined)).toBe(false)
    expect(isValidHoliday('')).toBe(false)
    expect(isValidHoliday(new Date(''))).toBe(false)
  })

  test('Returns false for dates that are not holidays', () => {
    expect(isValidHoliday(new Date(2020, 1, 21))).toBe(false)
    expect(isValidHoliday(new Date(2111, 3, 18))).toBe(false)
    expect(isValidHoliday(new Date(2211, 3, 18))).toBe(false)
    expect(isValidHoliday(new Date(2211, 3, 18))).toBe(false)
  })

  test("Returns true on holidays' dates", () => {
    expect(isValidHoliday(new Date(2018, 3, 1))).toBe(true)
    expect(isValidHoliday(new Date(2018, 2, 30))).toBe(true)
    expect(isValidHoliday(new Date(2018, 4, 31))).toBe(true)
    expect(isValidHoliday(new Date(2019, 3, 19))).toBe(true)
    expect(isValidHoliday(new Date(2019, 3, 21))).toBe(true)
    expect(isValidHoliday(new Date(2019, 11, 25))).toBe(true)
    expect(isValidHoliday(new Date(1755, 2, 30))).toBe(true)
    expect(isValidHoliday(new Date(1805, 3, 21))).toBe(true)
    expect(isValidHoliday(new Date(2049, 3, 18))).toBe(true)
    expect(isValidHoliday(new Date(2076, 3, 19))).toBe(true)
    expect(isValidHoliday(new Date(1699, 3, 19))).toBe(true)
  })

  test("Returns the name of the holiday on holidays' dates if feedback parameter is true", () => {
    expect(isValidHoliday(new Date(2018, 3, 25), true)).toBe('Dia da Liberdade')
    expect(isValidHoliday(new Date(2019, 0, 1), true)).toBe('Dia de Ano Novo')
  })
})

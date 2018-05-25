import isValidDomain from 'validators/isValidDomain'

describe('Domain validator', () => {
  test('Returns false for incorrect type url parameter', () => {
    expect(isValidDomain({})).toBe(false)
    expect(isValidDomain(123354)).toBe(false)
  })

  test('Returns true for successful domain match in url parameter', () => {
    expect(isValidDomain('google.pt')).toBe(true)
    expect(isValidDomain('www.google.com.pt')).toBe(true)
    expect(isValidDomain('http://www.google.com.pt')).toBe(true)
    expect(isValidDomain('http://www.google.com.pt/this/is/a/path')).toBe(true)
    expect(
      isValidDomain('http://www.google.com.pt/this/is/a/path/?with=para.meter')
    ).toBe(true)
  })

  test('Returns false for insuccessful domain match in url parameter', () => {
    expect(isValidDomain('www.google.com')).toBe(false)
    expect(isValidDomain('http://www.google.com')).toBe(false)
    expect(isValidDomain('http://www.google.com/this/is/a/path')).toBe(false)
    expect(
      isValidDomain('http://www.google.pt.com/this/is/a/path/?with=para.meter')
    ).toBe(false)
  })
})

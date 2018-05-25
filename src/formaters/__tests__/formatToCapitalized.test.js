import formatToCapitalized from 'formaters/formatToCapitalized'

describe('Capitalize word Formatter', () => {
  test('throws a type error for invalid types', () => {
    expect(() => formatToCapitalized({})).toThrowError(TypeError)
    expect(() => formatToCapitalized(1)).toThrowError(TypeError)
    expect(() => formatToCapitalized('abc')).not.toThrowError(TypeError)
  })

  test('should return the formatted parameter text', () => {
    expect(formatToCapitalized('ASDFG')).toBe('Asdfg')
    expect(formatToCapitalized('ASDFG ASDFG')).toBe('Asdfg Asdfg')
    expect(formatToCapitalized('asdfg asdfg')).toBe('asdfg asdfg')
    expect(formatToCapitalized('aSdFg AsdfG')).toBe('aSdFg AsdfG')
  })
})

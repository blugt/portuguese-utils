function checkIfLowerCase(character) {
  return (
    character == character.toLowerCase() && character != character.toUpperCase()
  )
}

function isWordUpperCase(word) {
  for (let i = 0, len = word.length; i < len; i++) {
    if (checkIfLowerCase(word.charAt(i))) {
      return false
    }
  }

  return true
}

/**
 * Formats the given text string to capitalize each word only if the given
 * word has it's characters all in uppercase else it leaves the word untouched.
 * Ex. 'ASDFG asdFg' is formatted to 'Asdfg asdFg'.
 * @param {string} text - the string to be formatted
 * @throws {TypeError} if text parameter is not of type string
 * @returns {string}
 */
export default function formatToCapitalized(text) {
  if (typeof text != 'string')
    throw TypeError('Argument text is not of type string')

  const breakText = text.split(' ')
  const formatted = []
  for (let i = 0, len = breakText.length; i < len; i++) {
    const formattedWord = isWordUpperCase(breakText[i])
      ? `${breakText[i].charAt(0).toUpperCase()}${breakText[i]
          .substr(1)
          .toLowerCase()}`
      : breakText[i]

    formatted.push(formattedWord)
  }

  return formatted.join(' ')
}

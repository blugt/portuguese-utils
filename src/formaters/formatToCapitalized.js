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

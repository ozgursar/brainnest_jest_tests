const capitalize = (stringToCap) => {
  if (typeof stringToCap !== 'string') {
    return null
  }
  const firstLetter = stringToCap.charAt(0).toUpperCase()
  const remainingLetters = stringToCap.slice(1)
  return firstLetter + remainingLetters  
}

export { capitalize }
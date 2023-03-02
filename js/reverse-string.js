const reverseString = (stringToReverse) => {
  if (typeof stringToReverse !== 'string' && typeof stringToReverse !== 'number') {
    return null
  }
  
  if (typeof stringToReverse === 'number') {
    stringToReverse = stringToReverse.toString()
  }
  const letters = stringToReverse.split('')
  return letters.reverse().join('')
}

export { reverseString }
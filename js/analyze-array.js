const analyzeArray = (items) => {
  // Account for invalid input
  if (!Array.isArray(items) || !items.length || items.includes(undefined)) {
    return null
  }

  const average = items.reduce((sum, item) => sum + item) / items.length
  const min = Math.min(...items) // destructuring assignment
  const max = Math.max(...items)
  const length = items.length

  return {
    average,
    min,
    max,
    length
  }
}

export { analyzeArray }
const caesarCipher = (inputText, key, decipher) => {
  if (typeof inputText !== "string") {
    return null
  }
  const re = /[a-zA-Z]/
  const shiftAmount = !decipher ? 26 + key%26 : 26 - key%26  
  let outputText = ""

  const moveCharCodeByKey = (charCode, caseMinCode) => {
    return String.fromCharCode((charCode - caseMinCode + shiftAmount)%26 + caseMinCode)
  }  

  for(let i=0; i<inputText.length; i++){ 
    let currentChar = inputText.charAt(i)
    let currentCharCode = inputText.charCodeAt(i)
    // Uppercase letters
    if(re.test(currentChar) && (currentCharCode >= 65 && currentCharCode <= 90)) {
      outputText += moveCharCodeByKey(currentCharCode, 65)
    }
    // Lowercase letters
    else if (re.test(currentChar) && (currentCharCode >= 97 && currentCharCode <= 122)) {
      outputText += moveCharCodeByKey(currentCharCode, 97)
    }
    // Not a letter 
    else {
      outputText += inputText.charAt(i)
    }
  }
  return outputText
}

export { caesarCipher }
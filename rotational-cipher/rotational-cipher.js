//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getShiftedCharacter = (charCode, rotKey, extreme) => (String.fromCharCode(((-extreme + charCode + rotKey) % 26) + extreme))

const isLowerCase = (char) => {
  return char >= 65 && char <= 90
}

const isUpperCase = (char) => {
  return char >= 97 && char <= 122
}

export const rotate = (message, rotValue) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  const splitMessage = message.split("")

  const newMessage = splitMessage.map((messageLetter) => {
    const letterCode = messageLetter.charCodeAt(0)
    if(isLowerCase(letterCode)) {
      const shiftedChar = getShiftedCharacter(letterCode, rotValue, 65)
      return shiftedChar;
    } else if (isUpperCase(letterCode)) {
      const shiftedChar = getShiftedCharacter(letterCode, rotValue, 97)
      return shiftedChar;
    } else {
      return messageLetter;
    }
  })

  return newMessage.join("");
};

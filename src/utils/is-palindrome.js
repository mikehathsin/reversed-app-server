import { reverseString } from './reverse-string'

export const isPalindrome = (text) => {
  const anyNonwordCharacter = /\W/g
  const normalizedText = text.toLowerCase().replace(anyNonwordCharacter, '')
  const reversedText = reverseString(normalizedText)
  return normalizedText === reversedText
}

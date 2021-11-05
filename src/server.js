import cors from 'cors'
import express from 'express'

import { isPalindrome } from './utils/is-palindrome'
import { reverseString } from './utils/reverse-string'

export const app = express()

app.use(cors())

app.get('/iecho', (req, res) => {
  const { text } = req.query

  if (!text) {
    return res.status(400).json({
      error: 'no text'
    })
  }

  res.status(200).json({
    text: reverseString(text),
    palindrome: isPalindrome(text)
  })
})

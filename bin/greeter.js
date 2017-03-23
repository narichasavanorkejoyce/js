'use strict'
// We'll learn about require later in the course
// This file path is relative to the folder structure within js
const ask = require('../lib/ask.js')

const name = ask("What's your name? ")
if (name === 'Brian') {
  console.log('Hi, Brian!')
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!')
} else if (name === 'Chris') {
  console.log('Hi, Chris!')
} else {
  console.log('Hi, stranger.')
}

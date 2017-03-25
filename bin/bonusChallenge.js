'use strict'
// We'll learn about require later in the course
// Guess my birthday!
const ask = require('../lib/ask.js')
let count = 0
let birthday = ''

while (birthday !== '07-10-1993') {
  birthday = ask('When is my birthday? format: mm-dd-yyy: ')
  count = count + 1
}
console.log('You got it in ' + count + ' tries!')

const points = require('./points')

class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.word = word
  }

  wordToArray() {
    return this.word.toLowerCase().split('')
  }

  score() {
    if (!this.word) return 0

    let score = 0
    const wordArray = this.wordToArray()

    wordArray.forEach((letter) => {
      score += points[letter] || 0
    })

    return score
  }
}

const test = new Scrabble('hello')
const test2 = new Scrabble('OXYPHENBUTAZONE')
console.log(test2.score())

module.exports = Scrabble

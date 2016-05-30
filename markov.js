var Counter = require('./counter')

function split (s) {
  return s.split(' ')
    .filter(function (str) {
      return str !== ''
    })
}

// 1. a function that returns a count for each word in the string
// 2. string 
// 3. none
// 4. none
// 5. An object that contains the word count.
function count (str) {
  var counter = new Counter()
  split(str).map(function (word) {
    counter.count(word)
  })
  return counter.getResults()
}

module.exports = {
  split: split,
  count: count,
}

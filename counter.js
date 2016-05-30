// var counterPrototype = {
//   count: function (word) {
//     this.result[word] = this.result[word] ? this.result[word] + 1 : 1
//     return this.result[word]
//   },
//   getResults: function () {
//     return this.result
//   }
// }

// function createCounter () {
//   var counter = {
//     result: {},
//   }
//   counter.__proto__ = counterPrototype
//   return counter
// }

function Counter () {
  this.result = {}
}

Counter.prototype.count = function (word) {
  this.result[word] = this.result[word] ? this.result[word] + 1 : 1
  return this.result[word]
}

Counter.prototype.getResults = function () {
  return this.result
}

module.exports = Counter

//tests for markov tweets
/*global
describe, it
*/

const chai = require('chai');
var expect = chai.expect;
var markov = require('../markov');

describe('Markov tweets', function() {
	describe('string split into array', function(){
		it('produces an empty array from empty string', function(){
			expect(markov.split('')).to.eql([])
		})
		it('"I have a dog." should produce the array ["I", "have", "a", "dog."] ',function(){
			expect(markov.split('I have a dog.')).to.eql(["I", "have", "a", "dog."])
		})
		it('"I have a dog.  " should produce the array ["I", "have", "a", "dog."] ',function(){
			expect(markov.split('I have a dog.  ')).to.eql(["I", "have", "a", "dog."])
		})
	})
	describe('function that returns a count for each word in the string', function() {
		it('produces an empty object from an empty string', function(){
			expect(markov.count("")).to.eql({})
		})
		it('return an object count using a one word string', function(){
			expect(markov.count("dog")).to.eql({dog:1})
		})
		it('return an object count using a two word string', function(){
			expect(markov.count("dog smelled")).to.eql({dog:1, smelled:1})
		})
		it('"The dog smelled the other dog" it returns {The: 1, dog: 2, smelled: 1, the: 1, other: 1}', function(){
			expect(markov.count("The dog smelled the other dog")).to.eql({The: 1, dog: 2, smelled: 1, the: 1, other: 1})
		})
	})	
})

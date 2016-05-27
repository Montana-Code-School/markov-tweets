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
})

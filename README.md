# markov-tweets

In this exercise we will create a program that can read a twitter users history and similuate tweets from them using their customary vocabulary and style.

1. Create a function that, given a string. Splits it up into words by spaces. For instance "I have a dog." should produce the array ["I", "have", "a", "dog"]

2. Using the above function. Write a function that returns a count of the number of times a word appears in the input string. So with an input of "The dog smelled the other dog" it returns {The: 1, dog: 2, smelled: 1, the: 1, other: 1}

3. Write a function that counts the number of times a word occurs after 'dog.' Use the special string <eom> if 'dog is the last word in the string.  So the input from exercise 2 should return {smelled : 1, <eom> : 1} 

Let's invent a new kind of object that records the frequency with which words follow other words. We'll also have a special string '<bom>' to denote the beginning of a message So if we were recording the frequencies from the above input we might have an object like
```
{
	_bom_: {The : 1}
	dog : {smelled : 1, _eom_ : 1} 
	The : {dog: 1}
	... etc
}
```
We'll call this a 'followed frequency object'

4. Write a function that given a string, returns a followed frequency object for that string.

Now we will use our followed frequency object to generate some strings.

5. Make a function that takes an input integer and returns a random number between 1 and n

6. Use the function from 5 to select a next word given a word in the object. For example, with the above example. If I give the function the input 'dog.' 50% of the time the response should be smelled and 50% of the time the response should be _eom_

7. Write a function that takes a 'followed frequency object' and uses the function from 6 to generate words starting with _bom_ and appending them to a string. It ends when _eom_ is reached.

So it might run _bom_ -> The -> dog -> _eom_

and return 'The dog'

8. Modify the function from #4 so that it now takes an additional integer parameter that specifies how many words serve as the key for the followed frequency object. So if the number was 2. We might have:
```
{
	"The Dog": {
	   has: 3,
	   is:  1,
	   smelled: 1
	},
	"Dog has": {
		a: 2
		been: 1
	}
	.....
}
```

Bonus 1: Create a function that generates messages repeatedly until one is generated that is less than 140 characters.

Bonus 2: Hook this up to the twitter api and create a function to create a twitter bot based on an actual twitter account.

Bonus 2: Create a website that allows a user to press a button to see a simulated tweet

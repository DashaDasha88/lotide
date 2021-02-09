# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dashadasha88/lotide`

**Require it:**

`const _ = require('@dashadasha88/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: checks if arrays are equal and prints an assertion message
* `assertEqual(actual, expected)`: checks if the expected output matches the actual output and prints and assertion message
* `assertObjectsEqual(actual, expected)`: checks if the objects from eqObject are equal and prints an assertion message
* `countLetters(actual, expected)`: counts the number of times each letter appears in a string
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns counts for a specific subset of those items
* `eqArrays(array1, array2)`: checks if two arrays are equal
* `eqObjects(object1, object2)`: checks if two objects are equal
* `findKey(object, callback)`: finds the name of a key in an object based on its position
* `findKeyByValue(object, value)`: finds the key in an object by its value
* `head(array)`: returns the first element of an array
* `letterPositions(sentence)`: finds the index of a letter in a sentence
* `map(array, callback)`: creates a new array populated with the results of calling a provided function on every element in the calling aray
* `middle(array, callback)`: returns the middle of an array
* `tail(array)`: returns the elements of an array except for the first one
* `takeUntil(array, callback)`: returns the values in an array up until a specified callback 
* `without(sourceArray, removedArray)`: returns an array with specified items removed
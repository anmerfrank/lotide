# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Anne Franklin as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anmerfrank/lotide`

**Require it:**

`const _ = require('@anmerfrank/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Asserts whether two arrays are equal.
* `function2(assertEqual)`: Asserts whether the actual and expected outputs are equal. 
* `function3(assertObjectsEqual)`: Asserts whether two objects are equal.
`function4(countLetters)`: Counts the instances of each letter in a given string.
* `function5(countOnly)`: Counts the instances of each name in a given array.
* `function6(eqArrays)`: Returns whether array values are equal.
* `function7(findKey)`: Finds a key within an object.
* `function8(findKeyByValue)`: Finds an object key given its value.
* `function9(flatten)`: When given nested arrays, returns a single one-dimensional array.
* `function10(head)`: Returns the first item of an array.
* `function11(letterPositions)`: Returns the index(es) of each letter in a given string.
* `function12(maps)`: Uses the map method on a given array.
* `function3(middle)`: Finds the middle index of an array. If the array has an even number of items, finds the middle two indexes. 
* `function14(tail)`: Returns everything in an array except the first item. 
* `function15(takeUntil)`: Returns a slice of the given array with elements taken from the beginning.
* `function16(without)`: When given one or more items to remove, removes them from the initial array.


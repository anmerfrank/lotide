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

* `function1(head)`: Returns the first item of an array.
* `function2(tail)`: Returns everything in an array except the first item. 
* `function3(middle)`: Finds the middle index of an array. If the array has an even number of items, finds the middle two indexes. 
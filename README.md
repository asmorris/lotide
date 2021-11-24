# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @andymo/lotide`

**Require it:**

`const _ = require('@andymo/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

- `countOnly(allItems, itemsToCount)`: Returns the count of how many times an item is in the given array, dependent on the key supplied - but only if the key's value is set to true. Takes an array as `allItems` argument, and object as `itemsToCount`. Returns object
- `eqArrays(arr1, arr2)`: Checks to see if two arrays are equal, takes two arrays as arguments. Returns boolean
- `equalObjects(obj1, obj2)`: Checks to see if two objects are equal, takes two objects as arguments. Returns boolean
- `findKey(obj, cb)`: Finds key from object where the value is equal to a callback function
- `findKeyByValue(obj, str)`: Finds key from object where the value is equal to the given string. Returns array
- `head(arr)`: Returns first value from given array
- `map(arr, cb)`: Returns values from an iterable that have been changed according to the callback
- `middle(arr)`: Returns middle values from array of any length (as array), array must have at least 3 items in it.
- `takeUntil(arr, cb)`: Returns array of values up until the callback condition has been met
- `without(arr1, arr2)`: Returns new array based on arr1 with the values from arr2 removed from it



# Introduction

## Title slide

## Who am I

## Present the problem

 * asynchronous code
 * difficult to write
 * difficult to read
 * difficult to maintain

## Three patterns

 * Callbacks
 * Promises
 * Generators

## Goal

 * Not to 'pick a winner'
 * Not to 'suggest use'
 * Unbiased & informative




# Callbacks

## How callbacks work
 * Simple and Easy to understand
 * Pass a function that is called later
 * Node convention is error first (err [, results...])

## Simple visualization

## Where they're used
 * Node.js core
 * User-land libraries and modules
 * XHR
 * PROMISES!


## Problems with callbacks

 * You must always know ahead of time what you're going to do with the result
 * Success and Failure handled together
 * Code *feels* asynchronous
 * Releasing Zalgo
 * Callback hell - visualization

### Progression to callback-hell

### Releasing Zalgo
 * Callbacks should always be synchronous or asynchronous, never both
 * Not just a Javascript callback problem.


## Mitigating the problems

### Zalgo
 * Yours: Force sync or async via api change or use of process.nextTick / setImmediate
 * Theirs: Dezalgo module https://www.npmjs.org/package/dezalgo

### Callback-hell
 * Don't use anon functions, break them out of the tree
 * Use flow control libs like github.com/caolan/async
 * Use streams instead (whole other talk)
   * http://nodestreams.com/
   * github.com/caolan/highland




# Promises


## How promises work

 * Eventual result
   * Ask for work, given a promise
   * When resolved, success callback is run
   * When rejected, error callback is run
   * Success and error callbacks can be provided at any time
     * even after the promise has been resolved or rejected
 * Chaining


## Simple visualization


## Where they're used

 * User-land libraries and modules
 * jQuery
 * AngularJS
 * Ember


## Problems with promises

 * Can be confusing
 * No adopted single standard (yet)
   * Many incompatible implementations
 * Errors can be swallowed if you're not careful

### Swallowed Errors
 * Errors inside a `.then()` block


## Compared to Callbacks

 * Better code organization
 * Complex situations are easier to understand
 * Slower than callbacks




# Generators

## How generators work

 * Like functions but declared with an asterisk (function*)
 * The `yield` keyword acts like return by handing back a value, but pauses execution of the generator
 * Executing a generator returns an `Iterator` instance with a `.next()` method
 * Calling `.next()` will run the generator to the first `yield` statement, returning an object
   containing the yielded value as `value` and a `done` boolean.
 * `done` is true if the generator is done providing values and false if it is not.
 * Calling `.next()` again will run the generator to the next `yield` statement.
 * Providing a value to `.next()` like `.next(5)` will pass that value into the generator.


## Simple visualization


## Where they're used

 * koa + co


## Problems with generators

 * Not fully supported
   * Firefox latest
   * Chrome with --harmony flag
   * Node.js v0.11 (unstable) with --harmony flag
   * No IE
 * Designed for Iterators
 * Replacing callbacks or promises requires boilerplate

### Support
 * http://facebook.github.io/regenerator/
 * https://github.com/google/traceur-compiler



# Conclusion


# Thanks! / Questions

# References


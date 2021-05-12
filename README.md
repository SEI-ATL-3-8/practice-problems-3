# Practice Problems

## Intersection of two arrays
This is a classic problem that tests your ability to itentify the time complexity of algorithms, and decide which implementation is better based on your assessment.

Given two arrays of integers, return an array that contains just the elements that are present in both input arrays. The input arrays are not guaranteed to be sorted, but any given element will only appear once in a given input array.

Sample 1: intersection([0, 1, 4, 5, 8], [0, 2, 7, 9, 4]) -> [0, 4]

Once you have a solution, figure out its time complexity. Is it a category we're ok with?

A closely related (and also very common in interviews) problem is twosum. Check it out: https://dev.to/eidorianavi/the-two-sum-problem-in-javascript-2gm7

## Fibonacci sequence
The Fibonacci sequence that by definition starts with `0, 1`. Every subsequent term is derived by summing the two terms before it. So, the next term is `0 + 1`, resulting in a total sequence of 
```
0, 1, 1
```
Note that these terms are indexed like an array, with the first term at index 0.

The next term is derived by adding `1 + 1`:
```
0, 1, 1, 2
```
Write a function that takes in an integer `n`, and returns the `n`th term of the sequence. For example, `fibonacci(4)` should return 3, the sum of `1 + 2`.

This problem can be solved either using a loop or using recursion.

---
path: "/leetCode167"
date: "2018-07-19"
title: "167. Two Sum II - Input array is sorted (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[167. Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)

## Description
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```
## Ideas
First submission: use two slow and fast pointers to brute force search the result.

## Solutions
First (Time Limit Exceeded)
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        if (null == numbers || 0 == numbers.length) return null;
        int[] rsl = new int[2];
        int slw = 0, fst = 1;
        while (numbers[fst] <= target && fst < numbers.length) {
            if (numbers[fst] + numbers[slw] == target) {
                rsl[0] = slw+1;
                rsl[1] = fst+1;
                return rsl;
            }
            if (numbers[fst] + numbers[slw] > target) {
                slw = slw + 1;
            }
        }
        return null;
    }
}
```

Second () 
```java

```


## 出的错
First
```
Submission Result: Time Limit Exceeded 
Last executed input:
[2,3,4]
6
```
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

Second submission:
Uw... This problem is so simple that makes myself so stupid for not being to come up with this solution. Because the list is sorted, then if the sum of slow and fast pointer is larger than the target, it means the fast pointer is too large, and if the sum is smaller, then it means the slow pointer is too small. And anything between the slow and fast pointers will make the sum larger too. Because there is a solution, this method will surely produce a solution. We just need to 'squeeze' the slow and fast pointers towards the middle to find the target.

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

Second (AC: 0 ms) 
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        if (null == numbers || 0 == numbers.length) return null;
        int[] rsl = new int[2];
        int l = 0, r = numbers.length - 1;
        while (l < r) {
            int sum = numbers[l] + numbers[r];
            if (sum == target) {
                rsl[0] = l+1;
                rsl[1] = r+1;
                return rsl;
            } else if (sum < target) {
                l++;
            } else if (sum > target) {
                r--;
            }
        }
        return null;
    }
}
```


## 出的错
First
```
Submission Result: Time Limit Exceeded 
Last executed input:
[2,3,4]
6
```
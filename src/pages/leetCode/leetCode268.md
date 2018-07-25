---
path: "/leetCode268"
date: "2018-07-24"
title: "268. Missing Number (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[268. Missing Number](https://leetcode.com/problems/missing-number/description/)

## Description
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
```
Input: [3,0,1]
Output: 2
```
Example 2:
```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

## Ideas
See the [solution](https://leetcode.com/problems/missing-number/solution/)

## Solutions
First (Learned from the solution #3, AC)
```
class Solution {
    public int missingNumber(int[] nums) {
        if (null == nums || 0 == nums.length) return -1;
        int rsl = nums.length;
        for (int i = 0; i < nums.length; i++)
            rsl = rsl ^ (i ^ nums[i]);
        return rsl;
    }
}
```
Second (Learned from the solution #4, AC)
```
class Solution {
    public int missingNumber(int[] nums) {
        if (null == nums || 0 == nums.length) return -1;
        int n = nums.length;
        int sum = 0;
        for (int i = 0; i < nums.length; i++) sum+=nums[i];
        return n*(n+1)/2 - sum;
    }
}
```

## 出的错

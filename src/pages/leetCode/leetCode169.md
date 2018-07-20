---
path: "/leetCode169"
date: "2018-07-19"
title: "169. Majority Element (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[169. Majority Element](https://leetcode.com/problems/majority-element/description/)

## Description
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
```
Input: [3,2,3]
Output: 3
```
Example 2:
```
Input: [2,2,1,1,1,2,2]
Output: 2
```
## Ideas
Use a _HashMap<Integer, Integer>_, key is the number and value is the occurence of that number. Once we reach a number whose occurence is larger than _n/2_ then we find the target.
## Solutions
First (Wrong Answer )
```java
class Solution {
    public int majorityElement(int[] nums) {
        if (null == nums || 0 == nums.length) return Integer.MAX_VALUE;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            int val = nums[i];
            if (map.containsKey(val)) {
                int occur = map.get(val);
                if (nums.length/2 <= ++occur) return val;
                map.put(val, occur);
            } else {
                map.put(val, 1);
            }
        }
        return Integer.MAX_VALUE;
    }
}
```
Second (AC)
```java
class Solution {
    public int majorityElement(int[] nums) {
        if (null == nums || 0 == nums.length) return Integer.MAX_VALUE;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            int val = nums[i];
            if (map.containsKey(val)) {
                int occur = map.get(val);
                if (nums.length/2 < ++occur) return val;
                map.put(val, occur);
            } else {
                if (nums.length/2 < 1) return val; // Important! to solve something like: [1]
                map.put(val, 1);
            }
        }
        return Integer.MAX_VALUE;
    }
}
```
## 出的错
First
```
Submission Result: Wrong Answer 
Input:
[2,2,1,1,1,2,2]
Output:
1
Expected:
2
```
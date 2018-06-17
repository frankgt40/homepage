---
path: "/leetCode448"
date: "2018-06-16"
title: "448. Find All Numbers Disappeared in an Array (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[448. Find All Numbers Disappeared in an Array](https://leetcode.com/problems/shortest-word-distance/description/)

## Description
A list contains some integers from 1 to n, n is also the size of this list. But this list may contain duplicate integers, therefore, one integer may appear twice, and one integer between 1 and n may not be in this list. The goal is to find all the integers that are not in this list. It is required that we do not use extra space and must finish in O(n) time complexity.

Example:
```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

## Ideas
Actually, I have done this problem before, so I know the method. However, this method is not so trivial. 

## Solutions
First ()
```java
class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
    	if (null == nums || 0 == nums.length) return null;
 		List<Integer> rsl = new ArrayList<Integer>();     

 		// use the nums[i]-1 as the index to record the appearance of the integer nums[i]
    }
}
```

## 出的错
None
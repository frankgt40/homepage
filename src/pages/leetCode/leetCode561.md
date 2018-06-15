---
path: "/leetCode561"
date: "2018-06-14"
title: "561. Array Partition 1 (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[561. Array Partition 1](https://leetcode.com/problems/array-partition-i/description/)

## Description
一维数组有2n个元素，两两结合，使得sum(min(a_i,b_i)), 0<=i<=n最大。

## Ideas
数组先排序，然后相邻的两个结合，大概思想是这样可以最少的浪费大的元素。理论基础是什么不知道。有一个证明在这：[https://leetcode.com/problems/array-partition-i/discuss/102170/Java-Solution-Sorting.-And-rough-proof-of-algorithm.](https://leetcode.com/problems/array-partition-i/discuss/102170/Java-Solution-Sorting.-And-rough-proof-of-algorithm.)最终证明这个问题和找到两两元素直接距离的和为最小的问题。从而证明了就是先排序然后再算和的解法是正确的：

1.Assume in each pair i, bi >= ai.
2.Denote Sm = min(a1, b1) + min(a2, b2) + ... + min(an, bn). The biggest Sm is the answer of this problem. Given 1, Sm = a1 + a2 + ... + an.
3.Denote Sa = a1 + b1 + a2 + b2 + ... + an + bn. Sa is constant for a given input.
4.Denote di = |ai - bi|. Given 1, di = bi - ai. Denote Sd = d1 + d2 + ... + dn.
5.So Sa = a1 + a1 + d1 + a2 + a2 + d2 + ... + an + an + dn = 2Sm + Sd => Sm = (Sa - Sd) / 2. To get the max Sm, given Sa is constant, we need to make Sd as small as possible.
6.So this problem becomes finding pairs in an array that makes sum of di (distance between ai and bi) as small as possible. Apparently, sum of these distances of adjacent elements is the smallest. If that's not intuitive enough, see attached picture. Case 1 has the smallest Sd.

## Solutions
First (1st time AC)
```java
class Solution {
    public int arrayPairSum(int[] nums) {
	  if (nums == null || nums.length == 0) return 0;
        Arrays.sort(nums);
	  	int sum = 0;
        for (int i = 0; i < nums.length; i+=2)
	   		sum += nums[i];
	  	return sum;
    }
}
```

## 出的错
None

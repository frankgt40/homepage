---
path: "/leetCode122"
date: "2018-07-19"
title: "122. Best Time to Buy and Sell Stock II (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)

## Description
Say you have an array for which the i<sup>th</sup> element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
```
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```
Example 2:
```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```
Example 3:
```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```
## Ideas
The goal is to find transcations, i.e. from the buy to the sell
## Solutions
First ()
```
```
Second ()
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
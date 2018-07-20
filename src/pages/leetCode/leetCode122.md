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
The goal is to find transcations, i.e. from the buy to the sell. We use two pointers: slow and fast pointers. Slow pointer points the start of one transcation and fast pointer points the end of the transcation (sell) that makes this current transcation maximum profit.

If the next one of the slow pointer is smaller, we set the slow pointer to the next one, because if the next one is smaller, we can always gain more profit in this transcation starting from this cheaper price than the more expensive price. 

Then, the next goal is to find the end of the transcation, the fast pointer. There are two ways of doing that. The first way is slower. We check every other value for this slow pointer to find the right fast pointer that makes the transcation maximum profit. The second way is more efficient: we just check the largest value that follows the slow pointer and end at the first value that is non-acsent in the list. The reason this works is that: let _sPtr_ and _fPtr_ be slow and fast pointer respectly, _nVal_ be the element after _fPtr_ and _nextFPtr_ be the fast pointer in the next transcation. Therefore, _nextFPtr_ - _sPtr_ <= ( _fPtr_ - _sPtr_ ) + ( _nextFPt_ - _nVal_ ).

## Solutions
First (Wrong answer)

*Have to reset the value of _max_ after one transcation!*

```java
class Solution {
    public int maxProfit(int[] prices) {
        if (null == prices || 0 == prices.length) return 0;
        int slw = 0, fst = 1, max  = 0, total = 0;
        while (prices.length > fst) {
            if (prices[fst] <= prices[fst-1]) {
                // the end of the current transcation
                slw = fst; 
                total += max;
            } else {
                max = Math.max(prices[fst] - prices[slw], max);
            }
            fst++;
        }
        return total;
    }
}
```

Second (Wrong Answer) 
*If the list only has one transcation and this transcation ends at the end of this list, we have to deal with it.*
```java
class Solution {
    public int maxProfit(int[] prices) {
        if (null == prices || 0 == prices.length) return 0;
        int slw = 0, fst = 1, max  = 0, total = 0;
        while (prices.length > fst) {
            if (prices[fst] <= prices[fst-1]) {
                // the end of the current transcation
                slw = fst; 
                total += max;
                max = 0;
            } else {
                max = Math.max(prices[fst] - prices[slw], max);
            }
            fst++;
        }
        return total;
    }
}
```

Third (AC: 1 ms)
```java
class Solution {
    public int maxProfit(int[] prices) {
        if (null == prices || 0 == prices.length) return 0;
        int slw = 0, fst = 1, max  = 0, total = 0;
        while (prices.length > fst) {
            if (prices[fst] <= prices[fst-1]) {
                // the end of the current transcation
                slw = fst; 
                total += max;
                max = 0;
            } else {
                max = Math.max(prices[fst] - prices[slw], max);
            }
            fst++;
        }
        total += prices[prices.length-1] - prices[slw]; // to deal with only one transcation list.
        return total;
    }
}
```
## 出的错
First
```
Submission Result: Wrong Answer 
Your input
[7,1,5,3,6,4]
Your answer
8
Expected answer
7
```

Second
```
Submission Result: Wrong Answer 
Input:
[1,2,3,4,5]
Output:
0
Expected:
4
```

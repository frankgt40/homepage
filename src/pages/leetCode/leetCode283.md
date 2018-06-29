---
path: "/leetCode283"
date: "2018-06-21"
title: "283. Move Zeroes (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[283. Move Zeroes](https://leetcode.com/problems/move-zeroes/description/)

## Description
一维数组，把里面的的数字0都放到最后面。

要求：
1.只能in-place
2.操作数量最小化

Examples:
```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

## Ideas
两个指针，快指针指向最前的非零数字的位置，慢指针指向最前的零的位置。然后每次快指针指向一个新的非零数字时调换快慢指针指向的数字，然后慢指针加一，快指针继续向前找非零的数字。

快指针到边界时结束算法。慢指针如果追上了快指针就一起往前加一，直到快指针发现了另一个数字0。

## Solutions
First ( Wrong Answer )
```java
class Solution {
    public void moveZeroes(int[] nums) {
    	if (null == nums || 0 == nums.length) return;
 		int f = 0, s = 0;
 		while (nums.length != f) {
 			if (0 == nums[f]) {
 				f++;
 			} else {
 				if (s == f) {
 					// don't swap
 					s++; 
 					f++;
 				} else {
 					// swap
 					nums[s] = nums[f];
 					nums[f] = 0;
 					f++;
 					s++;
 				}
 			}
 		}
    }
}
```

Second (AC: 3ms)
```java
class Solution {
    public void moveZeroes(int[] nums) {
    	if (null == nums || 0 == nums.length) return;
 		int f = 0, s = 0;
 		while (nums.length != f) {
 			if (0 == nums[f]) {
 				f++;
 			} else {
 				if (s == f) {
 					// don't swap
 					s++; 
 					f++;
 				} else {
 					// swap
 					nums[s] = nums[f];
 					nums[f] = 0;
 					f++;
 					s++;
 				}
 			}
 		}
    }
}
```

## 出的错
First
```
Submission Result: Wrong Answer 
Input:
[0,1,0,3,12]
Output:
[1,3,0,0,12]
Expected:
[1,3,12,0,0]
```

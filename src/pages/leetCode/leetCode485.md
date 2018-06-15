---
path: "/leetCode485"
date: "2018-06-14"
title: "485. Max Consecutive Ones (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[485. Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/description/)

## Description
找数组里最多有多少个连续的数字1

## Ideas
生找，从头遍历到尾。每次遇到不是1就把计数器置为0，反之就加一。

需要注意array尾部，到了最后要再判断一次，因为最后可能一直是1但是max没有被更新。

## Solutions
First (*Wrong Answer* 少了个else！注意如果不是1的话计数器不应该再加1)
```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
 	if (nums == null || nums.length == 0) return 0;
	int max = 0;
	int count = 0;
	for (int i = 0; i < nums.length; i++) {
		if (nums[i] != 1) {	
			if (count > max) max = count;
			count = 0;
		}
		count++;
	}  
	if (count > max) max = count;
	return max;     
    }
}
```

Second (AC) 
```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
 	if (nums == null || nums.length == 0) return 0;
	int max = 0;
	int count = 0;
	for (int i = 0; i < nums.length; i++) {
		if (nums[i] != 1) {	
			if (count > max) max = count;
			count = 0;
		} else 	count++;
	}  
	if (count > max) max = count;
	return max;     
    }
}
```

## 出的错
First
```
Submission Result: Wrong Answer 
Input:
[1,0,1,1,0,1]
Output:
3
Expected:
2
```
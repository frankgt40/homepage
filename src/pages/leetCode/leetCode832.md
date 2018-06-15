---
path: "/leetCode832"
date: "2018-06-12"
title: "832.反转图片 (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[832.Flipping an Image](https://leetcode.com/problems/flipping-an-image/description/)

## Description

二维数组(n*n)，对每个row做两个操作：

1.Flip: 
```
[0,1,1] => [1,1,0]
```

2.Invert
```
[1,1,0] => [0,0,1]
```

## Ideas
两个操作有互换性，操作顺序可以随意。遍历每行，对每行进行两个操作。Flip：两头往中间走互换元素，奇数个不理中间元素，偶数个正好一一互换，i从0到(n-1)/2,互换i和n-1-i。Invert：遍历一遍数组，遇到1变为0,0变为1。复杂度flip为O(n)，invert为O(n)。

知识点：两头往中间走，怎么让奇数个元素时中间那个空出来或者它自己和自己互换，让偶数个元素正好全部互换。搜搜有没有模板。如果是奇数的话，(n-1)/2就是中间元素，如果是偶数的话，(n-1)/2就是中间一对元素的左边的那个。

## Solutions
First (1st time AC):
```java
class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
 		if (A == null || A.length == 0) return A;
		int n = A.length;
		for (int row = 0; row < n; row++) {
			// flip
			for (int i = 0; i <= (n-1)/2; i++) {
				int tmp = A[row][i];
				A[row][i] = A[row][n-1-i];
				A[row][n-1-i] = tmp;
			}
			// invert
			for (int i= 0; i < n; i++) {
				if (A[row][i] == 0) A[row][i] = 1;
				else A[row][i] = 0;
			}
		}
		return A;
    }
}
```

## 出的错
None

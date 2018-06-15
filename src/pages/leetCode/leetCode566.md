---
path: "/leetCode566"
date: "2018-06-14"
title: "566. Reshape the Matrix (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[566. Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/description/)

## Description
二维数组矩阵重新变为r行c列的矩阵，要求变换后的矩阵和变换前的矩阵具有相同的row-traversing order。 如果无法实现变换，就返回原矩阵。

## Ideas
先判断能不能变换，如果r*c等于变换前矩阵元素的数量就可以变换，否则不能。

如果能变换，再来变换：通过row-traversing order来遍历原矩阵，然后c个截断成一行。

## Solutions
First (1st time AC)
```java
class Solution {
    public int[][] matrixReshape(int[][] nums, int r, int c) {
 	if (nums == null || nums.length == 0 || nums[0] == null || nums[0].length == 0) return nums;
	int r0 = nums.length;
	int c0 = nums[0].length;       
	// check whether it's possible to do the reshape
	if (r0*c0 != r*c) return nums; // cannnot
	int[][] newOne = new int[r][c];
	int i2 = 0; int j2 = 0;
	// iterate through every element by row-traversing order
	for (int i = 0; i < r0; i++) { // for each row
		for (int j = 0; j < c0; j++) { // for each column
			newOne[i2][j2++] = nums[i][j];
			if (j2 == c) {	
				j2 = 0;
				i2++;
			}
		}
	}
	return newOne;
    }
}
```


## 出的错
None
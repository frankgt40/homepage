---
path: "/leetCode766"
date: "2018-06-14"
title: "766. Toeplitz Matrix (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[766. Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/description/)

## Description
二维矩阵，判断正每条正对角线里的元素是否都相等。
例子：
```
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: True
Explanation:
1234
5123
9512
```

## Ideas
主要是知道怎么遍历正对角线元素的下标。然后从下往上遍历每个row开头的对角线，再从左往右遍历每个column开头的对角线。遍历正对角线上元素(r,c)的下个元素为(r+1,c+1)。注意判断r，c不超边界值。 

如果矩阵每行只有一个元素怎么办：还是认为是Toeplitz Matrix。

## Solutions
First (1st time AC)
```java
class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
	if (matrix == null || matrix.length == 0) return false;
	int rn = matrix.length;
	int cn = matrix[0].length;	
	if (cn == 1) return true; // if there is just one column
	// for every row
	for (int rh = 0; rh < rn; rh++) {
		int r = rh;
		int c = 0;
		int e = matrix[r][c];
		r = r + 1; 
		c = c + 1;
		while (r < rn && c < cn) {
			if (e != matrix[r++][c++]) return false;
		}
	}
	// for every column
	for (int ch = 1; ch < cn; ch++) {
		int r = 0;
		int c = ch;
		int e = matrix[r][c];
		r = r + 1;
		c = c + 1;
		while (r < rn && c < cn) {	
			if (e != matrix[r++][c++]) return false;
		}
	}
	return true;
    }
}
```

## 出的错
代码不够简练啊，虽然性能一样，还是别人写的简练，链接：[https://leetcode.com/problems/toeplitz-matrix/discuss/136997/Simple-accepted-Java-solution](https://leetcode.com/problems/toeplitz-matrix/discuss/136997/Simple-accepted-Java-solution)

不需要像我那样把矩阵分为上下两半来遍历，直接遍历每个元素就可以了，因为int元素有传递性的。

```java
class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        for(int i = 0; i < matrix.length - 1; i++) {
            for(int j = 0; j < matrix[i].length - 1; j++) {
                if(matrix[i][j] != matrix[i+1][j+1]) {
                    return false;
                }
            }
        }
        return true;
    }
}
```

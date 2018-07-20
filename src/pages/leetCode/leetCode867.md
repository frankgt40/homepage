---
path: "/leetCode867"
date: "2018-07-13"
title: "867. Transpose Matrix (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/description/)

## Description
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

 

Example 1:
```
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
```
Example 2:
```
Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
```


## Ideas
We just need to set A[r][c] = A[c][r].

## Solutions
First (Runtime Error )
```java
class Solution {
    public int[][] transpose(int[][] A) {
        if (null == A || 0 == A.length) return A;
        int[][] A2 = new int[A.length][A[0].length];
        for (int r = 0; r < A.length; r++) {
            for (int c = 0; c < A[0].length; c++) {
                A2[c][r] = A[r][c];
            }
        }
        return A2;
    }
}
```
Second (AC: 2 ms)
```java
class Solution {
    public int[][] transpose(int[][] A) {
        if (null == A || 0 == A.length) return A;
        int[][] A2 = new int[A[0].length][A.length];
        for (int r = 0; r < A.length; r++) {
            for (int c = 0; c < A[0].length; c++) {
                A2[c][r] = A[r][c];
            }
        }
        return A2;
    }
}
```
## 出的错
First
```
Runtime Error Message:
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 2
	at Solution.transpose(Solution.java:7)
	at __DriverSolution__.__helper__(__Driver__.java:10)
	at __Driver__.main(__Driver__.java:54)
Last executed input:
[[1,2,3],[4,5,6]]
```
*It's crucial to set the new matrix's dimensions right! int\[\]\[\] A2 = new int\[A\[0\].length\]\[A.length\]*
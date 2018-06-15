---
path: "/leetCode746"
date: "2018-06-15"
title: "746. Min Cost Climbing Stairs (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/description/)

## Description
爬楼梯，每片楼梯有一个cost，当站在这片的时候付完cost以后，就可以选择往上爬一节或两节。可以从第0节或者第1节开始爬。求最小代价能从底爬到顶。

## Ideas
用到DP，用另一个数组来记录到达这个下标的最小代价。一个个走到最后。

## Solutions
First (Runtime Error)
```java
class Solution {
    public int minCostClimbingStairs(int[] cost) {
	if (null == cost || 0 == cost.length) return 0;
	int n = cost.length;
	int[] totalCost = new int[n];  
	totalCost[0] = 0;   
	totalCost[1] = 0;
	for (int i = 1; i < n; i++) {
		if (totalCost[n-1]+cost[n-1] > totalCost[n-2]+cost[n-2])
			totalCost[n] = totalCost[n-2]+cost[n-2];
		else
			totalCost[n] = totalCost[n-1]+cost[n-1];
	}
	return totalCost[n-1];
    }
}
```

Second (Wrong Answer, we are only going to the top but also the one beyond that top stair!!!)
```java
class Solution {
    public int minCostClimbingStairs(int[] cost) {
	if (null == cost || 0 == cost.length) return 0;
	int n = cost.length;
	int[] totalCost = new int[n];  
	totalCost[0] = 0;   
	totalCost[1] = 0;
	for (int i = 2; i < n; i++) {
		if (totalCost[i-1] + cost[i-1] > totalCost[i-2]+cost[i-2])
			totalCost[i] = totalCost[i-2] + cost[i-2];
		else
			totalCost[i] = totalCost[i-1] + cost[i-1];
	}
	return totalCost[n-1];
    }
}
```

Third (AC)
```java
class Solution {
    public int minCostClimbingStairs(int[] cost) {
	if (null == cost || 0 == cost.length) return 0;
	int n = cost.length;
	int[] totalCost = new int[n+1];  
	totalCost[0] = 0;   
	totalCost[1] = 0;
	for (int i = 2; i < n+1; i++) {
		if (totalCost[i-1] + cost[i-1] > totalCost[i-2]+cost[i-2])
			totalCost[i] = totalCost[i-2] + cost[i-2];
		else
			totalCost[i] = totalCost[i-1] + cost[i-1];
	}
	return totalCost[n];
    }
}
```

## 出的错
First
```
Submission Result: Runtime Error 
Runtime Error Message:
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 4
	at Solution.minCostClimbingStairs(Solution.java:12)
	at __DriverSolution__.__helper__(__Driver__.java:8)
	at __Driver__.main(__Driver__.java:52)
Last executed input:
[0,0,0,0]
```
---
path: "/leetCode695"
date: "2018-06-15"
title: "695. Max Area of Island (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/description/)

## Description
二维01数组，找最大的一组1，称为岛，元素上下左右这个四个方向有1就被认为是一个岛。

Example 1:
```
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
```
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

Example 2:
```
[[0,0,0,0,0,0,0,0]]
```
Given the above grid, return 0.

## Ideas
因为搜索树高度有限，所以用DFS，其实DFS和BFS都没有所谓这里。对每个点进行上下左右四个方向进行搜索。一旦到二维数组外面就返回0。还要用到DP，建立相同维数的boolean数组矩阵，访问过的点设为true，否则设为false。

递归时可以在访问每个点时判断是否之前访问过，也可以在访问这个点之前判断。后者更好，因为如果已经访问过就没有必要再开栈了。

还有一定要注意在地柜其他点的之前一定要把当前的点置为已经访问，否则会无限访问下去。

发现leetCode里测试时间的不准的。本来以为别人的直接该grid\[r\]\[c\] = 0，这样的就不用新生成一个二维数组visited来做DP了，发现其实时间上是差不了了太多的。只是省去了空间复杂度，但是伤害了原有的数据有点得不偿失了。

## Solutions
First (Runtime Error ）为了更少创建栈，导致代码过于复杂容易出错。感觉有点得不偿失，换一种写法。
```java
class Solution {
	private boolean[][] visited;
	private int[][] grid;
	public int search(int r, int c) {
		if (0 > r || grid.length <= r || 0 > c || grid[0].length <= c) return 0;
		int sum = grid[r][c];
		visited[r][c] = true; // critical
		sum += 0 > r-1 || visited[r-1][c] ? 0 : search(r-1, c); //  up
		sum += grid.length <= r+1 || visited[r+1][c] ? 0 : search(r+1, c); // down
		sum += 0 > c-1 || visited[r][c-1] ? 0 : search(r, c-1); // left
		sum += grid[0].length <= c+1 || visited[r][c+1] ? 0 : search(r, c+1); // right
		return sum;
	}
	public int maxAreaOfIsland(int[][] grid) {
		if (null == grid || 0 == grid.length) return 0;
	        visited = new boolean[grid.length][grid[0].length];
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) visited[r][c] = false;
		this.grid = grid;
		int sum = 0;
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) {
				if (!visited[r][c]) {
					int tmp = search(r,c);
					sum = (sum > tmp) ? sum : tmp;
				}
			}
		return sum;
    	}
}
```

Second (Wrong Answer)
```java
class Solution {
	private boolean[][] visited;
	private int[][] grid;
	public int search(int r, int c) {
		if (0 > r || grid.length <= r || 0 > c || grid[0].length <= c || visited[r][c]) return 0; //少判断了是否等于1，如果不是1就不应该计算的，因为这个节点就不是其他节点上下左右的链接节点。
		visited[r][c] = true; // critical
		return grid[r][c] + search(r-1,c) + search(r+1,c) + search(r, c-1) + search(r, c+1);
	}
	public int maxAreaOfIsland(int[][] grid) {
		if (null == grid || 0 == grid.length) return 0;
	        visited = new boolean[grid.length][grid[0].length];
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) visited[r][c] = false;
		this.grid = grid;
		int sum = 0;
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) {
				if (!visited[r][c]) {
					int tmp = search(r,c);
					sum = (sum > tmp) ? sum : tmp;
				}
			}
		return sum;
    	}
}
```

Third (AC: 43 ms)
```java
class Solution {
	private boolean[][] visited;
	private int[][] grid;
	public int search(int r, int c) {
		if (0 > r || grid.length <= r || 0 > c || grid[0].length <= c || visited[r][c] || 1 != grid[r][c]) return 0;
		visited[r][c] = true; // critical
		return grid[r][c] + search(r-1,c) + search(r+1,c) + search(r, c-1) + search(r, c+1);
	}
	public int maxAreaOfIsland(int[][] grid) {
		if (null == grid || 0 == grid.length) return 0;
	        visited = new boolean[grid.length][grid[0].length];
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) visited[r][c] = false;
		this.grid = grid;
		int sum = 0;
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) {
				if (!visited[r][c]) {
					int tmp = search(r,c);
					sum = (sum > tmp) ? sum : tmp;
				}
			}
		return sum;
    	}
}
```

Fourth (AC: 45 ms) 为了避免建栈反而消耗了更多的时间，我猜是判断语句消耗掉了太多的时间。
```java
class Solution {
	private boolean[][] visited;
	private int[][] grid;
	public int search(int r, int c) {
		if (0 > r || grid.length <= r || 0 > c || grid[0].length <= c) return 0;
		int sum = grid[r][c];
		visited[r][c] = true; // critical
		sum += 0 > r-1 || grid[r][c] == 0 || visited[r-1][c] ? 0 : search(r-1, c); //  up
		sum += grid.length <= r+1 ||  grid[r][c] == 0 || visited[r+1][c] ? 0 : search(r+1, c); // down
		sum += 0 > c-1 ||  grid[r][c] == 0 || visited[r][c-1] ? 0 : search(r, c-1); // left
		sum += grid[0].length <= c+1 ||  grid[r][c] == 0 || visited[r][c+1] ? 0 : search(r, c+1); // right
		return sum;
	}
	public int maxAreaOfIsland(int[][] grid) {
		if (null == grid || 0 == grid.length) return 0;
	        visited = new boolean[grid.length][grid[0].length];
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) visited[r][c] = false;
		this.grid = grid;
		int sum = 0;
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) {
				if (!visited[r][c]) {
					int tmp = search(r,c);
					sum = (sum > tmp) ? sum : tmp;
				}
			}
		return sum;
    	}
}
```

Fiveth (AC: 44 ms) 迭代没有太快啊！？
```java
class Solution {
	private boolean[][] visited;
	private int[][] grid;
	class Node {
		public int r = 0;
		public int c = 0;
		Node(int r, int c) { this.r = r; this.c = c; }
	}
	public int search(int r, int c) {
		LinkedList<Node> stk = new LinkedList<Node>();
		stk.add(new Node(r,c));
		int sum = 0;
		while (!stk.isEmpty()) {
			Node n = stk.removeFirst(); // DFS
			if (0 > n.r || grid.length <= n.r || 0 > n.c || grid[0].length <= n.c || visited[n.r][n.c] || grid[n.r][n.c] != 1) continue;
			visited[n.r][n.c] = true;
			sum += 1;
			stk.addFirst(new Node(n.r-1,n.c)); // DFS
			stk.addFirst(new Node(n.r+1,n.c));
			stk.addFirst(new Node(n.r, n.c-1));
			stk.addFirst(new Node(n.r, n.c+1));
		}
		return sum;
	}
	public int maxAreaOfIsland(int[][] grid) {
		if (null == grid || 0 == grid.length) return 0;
	        visited = new boolean[grid.length][grid[0].length];
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) visited[r][c] = false;
		this.grid = grid;
		int sum = 0;
		for (int r = 0; r < grid.length; r++) 
			for (int c = 0; c < grid[0].length; c++) {
				if (!visited[r][c]) {
					int tmp = search(r,c);
					sum = (sum > tmp) ? sum : tmp;
				}
			}
		return sum;
    	}
}
```

## 出的错
First
```
Submission Result: Runtime Error More Details 

Runtime Error Message:
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: -1
	at Solution.search(Solution.java:8)
	at Solution.maxAreaOfIsland(Solution.java:24)
	at __DriverSolution__.__helper__(__Driver__.java:8)
	at __Driver__.main(__Driver__.java:52)
Last executed input:
```
Second
```
Submission Result: Wrong Answer More Details 

Input:
[[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
Output:
8
Expected:
4
```
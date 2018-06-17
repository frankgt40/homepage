---
path: "/leetCode243"
date: "2018-06-16"
title: "243. Shortest Word Distance (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[243. Shortest Word Distance](https://leetcode.com/problems/shortest-word-distance/description/)

## Description
Given a list of Strings, and two Strings str1, str2, find the minimu distance between str1 and str2 in the list. 

Example:
Assume that words = \["practice", "makes", "perfect", "coding", "makes"\].

```
Input: word1 = “coding”, word2 = “practice”
Output: 3
```

```
Input: word1 = "makes", word2 = "coding"
Output: 1
```

## Ideas
Be careful, there may be more str1 and str2 in the list. Also the problem says the list must contains at least one str1 and str2, which could be a problem if the list does not. Or if word1 and word2 are the same String, then we can just simply return 0/

First idea: ceate two lists for Str1 and Str2 respectively, insert the positions into these two lists. *These two list must be already sorted*. Then compare them list merge process in the mergeSort.

A better way is to get rid of these two list of positions, and just do the merge comparisions while searching the positions in the original list. But there is going to be some redundant comparisions, so this way may be slower. Actually this way has the same speed...

## Solutions
First (First time AC: 2 ms)
```java
class Solution {
    public int shortestDistance(String[] words, String word1, String word2) {
 		if (null == words || 0 == words.length || null == word1 || null == word2 || word1.equals(word2)) return 0; // error
 		// add positions for word1 and word2 in the two lists
 		ArrayList<Integer> l1 = new ArrayList<Integer>(), l2 = new ArrayList<Integer>();
 		for (int i = 0; i < words.length; i++) {
 			if (word1.equals(words[i])) l1.add(i);
 			if (word2.equals(words[i])) l2.add(i);
 		}
 		// merge compare
 		int i1 = 0, i2 = 0;
 		int min = Integer.MAX_VALUE;
 		while (l1.size() > i1 && l2.size() > i2) {
 			int tmp = 0;
 			int head1 = l1.get(i1), head2 = l2.get(i2);
 			if (head1 <= head2) {
 				tmp = head2 - head1;
 				i1++;
 			} else {
 				tmp = head1 - head2;
 				i2++;
 			}
 			min = Math.min(min, tmp);
 		}
 		return min;

    }
}
```
Second (AC: 2 ms)
```java
class Solution {
    public int shortestDistance(String[] words, String word1, String word2) {
 		if (null == words || 0 == words.length || null == word1 || null == word2 || word1.equals(word2)) return 0;
 		int min = Integer.MAX_VALUE, last1 = -1, last2 = -1;
 		for (int i = 0; i < words.length; i++) {
 			int tmp = 0;
 			if (word1.equals(words[i])) {
 				if (last2 != -1) {
 					tmp = Math.abs(i - last2);	
 					min = Math.min(tmp, min);
 				}
 				last1 = i;
 			} else if (word2.equals(words[i])) {
 				if (last1 != -1) {
 					tmp = Math.abs(i - last1);
 					min = Math.min(tmp, min);
 				}
 				last2 = i;
 			}

 		}
 		return min;
    }
}
```

## 出的错
Be careful that if we want to test whether a index is set or not, better not use zero: if (0 == i). Because index can be set to the first one, which is obviously zero.
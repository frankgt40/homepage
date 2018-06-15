---
path: "/leetCode771"
date: "2018-06-14"
title: "771. Jewels and Stones (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[771. Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/description/)

## Description
J里元素唯一，S里元素有可能在J里有。判断S里有多少个在J里的元素。

## Ideas

J,S都是String，所以要会遍历String。

另外，要节省时间复杂度，所以把J里元素都存到HashSet里，这样快。

可以用list1.removeAll(list2)来解，但内在还是用的双层循环的：removeAll里的循环会调用indexOf，indexOf里又有一层循环。

还有快速解法认为String最大长度在50个字符内，所以可以造一个50长度的int array，然后把char换为int，存在这个int[]里。虽然快，但是感觉太挑巧了，不适用一般的情况，例如这里如果没有规定String大小呢？

## Solutions
First (Compile Error)
```java
class Solution {
    public int numJewelsInStones(String J, String S) {
	if (J.isEmpty() || S.isEmpty()) return 0;
	// add J's chars to a HashMap
	HashSet<Charater> s = new HashSet<Character>();
	for (int i = 0; i < J.size(); i++) s.add(J.charAt(i));
	// count the number
	int num = 0;
	for (int i = 0; i < S.size(); i++) {
		if (s.contains(S.charAt(i)) num++;
	}
	return num;
    }
}
```
Second (Compile Error)
```java
class Solution {
    public int numJewelsInStones(String J, String S) {
	if (J.isEmpty() || S.isEmpty()) return 0;
	// add J's chars to a HashMap
	HashSet<Charater> s = new HashSet<Character>();
	for (int i = 0; i < J.size(); i++) s.add(J.charAt(i));
	// count the number
	int num = 0;
	for (int i = 0; i < S.size(); i++) {
		if (s.contains(S.charAt(i))) num++;
	}
	return num;
    }
}
```

Third (Compile Error) 
```java
class Solution {
    public int numJewelsInStones(String J, String S) {
	if (J.isEmpty() || S.isEmpty()) return 0;
	// add J's chars to a HashMap
	HashSet<Character> s = new HashSet<Character>();
	for (int i = 0; i < J.size(); i++) s.add(J.charAt(i));
	// count the number
	int num = 0;
	for (int i = 0; i < S.size(); i++) {
		if (s.contains(S.charAt(i))) num++;
	}
	return num;
    }
}
```

Fouth (AC) 
```java
class Solution {
    public int numJewelsInStones(String J, String S) {
	if (J.isEmpty() || S.isEmpty()) return 0;
	// add J's chars to a HashMap
	HashSet<Character> s = new HashSet<Character>();
	for (int i = 0; i < J.length(); i++) s.add(J.charAt(i));
	// count the number
	int num = 0;
	for (int i = 0; i < S.length(); i++) {
		if (s.contains(S.charAt(i))) num++;
	}
	return num;
    }
}
```

## 出的错
First:
```
Submission Result: Compile Error 
Line 10: error: ')' expected
```
Second:
```
Submission Result: Compile Error 
Line 5: error: cannot find symbol: class Charater
```
Third:
```
Submission Result: Compile Error 
Line 6: error: cannot find symbol: method size()
```
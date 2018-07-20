---
path: "/leetCode717"
date: "2018-07-13"
title: "717. 1-bit and 2-bit Characters (Easy, Array)"
author: "Cheng Cai"
---

题目链接：[717. 1-bit and 2-bit Characters](https://leetcode.com/problems/1-bit-and-2-bit-characters/description/)

## Description
We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.

Example 1:
```
Input: 
bits = [1, 0, 0]
Output: True
Explanation: 
The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.
```
Example 2:
```
Input: 
bits = [1, 1, 1, 0]
Output: False
Explanation: 
The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.
```

## Ideas
Recusion finding.

## Solutions
First (Runtime Error)
```java
class Solution {
    int[] bits;
    public boolean recurFind(int head) {
        if (bits.length-1 == head && 0 == bits[head]) return true;
        boolean r1 = false, r2 = false, r3 = false;
        if (0 == bits[head])
            r1 = recurFind(head+1);
        if (1 == bits[head] && 0 == bits[head+1])
            r2 = recurFind(head+1);
        if (1 == bits[head] && 1 == bits[head+1])
            r3 = recurFind(head+1);
        return r1&&r2&&r3;
    }
    public boolean isOneBitCharacter(int[] bits) {
        if (null == bits || 0 == bits.length) return false;
        this.bits = bits;
        return recurFind(0);
    }
}
```
Second ( 5 ms)
```java
class Solution {
    int[] bits;
    public boolean recurFind(int head) {
        if (bits.length-1 == head && 0 == bits[head]) return true;
        if (bits.length-2 == head && 1 == bits[head]) return false;
        
        boolean r1 = true, r2 = true;
        if (0 == bits[head])
            r1 = recurFind(head+1);
        if (1 == bits[head])
            r2 = recurFind(head+2);
        return r1&&r2;
    }
    public boolean isOneBitCharacter(int[] bits) {
        if (null == bits || 0 == bits.length) return false;
        this.bits = bits;
        return recurFind(0);
    }
}
```
Be careful about the initialization value of the boolean values, here we need to set them to _true_ instead of _false_. Also, we need to set the _recurFind(head+2)_ instead of _recurFind(head+1)_
## 出的错
First
```
ubmission Result: Wrong Answer 
Input:
[1,0,0]
Output:
false
Expected:
true

Should put more conditions on the end of the recursion
```
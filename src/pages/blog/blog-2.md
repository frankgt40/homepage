---
path: "/blog2"
date: "2018-08-22"
title: "Summerize of Math problems"
author: "Cheng Cai"
---

## [Palindrome Number](https://leetcode.com/problems/palindrome-number/solution/)
Revert the half of the integer and compare it with the other half. 
Use:
1. [Rverse Integer](https://leetcode.com/problems/reverse-integer/description/)

## [Excel Sheet Column Title]()
*Important to remember*: x%n means the number is from 0 ~ n-1!!! Quote from LeetCode answer: I think the reason we do n-- is that number 0 is not included in this sheet. We can consider this transformation as base-26. However, classic base-26 consists of number from 0 to 25, and in this case we have numbers from 1 to 26. Now n-- seems intuitive and reasonable.

## [Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/discuss/52371/My-one-line-solutions-in-3-languages)
Count the number of 5 between 0 to n.

## [Happy Numbe](https://leetcode.com/problems/happy-number/)
[Great proof: ](https://leetcode.com/problems/happy-number/discuss/56919/Explanation-of-why-those-posted-algorithms-are-mathematically-valid)
Earlier posts gave the algorithm but did not explain why it is valid mathematically, and this is what this post is about: present a "short" mathematical proof.

First of all, it is easy to argue that starting from a number I, if some value - say a - appears again during the process after k steps, the initial number I cannot be a happy number. Because a will continuously become a after every k steps.

Therefore, as long as we can show that there is a loop after running the process continuously, the number is not a happy number.

There is another detail not clarified yet: For any non-happy number, will it definitely end up with a loop during the process? This is important, because it is possible for a non-happy number to follow the process endlessly while having no loop.

To show that a non-happy number will definitely generate a loop, we only need to show that for any non-happy number, all outcomes during the process are bounded by some large but finite integer N. If all outcomes can only be in a finite set (2,N], and since there are infinitely many outcomes for a non-happy number, there has to be at least one duplicate, meaning a loop!

Suppose after a couple of processes, we end up with a large outcome O1 with D digits where D is kind of large, say D>=4, i.e., O1 > 999 (If we cannot even reach such a large outcome, it means all outcomes are bounded by 999 ==> loop exists). We can easily see that after processing O1, the new outcome O2 can be at most 9^2*D < 100D, meaning that O2 can have at most 2+d(D) digits, where d(D) is the number of digits D have. It is obvious that 2+d(D) < D. We can further argue that O1 is the maximum (or boundary) of all outcomes afterwards. This can be shown by contradictory: Suppose after some steps, we reach another large number O3 > O1. This means we process on some number W <= 999 that yields O3. However, this cannot happen because the outcome of W can be at most 9^2*3 < 300 < O1.

Done.

## [Count Primes](https://leetcode.com/problems/count-primes)
*HashSet is slower, when the number of elements is so great!* Use this [solution](https://leetcode.com/problems/count-primes/discuss/57588/My-simple-Java-solution):
```java
public class Solution {
    public int countPrimes(int n) {
        boolean[] notPrime = new boolean[n];
        int count = 0;
        for (int i = 2; i < n; i++) {
            if (notPrime[i] == false) {
                count++;
                for (int j = 2; i*j < n; j++) {
                    notPrime[i*j] = true;
                }
            }
        }
        
        return count;
    }
}
```

## [Power of Three](https://leetcode.com/problems/power-of-three)
[Insane solution](https://leetcode.com/problems/power-of-three/solution/):
```java
public class Solution {
    public boolean isPowerOfThree(int n) {
        return n > 0 && 1162261467 % n == 0;
    }
}
```
BYW, I don't think we need to memorize this solution, because it's just too abnormal.

## [Power of Four]()
[Insane solution](https://leetcode.com/problems/power-of-four/discuss/80457/Java-1-line-(cheating-for-the-purpose-of-not-using-loops)):
```java
public boolean isPowerOfFour(int num) {
    return num > 0 && (num&(num-1)) == 0 && (num & 0x55555555) != 0;
    //0x55555555 is to get rid of those power of 2 but not power of 4
    //so that the single 1 bit always appears at the odd position 
}
```
```(num&(num-1)) == 0``` means the binary format of the number must be like this: 10000 (one 1 followed by all zeros). ```(num & 0x55555555) != 0``` will ensure all the 1's of the number are in the odd positions, which means power of 4, because every time multiplies 4 means left shitting two positions.
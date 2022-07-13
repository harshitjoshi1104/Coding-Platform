const data = {
    1:{
        title: <h2>1. Two Sums</h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</li>
            <br />
            <li>You may assume that each input would have exactly one solution, and you may not use the same element twice.</li>
            <br />
            <li>You can return the answer in any order.</li>
        </ul>,
        example: [{
            ex: "Example 1",
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]"
        },
        {
            ex: "Example 2",
            input: "nums = [3,2,4], target = 6",
            output: "[1,2]"
        },{
            ex: "Example 3",
            input: "nums = [3,3], target = 6",
            output: "[0,1]"
        }],
        difficulty: "Easy",
        acceptance: "48.8%",
        tags: "Array, Hashtable"

    },
    2: {
        title: <h2>2. Add Two Numbers</h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>You are given two <b>non-empty</b> inked lists representing two non-negative integers. The digits are stored in reverse
                <b>reverse order</b> , and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.</li>
            <br />
            <li>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</li>

        </ul>,
        example: [{
            ex: "Example 1",
            input: "l1 = [2,4,3], l2 = [5,6,4]",
            output: "[7,0,8]"
        },
        {
            ex: "Example 2",
            input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
            output: "[8,9,9,9,0,0,0,1]"
        }],
        difficulty: "Medium",
        acceptance: "32.7%",
        tags: "linked list, math, recursion"

    },



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    3: {
        title: <h2>3. Longest Substring Without Repeating Characters</h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a string  <i>s</i> find the length of the <b>longest substring</b> without repeating characters.</li>

        </ul>,
        example: [{
            ex: "Example 1",
            input: "s = 'abcabcbb'",
            output: "3"
        },
        {
            ex: "Example 2",
            input: "s = 'bbbbb'",
            output: "1"
        },
        {
            ex: "Example 3",
            input: "s = 'pwwkew'",
            output: "3"
        }],
        difficulty: "Medium",
        acceptance: "33.7%",
        tags: "hash table, linked list, sliding window"
    },


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    4: {
        title: <h2>4. Median of Two Sorted Arrays
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given two sorted arrays <i>nums1</i> and <i>nums2</i> of size <i>m</i> and <i>n</i> respectively, return <b>the median</b> of the two sorted arrays.</li>
            <li>The overall run time complexity should be <i>O(log (m+n)).</i></li>

        </ul>,
        example: [{
            ex: "Example 1",
            input: "nums1 = [1,3], nums2 = [2]",
            output: "2.00000"
        },
        {
            ex: "Example 2",
            input: "nums1 = [1,2], nums2 = [3,4]",
            output: "2.5000"
        }],
        difficulty: "Hard",
        acceptance: "34.87%",
        tags: "Array, binary search, divide and conquer"
    },




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    5: {
        title: <h2>5. Longest Palindromic Substring

        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a string <i>s</i>, return the longest palindromic substring in <i>s</i></li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: '"bab"',
            output: "2.00000"
        },
        {
            ex: "Example 2",
            input: 's = "cbbd"',
            output: "bb"
        }],
        difficulty: "Medium",
        acceptance: "31.7%",
        tags: "string, dynamic programming"
    },



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    6: {
        title: <h2>6. Zigzag Conversion</h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>The string <i>"PAYPALISHIRING"</i>is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</li>
            <li>And then read line by line: <i>"PAHNAPLSIIGYIR"</i></li>
            <li>Write the code that will take a string and make this conversion given a number of rows:

            </li>
            <li><i>string convert(string s, int numRows);
            </i></li>
        </ul>,
        example: [{
            ex: 'Example 1',
            input: "s = 'PAYPALISHIRING', numRows = 3",
            output: '"PAHNAPLSIIGYIR"'
        },
        {
            ex: "Example 2",
            input: 's = "PAYPALISHIRING", numRows = 4',
            output: '"PINALSIGYAHRPI"'
        },
        {
            ex: "Example 3",
            input: 's = "A", numRows = 1',
            output: '"A"'
        }],
        difficulty: "Medium",
        acceptance: "41.7%",
        tags: "string, dynamic programming"
    },


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    7: {
        title: <h2>7. Reverse Integer        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a signed 32-bit integer <i>x</i>, return <i>x</i> with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range <i> [-231, 231 - 1]</i>, then return 0.</li>
            <li><b>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</b></li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: "x = 123",
            output: '321'
        },
        {
            ex: "Example 2",
            input: 'x = -123',
            output: '-321'
        },
        {
            ex: "Example 3",
            input: 'x=210',
            output: '12'
        }],
        difficulty: "Medium",
        acceptance: "26.8%",
        tags: "string, dynamic programming"
    },


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    8: {
        title: <h2>8. String to Integer (atoi)
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Implement the <i> myAtoi(string s) </i> function, which converts a string to a 32-bit signed integer (similar to C/C++ atoi function).</li>
            <li>The algorithm for <i> myAtoi(string s) </i> is as follows:</li>
            <ol>
                <li>Read in and ignore any leading whitespace.
                </li>
                <li>Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
                </li>
                <li>Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
                </li>
                <li>Convert these digits into an integer (i.e. <i> "123" - 123, "0032" - 32 </i>). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
                </li>
                <li>If the integer is out of the 32-bit signed integer range <i>[-231, 231 - 1]</i>, then clamp the integer so that it remains in the range. Specifically, integers less than <i>-231</i> should be clamped to <i>-231</i>, and integers greater than <i>231 - 1</i> should be clamped to <i>231 - 1</i>.
                </li>
                <li>Return the integer as the final result.
                </li>
            </ol>
            <li><b>Note:</b></li>
            <ul>
                <li>Only the space character ' ' is considered a whitespace character.
                </li>
                <li><b>Do not ignore </b> any characters other than the leading whitespace or the rest of the string after the digits.
                </li>
            </ul>
        </ul>,
        example: [{
            ex: 'Example 1',
            input: 's = "42"',
            output: '42'
        },
        {
            ex: "Example 2",
            input: 's = -42',
            output: '-42'
        },
        {
            ex: "Example 3",
            input: 's = "4193 with words"',
            output: '4193'
        }],
        difficulty: "Medium",
        acceptance: "16.5%",
        tags: "string"
    },



    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    9: {
        title: <h2>7. Reverse Integer        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a signed 32-bit integer <i>x</i>, return <i>x</i> with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range <i> [-231, 231 - 1]</i>, then return 0.</li>
            <li><b>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</b></li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: "x = 123",
            output: '321'
        },
        {
            ex: "Example 2",
            input: 'x = -123',
            output: '-321'
        },
        {
            ex: "Example 3",
            input: 'x=210',
            output: '12'
        }],
        difficulty: "Medium",
        acceptance: "26.8%",
        tags: "string, dynamic programming"
    },




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    10: {
        title: <h2>10. Regular Expression Matching            </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given an input string <i>s</i> and a pattern <i>p</i>, implement regular expression matching with support for <i>'.'</i> and <i>'*'</i> where:</li>
            <li><ul>
                <li>'.' Matches any single character.​​​​</li>
                <li>'*' Matches zero or more of the preceding element.</li>

            </ul></li>
            <li>The matching should cover the <b>entire</b> input string (not partial).</li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 's = "aa", p = "a"',
            output: 'false'
        },
        {
            ex: "Example 2",
            input: 's = "aa", p = "a*"',
            output: 'true'
        },
        {
            ex: "Example 3",
            input: 's = "ab", p = ".*"',
            output: 'true'
        }],
        difficulty: "Hard",
        acceptance: "28.3%",
        tags: "Array, two pointers, binary search"
    },


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    11: {
        title: <h2>11. Container With Most Water
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>You are given an integer array <i>height</i> of length n. There are n vertical lines drawn such that the two endpoints of the ith line are <i>(i, 0)</i> and <i>(i, height[i])</i>.</li>
            <li>Find two lines that together with the x-axis form a container, such that the container contains the most water.</li>
            <li>Return the maximum amount of water a container can store.</li>
            <li>Notice that you may not slant the container.</li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: "height = [1,8,6,2,5,4,8,3,7]",
            output: '49'
        },
        {
            ex: "Example 2",
            input: 'height = [1,1]',
            output: '1'
        }],
        difficulty: "Medium",
        acceptance: "54.00%",
        tags: "Array, two pointers, Greedy"
    },




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    12: {
        title: <h2>12. Longest Common Prefix
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Write a function to find the longest common prefix string amongst an array of strings.</li>
            <li>If there is no common prefix, return an empty string "".

            </li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 'strs = ["flower","flow","flight"]',
            output: 'fl'
        },
        {
            ex: "Example 2",
            input: 'strs = ["dog","racecar","car"]',
            output: ""
        }],
        difficulty: "Easy",
        acceptance: "39.70%",
        tags: "String"
    },




    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    13: {
        title: <h2>12. Longest Common Prefix
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given an integer array nums, return all the triplets <i>[nums[i], nums[j], nums[k]]</i> such that <i>i != j, i != k, and j != k</i>, and <i>nums[i] + nums[j] + nums[k] == 0</i>.</li>
            <li>Notice that the solution set must not contain duplicate triplets.</li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 'nums = [-1,0,1,2,-1,-4]',
            output: '[[-1,-1,2],[-1,0,1]]'
        },
        {
            ex: "Example 2",
            input: 'nums = []',
            output: "[]"
        }],
        difficulty: "Medium",
        acceptance: "31.30%",
        tags: "Array, Two pointers, Sorting"
    },





    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    14: {
        title: <h2>13. 3Sum Closest
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given an integer array <i>nums</i> of length <i>n</i> and an integer target, find three integers in <i>nums</i> such that the <i>sum</i> is closest to target.

            </li>
            <li>Return the sum of the three integers.

            </li>

            <li>You may assume that each input would have exactly one solution.

            </li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 'nums = [-1,2,1,-4], target = 1',
            output: '2'
        },
        {
            ex: "Example 2",
            input: 'nums = [0,0,0], target = 1',
            output: "0"
        }],
        difficulty: "Medium",
        acceptance: "47.30%",
        tags: "Array, Two pointers, Sorting"
    },





    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    15: {
        title: <h2>15. 4Sum
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given an array nums of <i>n</i> integers, return an array of all the unique quadruplets <i>[nums[a], nums[b], nums[c], nums[d]]</i> such that:

</li>
            <li><ul>
                <li>0 less than or equal to (a, b, c, d) less than n</li>
                <li><i>a, b, c, and d</i> are <b>distinct</b>.</li>
                <li><i>nums[a] + nums[b] + nums[c] + nums[d] == target
</i></li>
            </ul>

            </li>

            <li>You may return the answer in <i>any order</i>.

            </li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 'nums = [1,0,-1,0,-2,2], target = 0',
            output: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]'
        },
        {
            ex: "Example 2",
            input: ' nums = [2,2,2,2,2], target = 8',
            output: "[[2,2,2,2]]"
        }],
        difficulty: "Medium",
        acceptance: "37.40%",
        tags: "Array, Two pointers, Sorting"
    },






    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    16: {
        title: <h2>16. Valid Parentheses
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a string s containing just the characters <i>'(', ')', '{' , '}', '[' and ']'</i>, determine if the input string is valid.</li>
            <li>An input string is valid if:

</li>
            <li><ol>
                <li>Open brackets must be closed by the same type of brackets.
</li>
                <li>Open brackets must be closed in the correct order.</li>
            </ol>

            </li>

            <li>You may return the answer in <i>any order</i>.

            </li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 's = "()"',
            output: 'true'
        },
        {
            ex: "Example 2",
            input: 's = "()[]{}"',
            output: "true"
        }],
        difficulty: "Medium",
        acceptance: "37.40%",
        tags: "Array, Two pointers, Sorting"
    },






    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    17: {
        title: <h2>17. Generate Parentheses
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

</li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 'n = 3',
            output: '["((()))","(()())","(())()","()(())","()()()"]'
        },
        {
            ex: "Example 2",
            input: 'n = 1',
            output: '["()"]'
        }],
        difficulty: "Medium",
        acceptance: "70.50%",
        tags: "String, Dynamic programming, Backtracking"
    },





    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    18: {
        title: <h2>18.  Longest Valid Parentheses
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.


</li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 's = "(()"',
            output: 's = "(()"'
        },
        {
            ex: "Example 2",
            input: "s=')()())'",
            output: '4'
        }],
        difficulty: "Hard",
        acceptance: "32.30%",
        tags: "String, Dynamic programming, Stack"
    },






    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    19: {
        title: <h2>19. Search Insert Position
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


</li>
<li>You must write an algorithm with <i>O(log n)</i> runtime complexity.

</li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 'nums = [1,3,5,6], target = 5',
            output: '2'
        },
        {
            ex: "Example 2",
            input: "nums = [1,3,5,6], target = 2",
            output: '1'
        }],
        difficulty: "Hard",
        acceptance: "32.30%",
        tags: "Array, binary search"
    },








    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    20: {
        title: <h2>20. Search Insert Position
        </h2>,
        description: <ul style={{ listStyle: 'none' }}>
            <li>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


</li>
<li>You must write an algorithm with <i>O(log n)</i> runtime complexity.

</li>

        </ul>,
        example: [{
            ex: 'Example 1',
            input: 'nums = [1,3,5,6], target = 5',
            output: '2'
        },
        {
            ex: "Example 2",
            input: "nums = [1,3,5,6], target = 2",
            output: '1'
        }],
        difficulty: "Hard",
        acceptance: "32.30%",
        tags: "Array, binary search"
    },





}

export default data;
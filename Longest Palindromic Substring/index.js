/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 *
 * Input: "cbbd"
 * Output: "bb"
 */

/**
 * @param {string} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str_x = String(x);
    const length = str_x.length;
    const loop_times = length / 2 + 1;

    if (x.length === 1) return true;

    for (let i = 0 ; i < loop_times ; i++) {
        if (str_x[i] !== str_x[length - i - 1]) return false;
    }

    return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var s_length = s.length;
    var run_times = s_length * 2;
    var palindrome = '';

    if (!s) return '';

    for (var i = 0; i < run_times; i++) {
        let tail = ~~(i / 2) + 1;
        let header = (i % 2) ? tail - 2 : tail -1;

        let substring = s.slice(header, tail);

            // console.log("TCL: longestPalindrome -> substring",header, tail, substring);
        while (header >= 0 && tail <= s_length && isPalindrome(substring) ) {
            if (substring.length > palindrome.length) palindrome = substring;

            header--;
            tail++;
            substring = s.slice(header, tail);

            // console.log("TCL: [while] longestPalindrome -> substring",header, tail, substring);
        }

        console.log(`TCL: [for] longestPalindrome ->${i}. header. tail`, header, tail, s.slice(header, tail));

    }

    return palindrome;
};

console.log('--->', longestPalindrome('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'));
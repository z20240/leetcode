/**
 * Roman to Integer
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
 *
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 *
 * I can be placed before V (5) and X (10) to make 4 and 9.
 * X can be placed before L (50) and C (100) to make 40 and 90.
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 *
 * Example 1:
 *
 * Input: "III"
 * Output: 3
 * Example 2:
 *
 * Input: "IV"
 * Output: 4
 * Example 3:
 *
 * Input: "IX"
 * Output: 9
 * Example 4:
 *
 * Input: "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * Example 5:
 *
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const char_num_map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0, pre = 0;

    for (let i = 0 ; i < s.length ; i++) {
        const n = char_num_map[ s[i] ];

        if (n === 5 && pre === 1) sum += (n - 2*pre);
        else if (n === 50 && pre === 10) sum += (n - 2*pre);
        else if (n === 500 && pre === 100) sum += (n - 2*pre);
        else if (n === 10 && pre === 1) sum += (n - 2*pre);
        else if (n === 100 && pre === 10) sum += (n - 2*pre);
        else if (n === 1000 && pre === 100) sum += (n - 2*pre);
        else sum += n;

        pre = n;
    }

    return sum
};


var romanToInt_v2 = function(s) {
    const char_num_map = {
        I: 1,   IV: 4,
        V: 5,   IX: 9,
        X: 10,  XL: 40,
        L: 50,  XC: 90,
        C: 100, CD: 400,
        D: 500, CM: 900,
        M: 1000,
    };

    const s_ary = s.match(/I(V|X)?|V|X(L|C)?|L|C(D|M)?|D|M/g);

    return s_ary.reduce((total, ch) => total + char_num_map[ch], 0);
};

console.log(romanToInt("IX"));
/**
 * Given a string comprised of lowercase letters in the range ascii[a-z],
 *
 * find the length shortest substring that contains at least one of each of the letters in the string.prototype.
 *
 * ##Example
 *
 * givenString = `dabbcabcd`
 *
 * The list of all characters in the string is [a, b, c, d]
 *
 * Tow of the substrings that contain all letters are `dabbc` and `abcd`
 *
 * The shortest substring that contains all of the characters is 4 characters long
 *
 * Return 4 as the answer.
 *
 * ##Function
 *
 * Complete the function shortestSubstring in the editor below.
 *
 * ```
 *     ShortestSubstring has the following parameter(s):
 *         string givenString: the given string
 *     Returns:
 *         int: the length of the shortest substring that contains at least one of each character in givenString.
 * ```
 *
 * ## Constraints
 * - 1 <= size of givenString <= 100000
 * - each givenString[i] in the set ascii[a-z]
 */

/**
 * @param {string} s
 */
const shortestSubstring = (s) => {

    const charList = Array.from(new Set(s));

    let minLength = Infinity;

    const checkAllInList = s => {
        for (const c of charList) {
            if (!s.includes(c)) return false;
        }
        return true;
    }

    for (let i = 0 ; i < s.length - 1 ; i++) {
        for (let j = i + 1 ; j < s.length+1 ; j++) {
            const sub = s.slice(i, j)

            if (!checkAllInList(sub)) continue;

            if (sub.length < minLength) minLength = sub.length;
        }
    }

    return minLength;
}

module.exports.shortestSubstring = shortestSubstring
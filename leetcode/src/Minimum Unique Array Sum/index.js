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
 * @param {number[]} a
 */
const getMinimunUniqueSum = (a) => {

    const uniqueMap = /** @type { {[number: number]: number} } */({})

    for (const n of a) {
        uniqueMap[n] = 1;
    }

    return Object.keys(uniqueMap).reduce((p, c) => p + Number(c), 0)
}

module.exports.getMinimunUniqueSum = getMinimunUniqueSum
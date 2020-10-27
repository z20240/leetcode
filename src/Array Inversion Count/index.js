/**
 * An array A consisting of N integers is given. An inversion is a pair of indexes (P, Q) such that P < Q and A[Q] < A[P].
 *
 * Write a function:
 *
 * function solution(A);
 *
 * that computes the number of inversions in A, or returns −1 if it exceeds 1,000,000,000.
 *
 * For example, in the following array:
 *
 *  A[0] = -1 A[1] = 6 A[2] = 3
 *  A[3] =  4 A[4] = 7 A[5] = 4
 * there are four inversions:
 *
 *    (1,2)  (1,3)  (1,5)  (4,5)
 * so the function should return 4.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [0..100,000];
 * each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 *
 * @format
 **/

function solution(A) {
    let count = 0;
    /**
     *
     * @param {number[]} ary
     */
    const mergeSort = (ary) => {
        if (ary[0] >= 1000000000) return (count = -1);

        if (ary.length <= 1) return ary;

        const mid = ~~(ary.length / 2);

        let left_list = mergeSort(ary.slice(0, mid));

        let right_list = mergeSort(ary.slice(mid, ary.length));

        let temp = [];
        while (left_list.length || right_list.length) {
            if (!left_list.length || !right_list.length) {
                return [...temp, ...left_list, ...right_list];
            } else if (left_list[0] > right_list[0]) {
                count++;
                temp.push(right_list.shift());
            } else {
                temp.push(left_list.shift());
            }
        }

        return temp;
    };

    mergeSort(A);
    return count;
}

module.exports = solution;

/**
 * An array A consisting of N integers is given. An inversion is a pair of indexes (P, Q) such that P < Q and A[Q] < A[P].
 *
 * Write a function:
 *
 * function a(A);
 *
 * that computes the number of inversions in A, or returns −1 if it exceeds 1,000,000,000.
 *
 * For example, in the following array:
 *
 *  A[0] = -1 A[1] = 6 A[2] = 3
 *  A[3] =  4 A[4] = 7 A[5] = 4
 *
 *  there are four inversions:
 *
 *    (1,2)  (1,3)  (1,5)  (4,5)
 *
 * so the function should return 4.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [0..100,000];
 * each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 */

const solution = A => {

    const count = 0;

    const mergeSortWithCount = ary => {

        const left = 0, right = 0, mid = ary.length / 2;

        const list_left = solution(ary.slice(0, mid));
        const list_right = solution(ary.slice(mid + 1, ary.length));

        let temp = [];
        while (list_left.length || list_right.length) {
            // if (list_left[0] > list_right[0])
        }

        return temp;
    }

    mergeSortWithCount(A)

    return count;

}

module.exports = solution;
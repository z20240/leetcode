/** @format */

function getMinimumUniqueSum(arr) {
    // Write your code here

    const sets = {};

    const ary = [];

    for (let num of arr) {
        while (ary[num]) num++;

        sets[num] = true;

        ary[num] = true;
    }

    return Object.keys(sets).reduce((p, c) => p + Number(c), 0);
}

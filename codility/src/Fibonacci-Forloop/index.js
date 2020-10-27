/** @format */

const fibonacci = (n) => {
    if (n === 0) return 0;

    var f_ary = [1, 1];

    for (let i = 2; i < n; i++) f_ary[i] = f_ary[i - 1] + f_ary[i - 2];

    return f_ary[n - 1];
};

module.exports.fibonacci = fibonacci;

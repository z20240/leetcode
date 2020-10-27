/** @format */

const ArrayInversionCount = require('./index');

it(`Test: [-1, 6, 3, 4, 7, 4]`, function () {
    expect(ArrayInversionCount([-1, 6, 3, 4, 7, 4])).toBe(4);
});

it(`Test: [3, 11, 8, 10, 3]`, function () {
    expect(ArrayInversionCount([3, 11, 8, 10, 3])).toBe(5);
});

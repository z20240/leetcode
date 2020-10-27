/** @format */

const solution = require('./index');

it(`test n=1041=10000010001_2`, function () {
    expect(solution(1041)).toBe(5);
});

it(`test n=15=1111_2`, function () {
    expect(solution(15)).toBe(0);
});

it(`test n=32=100000_2`, function () {
    expect(solution(32)).toBe(0);
});

it(`test n=5=101_2`, function () {
    expect(solution(5)).toBe(1);
});

it(`test n=2147483647=2**31-1`, function () {
    expect(solution(2147483647)).toBe(0);
});

it(`test 6=110_2`, function () {
    expect(solution(6)).toBe(0);
});

it(`test 328=101001000_2`, function () {
    expect(solution(328)).toBe(2);
});

it(`test n=6291457=11000000000000000000001_2`, function () {
    expect(solution(6291457)).toBe(20);
});

it(`test n=66561=10000010000000001_2`, function () {
    expect(solution(66561)).toBe(9);
});

it(`test n=1610612737=1100000000000000000000000000001_2`, function () {
    expect(solution(1610612737)).toBe(28);
});

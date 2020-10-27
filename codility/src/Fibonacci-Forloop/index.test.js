/** @format */

const { fibonacci } = require('./index');

it('Test when n = 0', function () {
    expect(fibonacci(0)).toBe(0);
});

it('Test when n = 1', function () {
    expect(fibonacci(1)).toBe(1);
});

it('Test when n = 2', function () {
    expect(fibonacci(2)).toBe(1);
});

it('Test when n = 5', function () {
    expect(fibonacci(5)).toBe(5);
});

it('Test when n = 9', function () {
    expect(fibonacci(9)).toBe(34);
});

/** @format */

const { numDuplicates } = require('./index');

it('test general case: name = [ball, bat, glove, glove, glove] ; price = [2, 3, 1, 2, 1] ; weight = [2, 5, 1, 1, 1]', function () {
    const name = [`ball`, `bat`, `glove`, `glove`, `glove`];
    const price = [2, 3, 1, 2, 1];
    const weight = [2, 5, 1, 1, 1];
    expect(numDuplicates(name, price, weight)).toBe(1);
});

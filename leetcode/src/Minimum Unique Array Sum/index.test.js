const { getMinimunUniqueSum } = require('./index')

it('test general case: [3, 2, 1, 4, 7]', function() {
    expect(getMinimunUniqueSum([3, 2, 1, 4, 7])).toBe(17)
})


it('test general case: [2, 2, 1]', function() {
    expect(getMinimunUniqueSum([2, 2, 1])).toBe(3)
})
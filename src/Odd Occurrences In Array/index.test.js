

const { solution } = require('./index')

it('test general case: [9, 3, 9, 3, 9, 7, 9]', function() {
    expect(solution([9, 3, 9, 3, 9, 7, 9])).toBe(7)
})


it('test general case: [1, 1, 2, 2, 5]', function() {
    expect(solution([1, 1, 2, 2, 5])).toBe(5)
})
const { solution } = require('./index')

it('test general case: [3, 8, 9, 7, 6]', function() {
    expect(solution([3, 8, 9, 7, 6], 3)).toEqual([9, 7, 6, 3, 8])
})


it('test small functional tests, K >= N: [3, 8, 9, 7, 6]', function() {
    expect(solution([1, 1, 2, 3, 5], 7)).toEqual([3, 5, 1, 1, 2])
})
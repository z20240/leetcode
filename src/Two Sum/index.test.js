const twoSum = require('./');

it('twoSum [3,2,3] should be return [0, 2]', function() {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2])
})


it('twoSum [2, 7, 11, 15] should be return [0, 1]', function() {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})
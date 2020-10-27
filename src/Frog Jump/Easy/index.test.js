const { solution } = require('./index')

it('test general case: X = 10, Y = 85, D = 30', function() {
    expect(solution(10, 85, 30)).toBe(3)
})
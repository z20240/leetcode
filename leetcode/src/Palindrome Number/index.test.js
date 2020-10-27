const isPalindrome = require('./');

it('abba', function() {
    expect(isPalindrome('abba')).toBe(true);
});


it('ababd', function() {
    expect(isPalindrome('ababd')).toBe(false);
});

it('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', function() {
    expect(isPalindrome('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')).toBe(true);
});
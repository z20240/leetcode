const Utils = require('../utils');
const createList = Utils.createList;
const mergeTwoLists = require('./');

it('input = [1,2,4], [1,3,4] ; output = [1,1,2,3,4,4]', function() {

    const l1 = createList(null, [1,2,4]);
    const l2 = createList(null, [1,3,4]);

    expect(JSON.stringify(mergeTwoLists(l1, l2).toArray())).toBe('[1,1,2,3,4,4]');
});


it('input = [1], [1] ; output = [1,1]', function() {

    const l1 = createList(null, [1]);
    const l2 = createList(null, [1]);

    expect(JSON.stringify(mergeTwoLists(l1, l2).toArray())).toBe('[1,1]');
});

it('input = [1], [3,4] ; output = [1,3,4]', function() {

    const l1 = createList(null, [1]);
    const l2 = createList(null, [3,4]);

    expect(JSON.stringify(mergeTwoLists(l1, l2).toArray())).toBe('[1,3,4]');
});

it('input = [3,4], [1,2] ; output = [1,2,3,4]', function() {

    const l1 = createList(null, [3,4]);
    const l2 = createList(null, [1,2]);

    expect(JSON.stringify(mergeTwoLists(l1, l2).toArray())).toBe('[1,2,3,4]');
});

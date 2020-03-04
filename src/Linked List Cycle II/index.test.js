const Utils = require('../utils');
const createCycleList = Utils.createCycleList;
const createList = Utils.createList;
const ListNode = Utils.ListNode;
const detectCycle = require('./');

it('head = [3,2,0,-4], pos = 1', function() {

    const head = createCycleList(null, [3,2,0,-4], 1);

    expect(detectCycle(head).val).toBe(2);
});


it('head = [1, 2], pos = 0', function() {

    const head = createCycleList(null, [1, 2], 0);

    expect(detectCycle(head).val).toBe(1);
});

it('head = [1], pos = -1', function() {

    const head = createList(null, [1]);

    expect(detectCycle(head)).toBe(null);
});

it('head = [1,2], pos = -1', function() {

    const head = createList(null, [1,2]);

    expect(detectCycle(head)).toBe(null);
});

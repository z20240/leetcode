const { addTwoNumbers, ListNode } = require('./');


var findTail = (list) => {
    let n;
    for (n = list ; n.next ; n = n.next)
        ;
    return n;
}

var createList = (list, ary) => {

    const arr = [...ary];

    if (arr.length === 0) return list;

    const node = new ListNode(arr.shift());

    if (!list) return createList(node, arr);

    findTail(list).next = node;

    return createList(list, arr);
}

const case1 = `Case1:
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
`;
it(case1, function() {
    const l1 = createList(null, [2,4,3]);
    const l2 = createList(null, [5,6,4]);

    const answer = createList(null, [7,0,8]);

    expect( JSON.stringify(addTwoNumbers(l1, l2)) ).toBe( JSON.stringify(answer) );
});


const case2 = `Case2:
    Input: [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] + [5,6,4]
    Output: [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
`;
it(case2, function() {
    const l1 = createList(null, [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
    const l2 = createList(null, [5,6,4]);

    const answer = createList(null, [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);

    expect( JSON.stringify(addTwoNumbers(l1, l2)) ).toBe( JSON.stringify(answer) );
});

/**
 * Definition for singly-linked list.
 */
class ListNode {

    constructor(val) {
        this.val = val;
        this.next = null;
    }

    toJSON() {
        return {val: this.val, next: this.next}
    }

    toArray() {
        const ary = []
        for (let p = this ; p ; p = p ? p.next : p) {
            ary.push(p.val);
        }
        return ary;
    }
}

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

var createCycleList = (list, ary, cycle_pos) => {
    const l = createList(list, ary);

    let p = null;

    for (let t = l, i = 0; t ; t = t ? t.next : t, i++) {

        if (i === cycle_pos) p = t;

        if (!t.next) {
            t.next = p;
            break;
        }
    }

    return l;
}

module.exports.ListNode = ListNode;
module.exports.createList = createList;
module.exports.createCycleList = createCycleList;
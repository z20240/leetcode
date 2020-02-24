// @ts-nocheck
/**
 * You are given two non-empty linked lists representing two non-negative integers.
 *
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 *
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

 /**
 * @desc Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = '', s2 = '';
    for (let n1 = l1, n2 = l2; n1 || n2 ; (n1 = n1 ? n1.next : n1), (n2 = n2 ? n2.next : n2)) {
        if (n1) s1 += n1.val;
        if (n2) s2 += n2.val;
    }

    const ls1 = s1.length, ls2 = s2.length;
    const MAX_LENGTH = Math.max(ls1, ls2);
    let n1 = 0n, n2 = 0n;


    for (let i = MAX_LENGTH-1; i >= 0 ; i--) {
        n1 += BigInt(s1[i] || 0) * (10n**BigInt(i));
        n2 += BigInt(s2[i] || 0) * (10n**BigInt(i));
    }

    const sa = String(n1 + n2);
    const lsa = sa.length;
    let res = null, p = null;

    for (let i = lsa-1 ; i >= 0 ; i--) {

        const v = new ListNode(Number(sa[i]));

        if (!res) {
            res = v;
            p = res;
            continue;
        }

        p.next = v;
        p = p.next;
    }

    return res
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers_v2 = function(l1, l2) {

    let head = null, p = null;

    let carry = 0;

    for (let i = l1, j= l2 ; i || j ; (i = i ? i.next : i), (j = j ? j.next : j) ) {

        let vi = i ? i.val : 0;
        let vj = j ? j.val : 0;

        let val = carry + vi + vj;

        carry = Number(vi + vj >= 10);

        carry && (val -= 10);

        n = new ListNode(val);

        if (!head) {
            head = p = n;
            continue;
        }

        p = p.next = n;
    }

    return head
};

module.exports.ListNode = ListNode;
module.exports.addTwoNumbers = addTwoNumbers;
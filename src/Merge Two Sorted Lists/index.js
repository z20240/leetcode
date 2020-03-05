/**
 * 21. Merge Two Sorted Lists
 * Easy
 *
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4,
 *        1->3->4
 * Output: 1->1->2->3->4->4
 */

/**
 * @param {import('../utils').ListNode} l1
 * @param {import('../utils').ListNode} l2
 * @return {import('../utils').ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let h = null, bl = null, il = null;

    if (!l1) return l2;

    if (!l2) return l1;

    if (!l1 && !l2) return null;

    l1.val > l2.val ? (bl = l2) && (il = l1) : (bl = l1) && (il = l2);
    h = bl;

    while ( il ) {

        while ( bl && bl.next && bl.next.val <= il.val ) bl = bl.next;

        if (bl && !bl.next) { // tail
            bl.next = il;
            return h;
        }

        if (bl && bl.next) { // body
            const t = il.next;
            il.next = bl.next;
            bl.next = il;
            il = t;
        }

    }

    return h;
};

module.exports = mergeTwoLists;
/**
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 * To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
 *
 * Note: Do not modify the linked list.
 *
 *
 *
 * Example 1:
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: ListNode { val: 2, next: {ListNode} }
 * Explanation: There is a cycle in the linked list, where tail connects to the second node.
 *
 * [3] -> [2] -> [0] -> [-4] -┐
 *         └------------------┘
 *
 * Example 2:
 *
 * Input: head = [1,2], pos = 0
 * Output: ListNode { val: 1, next: {ListNode} }
 * Explanation: There is a cycle in the linked list, where tail connects to the first node.
 *
 * [1] -> [2] -┐
 *  └----------┘
 *
 * Example 3:
 *
 * Input: head = [1], pos = -1
 * Output: null
 * Explanation: There is no cycle in the linked list.
 *
 * [1]
 *
 * ## Follow-up:
 * ## Can you solve it without using extra space?
 *
 */

 /**
 * Definition for singly-linked list.
 */


/**
 * @param { import('../utils').ListNode } head
 * @return { import('../utils').ListNode }
 */
const detectCycle = function(head) {

    /** This is a hare tortoise algo. */

    let t = head, h = head;

    do {
        t && (t = t.next);
        (h && h.next) && (h = h.next.next);
    } while (h && t && t != h);

    console.log(h);
    if (!h || !h.next) return null;

    h = head;

    while (h != t) {
        h = h.next;
        t = t.next;
    }

    return h;
};

module.exports = detectCycle
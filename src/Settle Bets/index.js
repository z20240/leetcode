/*
Settling debts

You have N people (friends), they owe each other money. In total there are M debts that are owed between these people.
N = 3 (a, b, c).
M = 3
a owed b $3
b owed c $3
c owed a $5

In this case, c only needs to pay a $2 and the debts will be settled amongst all 3 people.
*/

/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/


/*
Old Content below(Python 2):

# Libraries Included:
# Numpy, Scipy, Scikit, Pandas

print "Hello, world!"
*/

/*
A -> B $3
B -> C $3
C -> B $3
C -> D $5
----------
A -$3 *
B +$3
C -$5 *
D +$5

#1:
A -> B $3
C -> B $2

#2:
A -> C $3
C -> B $5
*/

/*
A -> B $3
B -> A $2

A -> B $3 == A -> B $2 and A -> B $1
B -> C $2 == B -> C $1 and B -> C $1
C -> A $1 ==               C -> A $1
A -$2
B +$1
C +$1
------- +
   $0
*/


class Node {
    constructor(name, value, owed) {
        this.name = ''; // owed name
        this.value = 0; // money
        this.owed = []; // this owed's owed
    }
}

function SettlingDebts(debts) {

    let head = debts;
    let people = [];

    while() {
        if (!debts) break;

        for (let i = 0 ; i < debts.owed.length ; i++) {
            // check if owd has their owed
            const owed = debts[i];
            const owed_value = owed.value;

            // check if has owed
            if (owed.owed.length) {

                const newOwedList = [];

                owed.owed.forEach(o => {

                    // circle detection
                    if (detection()) return;

                    if (o.value > owed_value) return;

                    const tr_owed = new Node(owed.name, o.value, o.owed);

                    owed_value -= o.value;

                    newOwedList.push(tr_owed);
                });


            }
        }
    }

}

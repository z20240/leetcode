/** @format */

/**
 *
 * Connected Groups
 *
 */

function countGroups(related) {
    // Write your code here

    let count = 0;
    const visited = [];

    const isVisited = (x) => visited.includes(x);

    const findFriend = (i) => {
        for (let j = 0; j < related.length; j++) {
            if (isVisited(j)) continue;
            console.log('related[', i, '][', j, '] === ', related[i][j], visited, isVisited(j));
            if (related[i][j] === 1) {
                visited.push(j);
                console.log('---> need push', visited);
                findFriend(j);
            }
        }
    };

    for (let i = 0; i < related.length; i++) {
        console.log('i =>', i, 'visited:', visited);
        if (isVisited(i)) continue;
        visited.push(i);
        findFriend(i);
        count++;
    }

    return count;
}

console.log(
    countGroups([
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
    ])
);

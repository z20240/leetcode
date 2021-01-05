/**
 * You are given a complex list of `n`, products, each with a name, price, and weight.
 *
 * Find out how many duplicate products are present within the list.
 *
 * Duplicate products contain identical parameters for all fields in the list (i.e. name, price and weight)
 *
 * Example:
 *
 * There are n = 5 products with attributes listed in three arrays, aligned by index.
 *
 * name = [ball, bat, glove, glove, glove]
 * price = [2, 3, 1, 2, 1]
 * weight = [2, 5, 1, 1, 1]
 *
 * A complete item description for item 0: (name[0], price[0], weight[0]) is (ball, 2, 2)
 *
 * Name  | Price | Weight |
 * -----------------------
 * ball  |   2   |    2
 * bat   |   2   |    5
 * glove |   1   |    1
 * glove |   2   |    1
 * glove |   1   |    1
 *
 * The first two items are unique.
 * The two gloves at indices 2 and 4 are equal in all three attributes so there is a duplicate.
 * The last glove at index 3 has a different price from the other two, so it is not duplicate.
 *
 * There is 1 duplicate item in the original list.
 *
 * @format
 */

/**
 *
 * @param {string[]} names
 * @param {number[]} prices
 * @param {number[]} weights test *aaa*
 */
const numDuplicates = (names, prices, weights) => {
    const duplicateMap = /** @type { {[name_price_weight: string]: number} } */ ({});

    const NUM_OF_ITEMS = names.length;

    let duplicateItems = 0;

    for (let i = 0; i < NUM_OF_ITEMS; i++) {
        const key = `${names[i]}_${prices[i]}_${weights[i]}`;

        if (duplicateMap[key]) duplicateItems++;
        else duplicateMap[key] = 1;
    }

    return duplicateItems;
};

module.exports.numDuplicates = numDuplicates;

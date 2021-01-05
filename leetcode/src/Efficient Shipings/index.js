/** @format */

function getMaxUnits(boxes, unitsPerBox, truckSize) {
    // Write your code here

    console.log(boxes, unitsPerBox, truckSize);

    const numOfItems = boxes.length;

    const itemPairs = [];

    for (let i = 0; i < numOfItems; i++) {
        itemPairs.push({
            box: boxes[i],
            unit: unitsPerBox[i],
        });
    }

    // itemPairs.sort((a, b) => Number(b.unit) - Number(a.unit))

    console.log('itemPairs', itemPairs);

    let leftSize = truckSize;
    let holdUnit = 0;

    while (leftSize > 0 && itemPairs.length) {
        itemPairs.sort((a, b) => Number(b.unit) - Number(a.unit));

        const product = itemPairs[0];

        const placeBox = Math.min(leftSize, product.box);

        leftSize -= placeBox;

        holdUnit += placeBox * product.unit;

        product.box -= placeBox;

        if (product.box <= 0) itemPairs.shift();
    }

    return holdUnit;
}

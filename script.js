function extractValue(arr, prop) {

    // extract value from property
    let extractedValue = arr.map(item => item[prop]);

    return extractedValue;

}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

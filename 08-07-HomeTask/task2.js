const convertKebabToCamel = function (string) {
    if (!string || typeof string !== 'string') return 'Incorrect data';

    let words = string.split('-');
    let result = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i][0].toUpperCase();
        for (let j = 1; j < words[i].length; j++) word += words[i][j];
        result += word;
    }

    return result;
}

// console.log(convertKebabToCamel());
// console.log(convertKebabToCamel(undefined));
// console.log(convertKebabToCamel([]));
// console.log(convertKebabToCamel({}));
// console.log(convertKebabToCamel({}, []));
// console.log(convertKebabToCamel(['list-style-type', 'list-style-type']));
// console.log(convertKebabToCamel(1234));
// console.log(convertKebabToCamel('list-123-type'));
// console.log(convertKebabToCamel('list-style-type' + 'background-color'));
console.log(convertKebabToCamel('list-style-type'));
console.log(convertKebabToCamel('background-color'));
console.log(convertKebabToCamel('a-s-d-f-g-h-j'));

const averageNumbersOfArray = function (array) {
    if (!isNaN(array) || !Array.isArray(array)) return 'Incorrect data';

    let sum = 0;
    for (let item of array) sum += item;
    return sum / array.length;
}

const arr = [10, 2];

// console.log(averageNumbersOfArray());
// console.log(averageNumbersOfArray(undefined));
// console.log(averageNumbersOfArray([]));
console.log('Average numbers of array: ' + averageNumbersOfArray(arr));

const factorial = function (number) {
    if(isNaN(number) || typeof number !== 'number') return 'Incorrect data';
    let factorial = 1;
    for (let i = number; i >= 1; i--) factorial *= i;
    return factorial;
}

// console.log(factorial());
// console.log(factorial(undefined));
// console.log(factorial([]));
console.log('Factorial: ' + factorial(5))
//console.log(numbers)

//Task01
// function getShortNames(arrayNames)
// ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'] -> ['Anna', 'Mark']  (lenght==4)
// function getShortNames(namesArray, nameLength);
const getShortNames = function (array) {
    const result = [];
    let minLength = getMinLength(array);
    for (let item of array)
        if (item.length === minLength) result.push(item)
    return result;

}

const getMinLength = function (array) {
    let min = array[0].length;
    for (let item of array)
        if (min > item.length) min = item.length
    return min;
}

console.log(getShortNames(['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi']))

// return Array with undefined fields
// const getShortNamesByParameter = function (array, length) {
//     return array.map(item => {
//         if (item.length === length) return item
//     })
// }
//
// console.log(getShortNamesByParameter(['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'], 5))

const getShortNamesByParameter = function (array = [], length = 0) {
    const result = [];
    for (let item of array)
        if (item.length === length) result.push(item)
    return result;
}
console.log(getShortNamesByParameter(['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'], 5))


//Task02
/*
function getDivisors(12) -> [2,3,4,6]
function getDivisors(15) -> [3,5]
function getDivisors(13) -> '13 is primy'
 */

const getDivisors = function (number) {
    const result = [];
    const length = Math.round(number / 2)
    if (checkOnPrime(number)) return `${number} is prime!`
    for (let i = 2; i <= length; i++)
        if (number % i === 0)
            result.push(i)
    return result;
}

const checkOnPrime = function (number) {
    for (let i = 2; i < Math.round(number / 2); i++)
        if (number % i === 0) return false;
    return true;

}

console.log(getDivisors(12));
console.log(getDivisors(13));
console.log(getDivisors(7));

//Task03*
/*
function sumDigitalNumber(10002345671) -> 29 -> 11 -> 2  (recursion)
 */
const sumDigitalNumber = function (number) {
    let numbersArray = number.toString().split('');
    while (numbersArray.length !== 1)
        numbersArray = sumArray(numbersArray).toString().split('');
    return sumArray(numbersArray)
}

const sumArray = function (array) {
    let sum = 0;
    for (let item of array) sum += parseInt(item);
    return sum;
}

console.log(sumDigitalNumber(10002345671))

let iteration = 0;

const numbers = [8, 1, 4, 7, 3, 5, 12, 2, 9, 32, 54, 11, 10, 6];

numbers.sort((a, b) => a - b)

function binarySearch(array, number) {
    iteration++;
    let low = 0, high = array.length - 1, middle = Math.floor((low + high) / 2);
    return (array.length === 0 || low === high) ? 'Not found' :
        (array[middle] === number) ? array[middle] :
            (array[middle] > number) ? binarySearch(array.slice(0, -(middle + 1)), number) :
                (array[middle] < number) ? binarySearch(array.slice(middle + 1), number) : "";
}

console.log("Binary search by recursion = " + binarySearch(numbers, 9), "iterations = " + iteration);

iteration = 0;

// binary search by recursion O(n/2)
function binarySearchByRecursion(array, number) {
    iteration++;
    return (array.length === 0) ? 'Not found' :
        (array[0] === number) ? array[0] :
            (array[array.length - 1] === number) ? array[array.length - 1] : binarySearchByRecursion(array.slice(1, -1), number);
}

console.log("Binary search by recursion through iteration = " + binarySearchByRecursion(numbers, 9), "iterations = " + iteration);
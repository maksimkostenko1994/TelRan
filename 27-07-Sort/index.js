const users = [
    {name: 'Anna', address: {city: 'Berlin', country: 'Germany'}, age: 32},
    {name: 'Vasya', address: {city: 'Tokio', country: 'Japan'}, age: 28},
    {name: 'Mariya', address: {city: 'London', country: 'England'}, age: 15},
    {name: 'Mark', address: {city: 'Rom', country: 'Italy'}, age: 46},
    {name: 'Sofi', address: {city: 'Verona', country: 'Italy'}, age: 38},
    {name: 'Sergio', address: {city: 'Barcelona', country: 'Spain'}, age: 18}
]

//task 1
let sortArrayByNumberType = function (array, item) {
    if (array === null || !Array.isArray(array) || item === null) return 'Incorrect data';
    return array.sort((a, b) => a[item] - b[item])
}

let sortArrayByStringType = function (array, item) {
    if (array === null || !Array.isArray(array) || item === null) return 'Incorrect data';
    return array.sort((a, b) => a[item].localeCompare(b[item]))
}

console.log(sortArrayByNumberType(users, 'age'));
//console.log(sortArrayByStringType(users, 'name'));

//task 2
let filterRange = function (array, min, max) {
    if (!Array.isArray(array) || array === null) return 'Incorrect data of array';
    if (isNaN(min) || isNaN(max)) return 'Incorrect data of max or min';
    if (max > array.length) return 'Max is out of range of array';
    if (min < 0) return 'Min is out of range of array';

    array.sort((a, b) => a - b);

    let result = [];
    for (let el of array)
        if (el >= min && el <= max)
            result.push(el)

    return result;
}

console.log(filterRange([1, 5, 8, 4, 6, 9, 3, 10], 1, 4)) // [1,3,4]
console.log(filterRange([1, 5, 8, 4, 6, 9, 3, 10], 1, 3))

//task 3
let reverseSortArray = function (array) {
    return array.sort((a, b) => a - b).reverse();
}

console.log(reverseSortArray([7,3,8,9,10,2])) // [10,9,8,7,3,2]
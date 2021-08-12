//Task 1
const getNumbers = function (number) {
    if (isNaN(number) || number === '') return 'Incorrect data';
    if (number === 1) return 1;
    if (number < 1) return 'Number is less then 1';
    return `${getNumbers(number - 1)}, ${number.toString()}`;
}

console.log(getNumbers(10));
// console.log(getNumbers());
// console.log(getNumbers(''));
// console.log(getNumbers({}));
// console.log(getNumbers(0));
// console.log(getNumbers(1));

//Task 2
// const checkPalindrome = function (str) {
//     return str === str.split('').reverse().join('');
// }

const checkPalindrome = function (str) {
    let res = str.split(' ').join(''); //to upper case
    if (res.length < 2) return true;
    if (res[0] === res.slice(-1)) return checkPalindrome(res.slice(1, -1))
    return false;
}

// console.log(checkPalindrome('qfqfqf'))
// console.log(checkPalindrome('oko'))
// console.log(checkPalindrome('oo'))
// console.log(checkPalindrome('of'))
console.log(checkPalindrome('я иду с мечем судия'))


//Task 3
const users = [
    {id: 1, firstName: 'Vasya', lastName: 'Pupkin'},
    {id: 2, firstName: 'Maksym', lastName: 'Kostenko'},
    {id: 3, firstName: 'Ivan', lastName: 'Ivanov'}
]

const changeUser = function (array = []) {
    if (!Array.isArray(array)) return 'Wrong type of array';
    const result = [];
    for (let user of array) {
        const {id, firstName, lastName} = user;
        result.push({id: id, fullName: `${firstName} ${lastName}`})
    }
    return result;
}

console.log(changeUser(users));
// console.log(changeUser());
// console.log(changeUser(''));
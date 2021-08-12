const users = [
    {name: 'Anna', address: {city: 'Berlin', country: 'Germany'}, age: 32},
    {name: 'Vasya', address: {city: 'Tokio', country: 'Japan'}, age: 28},
    {name: 'Mariya', address: {city: 'London', country: 'England'}, age: 17},
    {name: 'Mark', address: {city: 'Rom', country: 'Italy'}, age: 46},
    {name: 'Sofi', address: {city: 'Verona', country: 'Italy'}, age: 38},
    {name: 'Sergio', address: {city: 'Barcelona', country: 'Spain'}, age: 18}
]

const averageUsersAge = function (array) {
    if (!isNaN(array) || !Array.isArray(array) || !array) return 'Incorrect data';
    let sum = 0;
    for (let item of array) sum += item.age;
    return sum / array.length;
}

// console.log(averageUsersAge());
// console.log(averageUsersAge(undefined));
// console.log(averageUsersAge([]));
console.log('Average users age is: ' + averageUsersAge(users));

const youngestUser = function (array) {
    if (!Array.isArray(array) || array.length === 0) return 'Incorrect data';
    let youngestUser = array[0].age;
    for (let item of array) (youngestUser > item.age) ? youngestUser = item.age : '';
    return JSON.stringify(array.find(item => item.age === youngestUser));
}

console.log('===========================================');
// console.log(youngestUser());
// console.log(youngestUser(undefined));
// console.log(youngestUser([]));
console.log('Youngest user is: ' + youngestUser(users));

const oldestUser = function (array) {
    if (!Array.isArray(array) || array.length === 0) return 'Incorrect data';
    let youngestUser = array[0].age;
    for (let item of array) (youngestUser < item.age) ? youngestUser = item.age : '';
    return JSON.stringify(array.find(item => item.age === youngestUser));
}

console.log('===========================================');
// console.log(oldestUser());
// console.log(oldestUser(undefined));
// console.log(oldestUser([]));
console.log('Oldest user is: ' + oldestUser(users));

const getUserInfo = function (array, conditionOfCountry = '') {
    if (!Array.isArray(array) || array.length === 0) return 'Incorrect data';
    const users = [];
    for (let item in array) if (array[item].address.country !== conditionOfCountry) users.push(array[item]);
    return users;
}

console.log('===========================================');
// console.log(getUserInfo());
// console.log(getUserInfo(undefined));
// console.log(getUserInfo([]));
console.log(getUserInfo(users, 'England'));

const getUsersList = function (array, minAge = 0, maxAge = 0) {
    if (!Array.isArray(array) || array.length === 0) return 'Incorrect data';
    const usersList = [];
    for (let item of array) (item.age > minAge && item.age < maxAge) ? usersList.push(item) : '';
    return usersList;
}

console.log('===========================================');
console.log(getUsersList(users, 16, 35));

const getUsersNames = function (array) {
    if (!Array.isArray(array) || array.length === 0) return 'Incorrect data';
    let usersNames = [];
    for (let item of array) usersNames.push(item.name); 
    return usersNames;
}

console.log('===========================================');
console.log(getUsersNames(users));

const getUsersBySymbol = function (array, symbol = '') {
    if (!Array.isArray(array) || array.length === 0) return 'Incorrect data';
    let usersListBySymbol = [];
    for (let item of array) (item.name[0] === symbol) ? usersListBySymbol.push(item) : '';
    return usersListBySymbol;
}

console.log('===========================================');
console.log(getUsersBySymbol(users, 'M'));
console.log(getUsersBySymbol(users, 'S'));

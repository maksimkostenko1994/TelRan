const users = [
    {name: 'Masha', age: 20, height: 170},
    {name: 'Kostyantyn', age: 15, height: 180},
    {name: 'Max', age: 30, height: 160},
    {name: 'Igor', age: 40, height: 165},
    {name: 'Ivan', age: 50, height: 185},
    {name: 'Maria', age: 60, height: 145},
    {name: 'Sasha', age: 70, height: 190}
]

console.log('More then 20 ', users.filter(item => item.age > 20))

console.log('Less then 150 ', users.filter(item => item.height > 150))

//add id
console.log('Add id ', users.map((item, index) => {
    item.id = index + 1;
    return item
}))

console.log('Max name ', users.find(item => item.name.length === Math.max.apply(null, users.map(item => item.name.length))))

console.log(users.map(item => `${item.name}, age: ${item.age} years old, height: ${item.height} cm`))

const getArrayOfObjects = (array) => {
    let res = []
    for (let i = 0; i < array.length; i++) {
        const str = array[i].split(' ');
        res.push({firstName: str[0], lastName: str[1]})
    }
    return res
}


console.log([`Vasya Vasilev`, `Petya Petrov`].map(item => {
    return {
        firstName: item.split(' ')[0],
        lastName: item.split(' ')[1]
    }
}));

const newArr = [];
[`Vasya Vasilev`, `Petya Petrov`].forEach(function (item) {
    newArr.push({
        firstName: item.split(' ')[0],
        lastName: item.split(' ')[1]
    })
})

console.log(newArr)

const fillArr = (quantity, str) => {
    const res = [];
    for (let i = 0; i < quantity; i++) res.push(str)
    return res
}
console.log(fillArr(5, 'hello'))

const changeString = (str) => {
    return str.split('').map((item, index) => (index % 2 !== 0) ? item.toUpperCase() : item.toLowerCase()).join('')
}

console.log(changeString('abcdeffgfhsfd'))

const countItem = (array, el) => {
    let count = 0
    array.forEach(item => (item === el) ? count++ : '')
    return count
}

console.log(countItem([1, 2, 3, 4, 4, 4, 4, 5, 6, 4, 4], 4))

const clearArray = (array) => {
    return array.filter(item => (typeof item === 'number' && !isNaN(item)))
}

console.log(clearArray([1, 2, 3, null, '', undefined, 5, NaN, 7]))
const dropSimilar = function (array) {
    if (array === null || !Array.isArray(array) || array.length === 0) return 'Incorrect data';
    return array.filter((item, index, arr) => arr.indexOf(item) === index);
}

// console.log(dropSimilar(null))
// console.log(dropSimilar('qefqf'))
// console.log(dropSimilar([]))
// console.log(dropSimilar(undefined))
// console.log(dropSimilar())
// console.log(dropSimilar(2))
console.log(dropSimilar([2, 5, 7, 9, 7, 2]))
console.log(dropSimilar([2, 0, 0, 1, 1, 2]))
console.log(dropSimilar([2, 3, 3, 3, 3, 3, 0, 5, 5, 5, 5, 0, 3, 3, 3, 3, 1, 2, 2, 2, 1, 2]))

const changeArray = function (array) {
    if (array === null || !Array.isArray(array) || array.length === 0) return 'Incorrect data';
    return array.reduce(() => (array[0] < array[array.length - 1]) ? array.map(() => this.item = array[array.length - 1]) : array.map(() => this.item = array[0]));
}

// console.log(dropSimilar(null))
// console.log(dropSimilar('qefqf'))
// console.log(dropSimilar([]))
// console.log(dropSimilar(undefined))
// console.log(dropSimilar())
// console.log(dropSimilar(2))
console.log(changeArray([1, 5, 6, 7, 2]))
console.log(changeArray([7, 3, 8, 4]))
console.log(changeArray([7, 3, 8, 11]))
//метод кооторый получает строку и симфол. Возвращает количество повторений символа

const countSymbol = function (str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++)
        if (str[i] === char)
            counter++

    return counter;
}

const countSymbolReduce = function (str, char) {
    let counter = 0;
    str.split('').forEach(item => {
        if (item === char) counter++
    })
    return counter;
}

console.log(countSymbol('qfqfqfqad', 'q'))

console.log('Reduce ' + countSymbolReduce('qfqfqfqad', 'q'))
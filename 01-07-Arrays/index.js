// ============ Task 1 ==============

let pifagorsTable = [];
let numbers = [];

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        numbers[j - 1] = j * i;
    }
    pifagorsTable.push([...numbers]);
}

console.log(pifagorsTable);

// document.write('<table style="text-align: center" border="1" cellpadding="1" align="center" width="600">');
// document.write('<tbody>');
// for (let i = 0; i < 10; i++) {
//     document.write(`<tr>`);
//     for (let j = 0; j < 10; j++) {
//         document.write(`<td>${pifagorsTable[i][j]}</td>`);
//     }
//     document.write(`</tr>`);
// }
// document.write('</tbody>');
// document.write('</table>');
document.write(`<h1 align="center">Task 1</h1>`)
document.write('<table style="text-align: center" border="1" cellpadding="1" align="center" width="600">');
document.write('<tbody>');
for (let item of pifagorsTable) {
    document.write(`<tr>`);
    for (let j_item of item) {
        document.write(`<td>${j_item}</td>`);
    }
    document.write(`</tr>`);
}
document.write('</tbody>');
document.write('</table>');

//===================================

//============= Task 2 ==============
let question

do {
    question = parseInt(prompt('Enter a number:'));
    if (isNaN(question)) alert('Number is not correct! Please, input again.')
    if (question < 2) alert('Number is less then 2! Number must be bigger 2. Input again please.');
}
while (isNaN(question) || question < 2);

let answer = '';
for (let i = question; i > 0; i--) {
    answer += i + ' ';
}
document.write(`<h1 align="center">Task 2</h1>`)
document.write(`<h1 align="center">${answer}</h1>`)
//===================================

let simpleNumber;
do {
    simpleNumber = parseInt(prompt('Enter a simple number please: '));
    if (isNaN(simpleNumber)) alert('Number is not correct! Please, input again.')
    if (simpleNumber < 2) alert('Number is less then 2! Number must be bigger 2. Input again please.');
}
while (isNaN(simpleNumber) || simpleNumber < 2);

let simpleArr = [];

for (let i = 0; i < simpleNumber; i++) {
    simpleArr.push(i + 1);
}
simpleArr.shift();


let simpleAnswer = '';
let counter = 0;

for (let i = 0; i < simpleArr.length; i++) {
    for (let j = 1; j <= simpleArr[i]; j++) {
        if (simpleArr[i] % j === 0) {
            counter++;
            if (counter > 2) {
                counter = 0;
                break;
            }
            if (j === simpleArr[i] && counter === 2) {
                simpleAnswer += simpleArr[i] + ' ';
                counter = 0;
                break;
            }
        }
    }
}

document.write(`<h1 align="center">Task 3</h1>`);
document.write(`<h1 align="center">Simple Answer = ${simpleAnswer}</h1>`)
// let arr = ['Max', 1234, ['1', 2, '3.3', {una: {src: './index'}}], {masha: {age: 20}}, [2], [3], 'end'];
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//         arr.splice(i, 1);
//         i--;
//     }
// }
//
// console.log(arr);


const PI = 3.14;

let a = prompt("Первое число?", '3');
let b = prompt("Второе число?", '9');

alert(parseFloat(a) + parseFloat(b)); //12

let hour = prompt('Сколько стоит работа в час?');
let days = prompt('Сколько часов работаете в день?');

alert('Ваша месячная зарплата - ' + parseFloat(hour) * parseFloat(days) * 22);

let radius = prompt('Введите радиус круга?');
alert('Площадь круга равняеться - ' + PI * radius ** 2);
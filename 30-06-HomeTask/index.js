let salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900
}

//====== first task ===========
salaries.Max = 3100;
salaries.Sasha = 800;
//============================

//=== second task ====

let sum = 0;
console.log(salaries);

for (let key in salaries) {
    sum += salaries[key];
}

console.log(`Sum is ${sum}`);
//====================

//========= third task ============
let numberItems = 0;
for (let key in salaries) {
    numberItems++;
}

console.log(numberItems);

for (let i = 0; i < numberItems; i++) {
    if (i === 1) {
        console.log(`The first person is ${Object.keys(salaries)[0]}. He/She has ${Object.values(salaries)[0]} salary!`);
    }
    if (i === numberItems - 1) {
        console.log(`The last person is ${Object.keys(salaries)[numberItems - 1]}. He/She has ${Object.values(salaries)[numberItems - 1]} salary!`);
    }
}
//=====================================

// ============== fourth task =============

let max_salary = {
    max: Object.values(salaries)[0],
    name: Object.keys(salaries)[0]
};

for (let key in salaries) {
    if (salaries[key] > max_salary.max) {
        max_salary.max = salaries[key];
        max_salary.name = key;
    }
}

console.log(`Max salary has ${max_salary.name}, ${max_salary.max}`);

// =======================================



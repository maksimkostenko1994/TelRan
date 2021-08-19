//menu buttons
const btnHome = document.querySelector('#btn-home'),
    btnAddPhone = document.querySelector('#btn-add-phone')

//section
const section = document.querySelector('section')

//database
const phonebook = [
    {
        name: 'Max',
        number: '1231231231231',
        email: 'example@mail.com',
    }, {
        name: 'Max',
        number: '1231231231231',
        email: 'example@mail.com',
    }
]

//add phone number section
const filterArray = (array, elements) => {
    for (let item of array)
        for (let el of elements)
            if (item.id === el.control.id)
                elements.splice(elements.indexOf(el), 1)
    return elements
}

const checkEqual = (array, element) => {
    for (let item of array)
        if (item.email === element || item.number === element)
            return true
    return false
}

const generateId = () => {
    let id = 1;
    return function () {
        return id++;
    }
}

const createNumber = (id, name, number, email, location, description) => {
    return {
        id: id,
        name: name,
        number: number,
        email: email,
        location: location,
        description: description,
        selected: false
    }
}

const validateData = () => {
    const inputName = document.querySelector('#input-name'),
        inputPhone = document.querySelector('#input-phone'),
        inputEmail = document.querySelector('#input-email'),
        inputLocation = document.querySelector('#input-location')

    const labelPhone = document.querySelector('[for=input-phone]'),
        labelEmail = document.querySelector('[for=input-email]')

    const phone = inputPhone.value.replaceAll('+', '').split('-')
    const [codeCountry, codeProvider, number1, number2, number3] = phone

    const email = inputEmail.value;
    const checkSymbol = email.split('').some(el => el === '@')
    const checkCountOfSymbol = email.split('').reduce((count, item) => (item === '@') ? count + 1 : count, 0)

    let checkDot, checkCountOfDot;

    if (checkSymbol && checkCountOfSymbol === 1) {
        if (checkCountOfSymbol === 1) {
            checkDot = email.split('@')[1].split('').some(el => el === '.')
            if (checkDot)
                checkCountOfDot = email.split('@')[1].split('').reduce((count, item) => (item === '.') ? count + 1 : count, 0)
        }
    }

    document.querySelectorAll('.box-add label').forEach(label => label.innerHTML = '')
    switch (true) {
        case inputName.value === '' || inputPhone.value === '' || inputEmail.value === '' || inputLocation.value === '':
            let labels = document.querySelectorAll('.box-add label')
            labels = Array.from(labels)
            let inputs = document.querySelectorAll('.box-add input')
            const inputsNotNull = Array.from(inputs).filter(el => el.value)
            labels = filterArray(inputsNotNull, labels);
            labels.forEach(label => {
                label.innerHTML = `Please set data`
            })
            return false
        case phone.length !== 5:
            labelPhone.innerHTML = `Phone number should be in pattern of +12-456-789-00-00`
            return false;
        case codeCountry.length !== 2:
            labelPhone.innerHTML = `Code ${codeCountry.toUpperCase()} is wrong`
            return false
        case codeProvider.length !== 3:
            labelPhone.innerHTML = `Code ${codeProvider.toUpperCase()} is wrong`
            return false
        case number1.length !== 3 || number2.length !== 2 || number3.length !== 2:
            labelPhone.innerHTML = `Phone number should be in pattern of +12-456-789-00-00`
            return false
        case isNaN(codeCountry) || isNaN(codeProvider) || isNaN(number1) || isNaN(number2) || isNaN(number3):
            labelPhone.innerHTML = `Some of your data is not a number`
            return false
        case checkSymbol !== true:
            labelEmail.innerHTML = `Wrong format of email. Format is example@mail.com`
            return false
        case checkCountOfSymbol > 1:
            labelEmail.innerHTML = `Count of "@" more then 1. Format is example@mail.com`
            return false
        case checkDot !== true:
            labelEmail.innerHTML = `You missed symbol "." in field. Format is example@mail.com`
            return false
        case checkCountOfDot > 1:
            labelEmail.innerHTML = `Symbol "." after "@" more then 1. Format is example@mail.com`
            return false
        case email[email.length - 1] === '.':
            labelEmail.innerHTML = `Wrong format of email. Format is example@mail.com`
            return false
        case checkEqual(phonebook, inputPhone.value):
            labelPhone.innerHTML = `Number ${inputPhone.value} already exist`
            return false
        case checkEqual(phonebook, email):
            labelEmail.innerHTML = `Number with ${email} already exist`
            return false
    }

    return true;
}

const createAddForm = () => {
    const div = document.createElement('div')
    div.classList.add('box-add')
    //inputs
    const inputName = document.createElement('input'),
        inputPhone = document.createElement('input'),
        inputEmail = document.createElement('input'),
        inputLocation = document.createElement('input'),
        inputDescription = document.createElement('textarea')
    //labels
    const labelName = document.createElement('label'),
        labelPhone = document.createElement('label'),
        labelEmail = document.createElement('label'),
        labelLocation = document.createElement('label')
    //add button
    const btn = document.createElement('button')

    labelName.setAttribute('for', 'input-name')
    labelPhone.setAttribute('for', 'input-phone')
    labelEmail.setAttribute('for', 'input-email')
    labelLocation.setAttribute('for', 'input-location')

    btn.setAttribute('id', 'btn-add')
    btn.innerText = 'add'
    btn.classList.add('btn')

    inputName.setAttribute('id', 'input-name')
    inputName.setAttribute('type', 'text')
    inputName.setAttribute('placeholder', 'Type name')

    inputPhone.setAttribute('id', 'input-phone')
    inputPhone.setAttribute('type', 'tel')
    inputPhone.setAttribute('pattern', '[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}')
    inputPhone.setAttribute('placeholder', 'Type phone')

    inputEmail.setAttribute('id', 'input-email')
    inputEmail.setAttribute('type', 'email')
    inputEmail.setAttribute('placeholder', 'Type email')

    inputLocation.setAttribute('id', 'input-location')
    inputLocation.setAttribute('type', 'text')
    inputLocation.setAttribute('placeholder', 'Type location')

    inputDescription.setAttribute('id', 'input-description')
    inputDescription.setAttribute('placeholder', 'Type description')

    div.append(inputName, labelName, inputPhone, labelPhone, inputEmail, labelEmail, inputLocation, labelLocation, inputDescription, btn)
    return div;
}

const addPhoneNumber = (array) => {
    section.append(createAddForm());
    const inputName = document.querySelector('#input-name'),
        inputPhone = document.querySelector('#input-phone'),
        inputEmail = document.querySelector('#input-email'),
        inputLocation = document.querySelector('#input-location'),
        inputDescription = document.querySelector('#input-description'),
        btnAdd = document.querySelector('#btn-add')

    inputPhone.oninput = (event) => {
        let value = event.target.value
        if (value.length === 1 && value[0] !== '+') value = '+' + value;
        event.target.value = value
    }
    let id = generateId();
    btnAdd.onclick = () => {
        if (validateData() === true) {
            document.querySelectorAll('.box-add label').forEach(label => label.innerHTML = '')
            array.push(createNumber(id(), inputName.value, inputPhone.value, inputEmail.value, inputLocation.value, inputDescription.value))
            document.querySelectorAll('.box-add input').forEach(input => input.value = '')
            document.querySelector('.box-add textarea').value = ''
        }
    }
}

//contacts section
const createElementOfList = (item) => {
    const li = document.createElement('li')
    li.innerHTML = `<div><h1>${item.name}</h1><br><h3>${item.number}</h3></div><div><i class="fa fa-trash fa-2x" aria-hidden="true"></i></div>`
    li.classList.add('phone-box')
    return li
}

const createPhoneList = (array) => {
    const div = document.createElement('div');
    div.classList.add('phone-list');
    const ul = document.createElement('ul')
    for (let item of array)
        ul.append(createElementOfList(item))
    div.append(ul)
    return div;
}


btnHome.onclick = () => {
    section.innerHTML = ``
    btnHome.classList.add('active')
    btnAddPhone.classList.remove('active')
    section.append(createPhoneList(phonebook))
}

btnAddPhone.onclick = () => {
    section.innerHTML = ``
    btnHome.classList.remove('active')
    btnAddPhone.classList.add(`active`)
    addPhoneNumber(phonebook)
}

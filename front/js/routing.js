import {renderLoginPage} from './modules/loginPage.js'
import {renderSignupPage} from "./modules/signupPage.js";
import {formValidation} from "./modules/validationForm.js";
import Store from "../db/store.js";
import User from '../db/user.js'
import {renderUserPage} from "./modules/userPage.js";


const btnLogin = document.querySelector('#login'),
    btnSignup = document.querySelector('#signup')

const section = document.querySelector('section')

loadLoginPage()

export function loadLoginPage() {
    const auth = JSON.parse(localStorage.getItem('auth'))

    if (auth !== null) {
        section.innerHTML = ''
        const user = Store.getAllUsers().find(item => item.nickName === auth)
        section.appendChild(renderUserPage(user));
    } else {

        window.onload = (event) => {
            loginPageFunction(event)
        }

        const loginPageFunction = (event) => {
            event.preventDefault()
            section.innerHTML = ''
            section.appendChild(renderLoginPage())
            const loginForm = document.querySelector('form[name="login-form"]'),
                btn = loginForm.querySelector('button'),
                a = loginForm.querySelector('.form-account a')

            formValidation(loginForm)
            btn.addEventListener('click', (event) => login(event, loginForm),)
            a.onclick = signupPageFunction
        }

        const signupPageFunction = (event) => {
            event.preventDefault()
            section.innerHTML = ''
            section.appendChild(renderSignupPage())
            const registrationFrom = document.querySelector('form[name="signup-form"]'),
                btn = registrationFrom.querySelector('button'),
                a = registrationFrom.querySelector('.form-account a')
            formValidation(registrationFrom)
            btn.onclick = (event) => registration(event, registrationFrom)
            a.onclick = loginPageFunction
        }

        btnLogin.onclick = loginPageFunction

        btnSignup.onclick = signupPageFunction

        const login = (event, element) => {
            event.preventDefault()
            const users = Store.getAllUsers(),
                user = users.find(item => item.email === element.email.value)
            if (user !== undefined && element.password.value === user.password) {
                localStorage.setItem('auth', JSON.stringify(user.nickName))
                section.innerHTML = ''
                section.appendChild(renderUserPage(user));
            }
        }

        const registration = (event, element) => {
            event.preventDefault()
            if (validation(element) === true) {
                Store.setUser(new User(
                    element.firstName.value,
                    element.lastName.value,
                    element.email.value,
                    element.nickname.value,
                    element.pass.value
                ))
                element.reset();
            }
        }

        const validation = (element) => {
            const email = element.email.value;
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

            switch (true) {
                case element.firstName.value === '' || element.lastName.value === ''
                || element.email.value === '' || element.pass.value === ''
                || element.repeatPass.value === '' || element.nickname.value === '':
                    const inputs = element.querySelectorAll('input')
                    inputs.forEach(item => {
                        item.classList.add('placeholder-color')
                        item.placeholder = `The data cannot be empty`
                    })
                    return false
                case checkSymbol !== true:
                    element.email.value = ''
                    element.email.classList.add('placeholder-color')
                    element.email.placeholder = `Wrong format of email. Format is example@mail.com`
                    return false
                case checkCountOfSymbol > 1:
                    element.email.value = ''
                    element.email.classList.add('placeholder-color')
                    element.email.placeholder = `Wrong format of email. Format is example@mail.com`
                    return false
                case checkDot !== true:
                    element.email.value = ''
                    element.email.classList.add('placeholder-color')
                    element.email.placeholder = `Wrong format of email. Format is example@mail.com`
                    return false
                case checkCountOfDot > 1:
                    element.email.value = ''
                    element.email.classList.add('placeholder-color')
                    element.email.placeholder = `Wrong format of email. Format is example@mail.com`
                    return false
                case email[email.length - 1] === '.':
                    element.email.value = ''
                    element.email.classList.add('placeholder-color')
                    element.email.placeholder = `Wrong format of email. Format is example@mail.com`
                    return false
                case checkEqual(Store.getAllUsers(), email):
                    element.email.value = ''
                    element.email.classList.add('placeholder-color')
                    element.email.placeholder = `Email "${email}" already exist`
                    return false
                case checkEqual(Store.getAllUsers(), element.nickname.value):
                    const nickname = element.nickname.value;
                    element.nickname.value = ''
                    element.nickname.classList.add('placeholder-color')
                    element.nickname.placeholder = `Nickname "${nickname}" already exist`
                    return false
                case element.repeatPass.value !== element.pass.value:
                    element.repeatPass.value = ''
                    element.repeatPass.classList.add('placeholder-color')
                    element.repeatPass.placeholder = 'Repeat password is not equal'
                    return false
            }
            element.querySelectorAll('input').forEach(item => item.classList.remove('placeholder-color'))
            element.email.placeholder = 'Enter email...'
            element.pass.placeholder = 'Enter password...'
            element.repeatPass.placeholder = 'Repeat password...'
            element.firstName.placeholder = 'Enter first name...'
            element.lastName.placeholder = 'Enter last name...'
            element.nickname.placeholder = 'Enter nickname...'
            return true;
        }

        const checkEqual = (array, el) => {
            for (let item of array)
                if (item.email === el || item.nickName === el)
                    return true
            return false
        }
    }
}
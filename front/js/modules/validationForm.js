export const formValidation = (element) => {

    const changeTypeInput = (event) => {
        const typeClass = checkPass(event)
        const input = event.currentTarget.previousElementSibling
        input.type = (typeClass === 'fa-eye') ? 'text' : 'password'

    }

    const checkPass = (event) => {
        if (event.target.classList.contains('fa-eye')) {
            event.target.classList.remove('fa-eye')
            event.target.classList.add('fa-eye-slash')
            return 'fa-eye-slash'
        } else if (event.target.classList.contains('fa-eye-slash')) {
            event.target.classList.add('fa-eye')
            event.target.classList.remove('fa-eye-slash')
            return 'fa-eye'
        } else if (event.target.tagName === 'path') {
            if (event.target.parentNode.classList.contains('fa-eye')) {
                event.target.parentNode.classList.remove('fa-eye')
                event.target.parentNode.classList.add('fa-eye-slash')
                return 'fa-eye-slash'
            } else if (event.target.parentNode.classList.contains('fa-eye-slash')) {
                event.target.parentNode.classList.add('fa-eye')
                event.target.parentNode.classList.remove('fa-eye-slash')
                return 'fa-eye'
            }
        }
    }

    const passLook = element.querySelectorAll('.pass-look')
    passLook.forEach(item => item.onclick = changeTypeInput)
}
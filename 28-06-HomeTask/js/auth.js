function getLogin() {
    let login = document.getElementById('login').value;
    // if(login === 'employee'){
    //     return document.getElementById('auth').value = `Hi, ${login}!`;
    // } else if(login === 'boss') {
    //     return document.getElementById('auth').value = `Hello, ${login}!`;
    // } else if(login === '') {
    //     return document.getElementById('auth').value = `No login`;
    // } else {
    //     return document.getElementById('auth').value = 'Hi user!';
    // }

    switch (login) {
        case 'employee': document.getElementById('auth').value = `Hi, ${login}!`; break;
        case 'boss': document.getElementById('auth').value = `Hi, ${login}!`; break;
        case '': document.getElementById('auth').value = `No login`; break;
        default: document.getElementById('auth').value = `Hi, user`; break;
    }
}
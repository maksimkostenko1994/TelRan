const listMovies = [],
    list = document.querySelector('.list ul'),
    btnAdd = document.querySelector('#add');

let id = 0;

btnAdd.onclick = () => {
    id++;
    const input = document.querySelector('#movie').value;
    listMovies.push(input);
    list.innerHTML += `<li>${id} ${listMovies[id - 1]}</li>`
}
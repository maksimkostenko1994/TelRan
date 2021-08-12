/* Задания:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

//task 1
const promos_adv = document.querySelector('.promo__adv');
const promos = document.querySelectorAll('.promo__adv img, .promo__adv .promo__adv-title')

const removePromos = (advertising, elements) => {
    for (let promo of elements)
        advertising.removeChild(promo)
}

removePromos(promos_adv, promos);

//task 2
const film_type = document.querySelector('.promo__genre')

const changeGenre = (from, to) => {
    return from.innerText = to
}

changeGenre(film_type, 'drama')

//task 3
const picture = document.getElementsByClassName('promo__bg')[0];

const changeBG = (from, to) => {
    return from.style.background = to
}

changeBG(picture, 'url("./img/bg.jpg") center center/cover no-repeat')

//task 4
const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};

const movies = document.getElementsByClassName('promo__interactive-item');

const setMovies = (movies_array, moviesDB) => {
    const {movies} = moviesDB;
    movies.sort();
    for (let i = 0; i < movies.length; i++)
        //task 5
        movies_array[i].innerText = `${i + 1}. ${movies[i]}`
    return movies_array
}

setMovies(movies, movieDB)

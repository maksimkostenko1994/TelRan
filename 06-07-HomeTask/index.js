let films = [
    {name: 'Titanic', rate: 8.8},
    {name: 'The lord of the Ring', rate: 10.0},
    {name: 'Harry Potter', rate: 10.0},
    {name: 'Capitan America', rate: 9.2},
    {name: 'The Last Dance', rate: 10.0},
    {name: 'Superman vs Batman', rate: 5.8},
    {name: 'Rocky 2', rate: 9.8},
    {name: 'Rambo', rate: 7.9},
    {name: 'Moana', rate: 9.6},
    {name: 'Movie 43', rate: 4.1},
];

let numberOfFilms = parseInt(prompt('How many films did you watch last month?'));

do {
    if (numberOfFilms <= 0)
        numberOfFilms = parseInt(prompt('The number is less then 0. Please enter number bigger then 0.'));
    else if (numberOfFilms > 10)
        numberOfFilms = parseInt(prompt('The number is bigger then 10. Please enter number less then 11.'));
    else if (isNaN(numberOfFilms))
        numberOfFilms = parseInt(prompt('The number is not valid. Please enter number.'));
}
while (numberOfFilms <= 0 || numberOfFilms > 10 || isNaN(numberOfFilms));

let count01 = 0, count13 = 0, count35 = 0, count5 = 0;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    genres: [],
    private: false,
    setMovies: function(){
        for (let i = 0; i < this.count; i++) {
            this.movies[films[i].name] = films[i].rate;
        }
    },
    printData: function (statement) {
        if (statement === 'yes') {
            personalMovieDB.private = true;
            document.write(`<h1>Your count of films is ${this.count}</h1>`);
            document.write(`<div>Movies what you saw:`);
            for (let item in this.movies) {
                document.write(`<h1>${item}</h1>`)
            }
            document.write(`</div>`)
            document.write(`<div>Your favourite genres are:`);
            for (let item of personalMovieDB.genres) {
                document.write(`<h1>${item}</h1>`);
            }
            document.write(`</div>`);
        } else {
            document.write(`Access denied`);
        }
    },
    rateOfFilms: function () {
        for (let item in this.movies) {
            if (this.movies[item] < 1) {
                count01++;
            }
            if (this.movies[item] >= 1 && this.movies[item] < 3) {
                count13++;
            }
            if (this.movies[item] >= 3 && this.movies[item] <= 5) {
                count35++;
            }
            if (this.movies[item] > 5) {
                count5++;
            }
        }
        alert(`Films with rate from 0 to 1 is ${count01}.\nFilms with rate from 1 to 3 is ${count13}.\nFilms with rate from 3 to 5 is ${count35}.\nFilms with rate from 5 is ${count5}.\n`);
    }
}
personalMovieDB.setMovies();

let genreOfFilm;
do {
    genreOfFilm = prompt('What is your favourite genre?');
    if (genreOfFilm === 'q') break;
    personalMovieDB.genres.push(genreOfFilm);
}
while (true);

let userAccess = prompt('Do you want to print your data?');

personalMovieDB.printData(userAccess);

personalMovieDB.rateOfFilms();
let numberOfFilms;
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    genres: [],
    private: false,
    rememberUserFilms: function (filmsNumber){
        for(let i=0; i < filmsNumber; i++){
            const filmsName=prompt('One of the last movies you saw? Один из последних фильмов, которые вы смотрели?'),
                rate=prompt('How would you rate him? Как бы вы его оценили?');
            if(filmsName!='' && rate!='' && filmsName!=null && rate!=null){
                personalMovieDB.movies[filmsName]=rate;
                console.log('done');
            }else{
                console.log('error');
                i--;
                break;
            }
        }
    },
    discoverPersonalLevel: function (){
        if(this.count < 5){
            return 'Not many movies watched / Мало просмотренных фильмов';
        }else if(this.count>=5 && this.count<=10){
            return 'you are good viewer! / Вы хороший зритель!\u{1F60D}';
        }else if(this.count>10){
            return 'you are a movie buff!! / Вы киноман!!!';
        }else{
            return 'Sorry, there was an error. / Извините, произошла ошибка.';
        }
    },
    usersGenres: function (num){
        for(let i=1; i<=num; i++){
            personalMovieDB.genres[i-1]=prompt(`What is your favorite ${i} genre? Какой ваш любимый жанр?`);
        }
    },
    showUsersDB: function (hidden){
        if(!hidden){
            console.log(personalMovieDB);
            alert(`You did watched: ${personalMovieDB.count} films`);
            for(let key in personalMovieDB.movies){
                alert(`You saved film: '${key}' has rate ${personalMovieDB.movies[key]}`)
            }
            alert(`You saved genre: ${this.genres}`);
            alert(`discoverPersonalLevel(this.count)`);
        }
    }
}

function start(){
    do{
        numberOfFilms= +prompt('How many films did you watch last month? Сколько фильмов вы посмотрели в прошлом месяце?');
    }while(numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms));
}

console.log('type of count ' + typeof personalMovieDB.count);

personalMovieDB.rememberUserFilms(2);
personalMovieDB.usersGenres(2);
personalMovieDB.discoverPersonalLevel();
personalMovieDB.showUsersDB(personalMovieDB.private);
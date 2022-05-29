"use strict.";
// const obj = {
//     name: "salam",
//     lastname: "aleykum"
// };
// console.log(obj.name, obj.lastname);


// const result = confirm("Are you here?");
// console.log(result, typeof(result));
// if (result == false) {
//     console.log("its false")
// } else {
//    console.log("its true")

// let result = +prompt("Salam");
// console.log(Number.parseInt(result) + 3, typeof(result));

// const answers = [];
// answers[0] = prompt("1-10");
// console.log(Number.parseInt(answers[0]) + 3);
// console.log(Number.toString(answers[0]) + 3, typeof(answers[0]));


// const match = 87878962;
// console.log(`https://fastcup.com/math${match}`);
// const Name = prompt("Hello, what is your name?");
// alert(`Hello,${Name}!`)


/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let personalMoviDB = {
    count: Number.parseInt(numberOfFilms),
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
personalMoviDB.movies = {
    name: prompt("Один из последних просмотренных фильмов?"),
    raiting: prompt("На сколько оцените его?")
};
console.log(personalMoviDB.count);
console.log(personalMoviDB.movies.name, Number.parseInt(personalMoviDB.movies.raiting));
let rait = Number.parseInt(personalMoviDB.movies.raiting);
console.log(typeof(rait));
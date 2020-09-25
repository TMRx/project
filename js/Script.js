" use strict";
//  let number = 4.6;
//  console.log(-4/0);
//  console.log('string ' * 9);

//  const person = "Dmitry";
// const bool  = true;
// // console.log(sdgsg);
// let und;
// console.log(und);


// const obj= {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ["plum.png", ["orange.jpeg"], 6, {} ];
// console.log(arr[4]);



// let number = 5;
// const leftBorderWidth = 1;
// number =10;
// console.log(number);

// const obj ={
//      a:50
//  };

// obj.a =10;
// console.log(obj);


// alert('Hello');
// const result = confirm('are you here');
// console.log(result);
//  const answer = prompt("вам есь 18", "18");
//  console.log(answer + 5);
// const answers = [];
// // answers[0] = prompt('how yours name ', '');
// // answers[1] = prompt('how yours single name ', '');
// // answers[2] = prompt('What you age ', '');
// // document.write(answers);
// console.log(typeof(answers));
// console.log(typeof(null));


    //Interpolation
// const category = 'toys';
// console.log(`https://toys.com.ua/${category}`);
// const user = ("d,itry");
// alert (`привет, ${user}`);


// console.log('arr' + "-object");
// let incr = 5,
//     decr = 10;
// // incr++;
// // decr--;
// console.log(++incr);
// console.log(--decr);
// console.log(5%2);
// console.log(2+2*2!=8);

// const isChecket=true,
//         isClose = false;

// console.log(isChecket || !isClose);

    //ex1
const NumberOfFilms = +prompt('Сколько фильмов вы уже смотрели', '');


    //ex2
const PersonalMoviDB = {
    count:NumberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false
};
    
    //ex3
const a = prompt('один из просмотреных фильмов', ''),
     b = prompt('на сколько оцените его ' ,''),
     c = prompt('один из просмотреных фильмов', ''),
     d = prompt('на сколько оцените его ' ,'');
 

PersonalMoviDB.movies[a] = b;
console.log(PersonalMoviDB);

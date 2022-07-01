// function sing(){} this is how we create a function in java script
// sing is function name 
// if you have many words of the function then the function must be in capital
// for the second the the
function singSong() { 
    console.log("sing that dem song");
}
// arguments with function
// example 
// function singSong(person){}
// if the argument is not given then the undefined will be 
// person is a parameter
// when you pass something in the pranthesis when you run a function that is 
// called argument
// 
// function repeat(message,num){
    // retuslt ="";
     // for(let i=0; i< num; i++){
        // console.log(message);
        //or we can do something like this
        //  result += message;
        // if you do not pass the arguments then the scrip will be fine
        // until those arguments are used
   //  }
//}
//return out put of the function
// function add(num1, num2){
// return num1+num2; this used as the output of the functions
// return stops the excusion of the code and return will run not matter 
// what happens
// y !== 'number' not a number(this is how you do it). 
// we can only return a single value from a function
//}

// FUNCTION(Higher order concept):
//*************************************/

// functions have scope: 
// veriable defined in the function will have priority in the function 
// any variable defined in a function is scoped to the block 
//BLOCK SCOPED:   
// var: are not block scopped 
// do not use var do declare variables
// when variable are declared in
// RESCAL SCOPE: 
// inner function have access to the parent functions

// FUNCTION EXPRESSION
// Constant add = function(x,y){
// return x+y;
// }
// This function is called add and the whole thing is function expression
// this function has no name is this case
// Exercises
// let square = function(num){
//     return Math.pow(num,2); 
// }
// square(2)

// Higher order functions 
// passing a function to the nother function
// example
// function callTwice(func){
    //func(); this will call func
    // func();
//}
// function rollDie() { 
//     const roll = Math.floor(Math.random() * 6) + 1; 
//     console.log(rool); 
// }
// // lets call rollDie in our callTwice function 
// callTwice(roolDie); // this will call roll die twice in our function

// function callTenTimes(f){
    // for(let i=0; i<10; i++){
        //f() this will call f for tem times
    //}
//}
// RETURNING A FUNCTION AS A VALUE
// function isBetween(num) { 
//     return num >= 1 && num <= 10; 
// }
// Factory function return functions
// function makeBetweenFunc(min, max){
// return function (num){
// return num >= min && num <= max; 
//}
//}
// this is the factory functions that we can use anywhere
function makeBetweenFunc(min, max) { 
    return function (num) { 
        return num >= min && num <= max; 
    }
}
// if I call
const range = makeBetweenFunc(20, 100);  // this return a function and this 
// function is assisned to the value range and when we enter or evaluate 
// range as the following, we will have true or false 
range(10); 
// METHODES
// Methodes:every method is a function 
// when object of function are made then the function are methodes
// example: 
// let us create out methodes from objects
const myMath = {
    pi: 3.14,
    // this is a methode defined in the object
    // methodes are properties in object
    square: function (num) { 
        return num*num; 
    },
    cube: function (num) {
        return num ** 3; 
    },
    // new way to declare  methods of java scripts is a follows 
    square2(num) {  // this takes away the key word function 
        // 
        return num * num; 
    }
}
// This keyword in java script
// use inside the methode in the object
// this will refer to the property inside the object
// example
const cat = {
    name: "blue steele", 
    color: "grey", 
    breed: "scottish fold", 
    meow() { 
        console(`${this.name} this is the name of the cat`); // this will return the name of the cat in the 
        // cat object 
    }
}
// example of using this key word in our code
// let hen ={
//     name:"Helen", 
//     eggCount: 0, 
//     layAnEgg(){
//         this.eggCount++; 
//         return "EGG";
//     }
// }

// Try Catch: used to not propagate the error in the throughout the 
try {
// do this if there is an error  please go to the catch section
} catch(e) {
// if something goes wrong it will excute this
}
 // callbacks or array callsbacks
 // ForEach usage
 // this takes the elements from the array and then it prints those
 // but it applied to the  functions
 //example:
 // const numbers=[1,2,3,4,5,6,7]
 // function print(element){
// console.log(element);
 // }
 //* very crucial here
 // numbers.forEach (print) this is uncommon to pass the functinon
 // in for each
// array.forEach(function); 
// numbers.forEach(
// function(element){
    // console.log(element);
//}
//)
// another example is where we call the array of object
// let movies = [
//     {
//         title: "black panter",
//         ratings: 14
//     }
// ]
// movies.forEach(
//     function (movie) {
//         console.log(`${movie.title} / ${movie.ratings}`); 
//     }
// )
// for each is not used so often these days
// another call back function  is map 
// map return the array of the elements that it works on
// it will generate new array when producing element
// const numbers =[1,2,3,4,5,6,7]; 
// const doubles = numbers.map(function(num)
//{
    //return num*2;
 //}
 // the code above will generate a new array when each element will bd
 // doubled
 // this used to transform element and create a new array that
//)
// ARROW  FUNCTION
// const add=(x,y) =>{
    // return x + y;
//}
// examples of arrow function
// let greet=(name)=>{
//     return`Hey ${name}!`; 
// }
// the above function is like writing const add = function(x,y){
//return x * y; 
//}
//empty function
//const rollDie =() =>{
//return Math.floor(Math.random()*6) +1; 
//}
// when there is only one argument then what you do is like the following
// const rollDie = x =>{
//return Math.floor(Math.random() * 6) + 1; 
// }
// implicity return
// This is where we will use paranthessis insead of using the curl brackets
// const rollDie= () =>(
// Math.floor(math.random() * 6) + 1;
//     ) these parantesis are used when we want to do the implecity return
// this will automatically 
// you can also do this which is really cool
// const add = (a, b) => a + b;  this can be done in a single like 
// implicity works when there is only one expression to be returned 

//Map with the implicity returns
// const newMovies = movies.map(movie =>(
//`${movie.title} -${movie.score/10 }`; 
//)
//)
// the code above will return movies title and moviesscores/10
//SetTimeOut // used to set time when the 
setTimeout(() => {
    console.log("Hello!!"); 
}, 3000);
// the function above  wait for 3 seconds to print the word hello.
// and it does it once not twice or anything
//setInterval()
setInterval(() => {
    console.log(Math.random())
}, 2000) // this will print a random number each time after waiting for 
// two seconds and this will keep going and will not stop 
// this will never stop 
//
// to stop the interval set the interval id and then after that 
// you will be able to stop the interval
// example is like the following
 const id = setInterval(() => {
    console.log(Math.random())
 }, 2000)
// then you can stop this by doing the following 
clearInterval(id); // this will stop the interval that you have already set
//FILTER 
// USED TO MAKE THE SUBSET AND THIS CALL BACK USES TRUE OR FALSE
//example 
const numbers = [1, 2, 3, 4, 5, 6, 7]; 
numbers.filter(n => { 
    return n === 4; // this will create an array where the lement in that array 
    // will be
    // return n<5  this will ruturn the array with element less than five
    
})
// you can use  the same idea on object 
// const goodMovies = movies.filter(m => m.score>80)
// the expressiong above will produce the array of movies with ratings above 80 
//YOU CAN DO THESE MOVIES FILTERING BY ADDING MAP TO IT TOO  LIKE THE FOLLOWING
const goodMovies = movies.filter(m => m.score > 80).map(m.title);
// the code above will give us movies but only the titles

//EXAMPLE ON MAPS
// DO NOT ALTER THE FOLLOWING CODE:
// const fullNames = [{first: 'Albus', last: 'Dumbledore'},
// { first: 'Harry', last: 'Potter' },
// { first: 'Hermione', last: 'Granger' },
// { first: 'Ron', last: 'Weasley' },
// { first: 'Rubeus', last: 'Hagrid' },
// { first: 'Minerva', last: 'McGonagall' },
// { first: 'Severus', last: 'Snape' }];

// // Write your code here
// let firstNames =fullNames.map(name=>(
//     `${name.first}`))
// FILTER EXERCISE
// function validUserNames(usernames) {
//     // your code here
// FILTER IT THEN RETURNIT 
//    let username = usernames.filter(name =>{
//         return name.length<10; 
//     })
//     return username; 
//   }
// EVERY AND SOME THEY ARE BOTH BOOLEAN AND THEY CHECK IF THE ELEMENT 
// THIS MAKES SURE THAT THE WHOLE ARRAY IS TRUE ACCORDING TO THE CONDITION GIVEN
// EXAMPLE
// const exams = [80,90,78,70,90]
// we can check if everynumber is greater than 60
// we can do this using every
// exams.every(score => score >=60) this is like asking do all the number in the
// array greater or equal to 60. 
// some: test if some of the elements is true 
// you can say is there at least greater than 80
// exam.some(score => score >=80); this is like asking, is there any element that is 
// greater than 90. 
// example here
//function allEvens(array){
    //this will return true or false
//     return  array.every(num => num%2===0)
// }
// REDUCE: 
// REDUCE(ACCUMULATOR, CURRENTVALUE)
// EXAMPLE; 
const prices = [9, 10, 2, 2, 4, 56, 6];
prices.reduce((total, price)=> { 
    return total + price; 
})
// the code above work like the following
// please java go and take nine to be your cummulative call and then your
// current value is ten then add that 9 to ten and nex is your cummulative call 
// is 19 then your current value is 2 then add those two to ge 22 and then the 
// next values will be 21 after you add 2 to 19 
// this keeps going until we do not have element left in our array

// FIND MIN USING REDUCE
prices.reduce((min, price)=> { 
    if (price < min) { 
        return price;  // this price is used for the next iteration 
        // when mean it being found
    }
    return min
})
// REDUCE WITH OBJECTS
// movie is the object that is used in this example
//const hiestrated =  movies.reduce((bestmovie, currMovie) =>{
// if(currMovie.score > bestMovie.score){
  // return currMovie;
//}
// return bestMovie; 
//})
// you can initiate the initial variables
// for example we can specifiy where to start
// example
// evens.reduce((sun, num)=>{
// sum + num, 100; 100 act as the initial value or the begining value. 
// PLEASE GO READ MORE ABOUT REDUCE
//})
// ARROW FUNCTIONS AND "THIS KEY WORD"
// READ ABOUT THE ARROW FUNCTION WITH THIS KEY BECAUSE IT BEHAVES DIFFERENTLY
// NEW THINKS IN JAVA SCRIPT
// Default params(default parameters)
//example
// this will default to six in the following function
//function rollDie(numSides =6){
// return Math.floor(Math.random()*numSides) +1; 
//} 
// in the code above when you do not pass a parameter in the function then 
// the default will be 6
// you default parameter comes last 
// you can do this 
// function greet(message="hi there", person){
// console(`${message}, ${person}`)
//}
// SPREAD FOR FUNCTION CALLS
// this takes something like an array and divides it into small arguments 
// then the in  way that the element of this array can be extracted as one element
// for example: 
// we can do something like the following 
// let nums =[1,2,3,4,5,6]; 
// const max = Math.max(...nums);  the three dots will make the array
// of elements be evaluated element by element which was not going to be possible
// when we would have done just like
// const = max(nums)=> this would have been given us error
// another example
//console.log(...'hello') this will give us h e l l o these are printed 
//spread can be used to combine iterables
// const cats =['Blue', 'Scout','Rocket'];
// const dogs =['Rusty', 'Wyatt']
// Combine these two arrays like the following 
// const allPets=[...cats,...dogs]
// this will give me new array of cats and dogs combined 
// you can form array of string from the strin 
const hello = [..."hello1"]; // hello stores a string of hello1 due to 
// this was spread into a string 
//spread with string literals
// let cats{
//name: yves,
//age:20
//}
// let dogs{
//name: "Yvon", 
//age: 15
//}
const catDog = { ...dogs, ...cats } // this is used to combine the object
// if both object have smillar key then the second key or the cats key will 
//override the the dog key like name and age what we will see is Yvon and 15 
// which overrode yves and 20
// COPYING OBJECT CAN be useful when you get information from the form 
// and you want to add more varies
// example 
// const dataFromForm={
 //   email:'yves'
//}
// if I want to add id on data form
// i can do something like the following 
// const  newUser ={...dataFromForm, id:234, isAdmin: false}

//REST PARAMS
//it is used to collect all the value passed in the the function argument 
// let sum1 = function sum(...nums){
    // console.log(nums) // this will gives us array
//}
// example: 
// function sum(...nums){
//return nums.reduce((total, el) => total + el); 
//}
// it is called which means callect rests of the element 
// we can also do something like this 
// function raceResults(gold, silver, ...everyoneElse){
//     console.log(`gold goes to ${gold}`)
//     console.log(`silve goes to ${silver}`)
//     console.log(`copper goes to ${everoneElse}`) // this collect everyone else
// }
//call the function above
// raceResults('tomy', 'nani', 'mana', 'manu'); 
// this will gives us 
// gold goes to tomy
// silver goes to nani
// copper goes to mana, manu 

// Destructuring
//singling out element from a group such as array
// example of this is like the following 
// const scores =[5,4,3,2,1]
// const highScore = scores[0]; 
// const secondHighScore =scores[1]; 
// const [gold,silver, bronze] = scores // this will give m [5,4,3] frome 
// scores array 
// we can also do the following on the following array
//  const [gold,silver, bronze,...everyoneelse] = scores 
// this will give use 5,4,3 
// and everyone else will be [2,1]
//DESTRUCTURING OBJECTS
const user = {
    name: "Yves", 
    age:"20"
}
// you can single our name by using 
const name1 = user.name; 
// the statment above is same as 
//const { name } = user; // make a constant called name from user
// you can also do something lik the following 
const { name, age } = user;  // this gives you name and age

// Please go back to the check to
// Destructuring objects(lectures 238,239,and 237)
// Destructuring params 
// These are the lecture 


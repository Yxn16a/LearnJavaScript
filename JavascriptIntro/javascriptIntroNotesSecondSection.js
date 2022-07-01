
// prompt is good to call the user to enter values 
// but you can do this 
// console.log("Hello from our first js  file");
// let rating = prompt('enter a rating');
let rating = 5;
// if not the first thing then do the next thing  
if (rating <= 3) {
    console.log("do not be a loser man");
} else if (rating >= 5 || rating <= 10) {
    console.log("we know you were wrong")
} else {
    console.log("you suck")
}
// nested
// let password = prompt("enter password");
if (password.length >= 6) {
    if (password.indexOf('') === -1) {
        console.log("Valid password");
    } else {
        console.log("password can not contain space");
    }

} else {
    console.log("password is too short");
}
// logical and &&, logical or ||, logical not !
// indexof("6") this is asking the sting contains "6"
// and has preference over || 
// switch statment
const day = 2;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday")
        break; 
    default:
        console.log("no day found for this case")
}
// Arrays
let days = []; //empty array
// array can contain any type of variable, an int or a string
// each element has an index in java script and we start at zero 
// how to access the element in the array 
// days[0] is accessed like this, array has length that the
// we can do things like
// let array =["monday", "tuesday","wenesday","thursday"]; 
// I can say that replace monday by sunday
// this can be done like the following 
// array[0] = "Tuesday"; 
// array can change after they are declared
// array have uses push and pop 
//let movieLine =["paola"]
// mviewLine.push("Yves") this is pushed at the end of the array
// you can push many element like this push("Yves", "Yvon", "Cynthia")
// this will chage the length of the array 
// we use pop() used to remove element from the end of the array
// movieLine.pop(); 
// shift and and unshift
// shit operate at the beginning of the array
// unshift: add to the start
// shift romoves from the beginning of the array
// remove the firstline 
//movieLine.shift() returns the element that is in the front
// movieLine.unshift("VIP")  this will add vip at the beginning of  the array
// array methods 
// Concat forms a new array 
// example let cats =["blue", "green"]; 
// let dogs =["black", "mamba"];
// cats.concat(dogs) this is how concat is used and we get a new array 
//Includes: it returns a true or false 
// example cats.include("blue") this is like asking do cats array includes blue?
// example cats.include("blue");
// indexOf(value) : this give the index of the value 
//  if the index is not there then return -1
// Reverse: 
// cats.reverse; this is a destructive methodes
//SLICE: gives a portion of the array 
// example
// cats.slice(1) thi means that this will slice from index of one until the end of the 
// array
// cats.slice(1,4) from one to 3 not the last element 
// SPLICE:  does not make a copy
// cats.splice(5,1) remove from 5 and remove one element
// cats.splice(1,0,"new cat") this will say starting from 1 please do not delete 
// anything which is why we have zero there then instead add a newcat then cat will 
// be added after index one and nothing will be deleted
// you can also add more things like  in the following example
// cats.splice(3,0,"yellow_cat", "green_cat"); 
// this will add both of these cats on the list of the array that we want
// Sort methodes: not to great now  
// look at the the 
// [1] === [1] this is false because what is being compared is the memory 
// comparison which are different therefore, they are not equal

// you can do this is in the array 
// const nums=[1,2,3]; this is fine and we can update this but you can not reassign 
// which means you can not do this nums=1 this fails because you are reassining the 
// arrays
// NESTED ARRAYS: 
// access[1][2] this is in two dimansion arrays

// Oject literals: Key and values component


// we do not use index 
// object are literal that point to a location in memory
// const person={firstName: "Yves", latName: "Yvon", 
// exampele product ={

//     name:"Gummy Bears", 
//     inStock:true, 
//     price:1.99,
//     flavors:["grape","apple","cherry"]
// access of object literals: 

//product["name"] this gives us Gummy Bears, 
// the other access is to use 
// product.name; this is nice and easy
// each key is converted into string 
// whenever you make a number a key this key will be converted into a string 
// 
//PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }

// //YOUR CODE GOES DOWN HERE:
// let fullAddress = restaurant.address +", " +
// restaurant.city +", " + restaurant.state +", " + restaurant.zipcode;
// 
// Updating values in the obeject literals
// lets update the name 
//restaurant.name ="Yves"
// Array and object literals
// const commments=[
// {username: "Tammy", text:"lol", votes:9 }, 
// {username: "FishBoi", text:"glub", votes:1234 }
// ]
// acesso of glub 
// comments[1].text; 
// For loop in java scrip
// for(let i=0; i<=10; i++){
    // console.log("I love zoe");
// }
// for(let i=0; i<=20; i+=2){
    // console.log(i);
//}
// for(let i=100; i>=0; i--){
    // console.log(i);
//}
// iterating over an arrays in js 
// for(let i=0; i < animals.length; i++){
//  console.log(animal[i]);   
// }
// while loop: 
// while(num <10){
// let count =0; 
// while(count < 10) used when 
// { 
//console.log(count)
// count++; 
 //} while loop uses break
//FOR...OF 
// for( let sub of subreddits){
// this have a value and the the iterables values 
// }
//  example: for(let char of "hello world"){
//    console.log(char)
//}
// this is useful when you ilitrate on the string to check the character
//FOR --- OF EXAMPLE 
// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for(let sq of numbers){
//     console.log(Math.pow(sq,2)); 
// }
// literal objects are not ilitrated over becuase they are not itterable
// we use for -- in 
// for(let person in testscores){
// console.log(`${person} scores is ${testscores[person]}`); this will give you test scores of each person
// this is how we 
// object.enteries(testscores); This gives you the key and the values 
// object.values(testscores); // this gives you the test scores array
// and you can dinf the average like the following 
// let total=0; 
// let array length = object.values(testscores)
// for(let test of object.values(testscores)){
// total +=test; 
//}
// avarage = total/length
// for(let score of object.values(testscores)){
//
//}
// project to do list
//// DEFINE YOUR FUNCTION BELOW:
// replacing the string in the string value
// function capitalize(message){
//     let saveMessage = message.slice(0,1);
//     let messagecapital = saveMessage.toUpperCase(); 
//     let messagebe =  message.replace(message[0],messagecapital); 
//     return messagebe; 
// }
// RETURN DAYS PROBLEM
// DEFINE YOUR FUNCTION BELOW:
// function returnDay(num){
//     if(num > 7 || num < 1){
//         return null; 
//     }else{
//       let days =["Monday",
//             "Tuesday",
//             "Wednesday",
//             "Thursday",
//             "Friday",
//             "Saturday",
//             "Sunday"];
            
//    for(let i=0; i< days.length; i++){
       
//        if((i+1) === num){
//            return days[i]; 
//        }
//    }         
//     }  
// }
              // DOM
// DOM stands for document object model
// This is the Java script model 
// These are necessary 
// We can have a document then body and then headers, list and 
// so much more and we can control that using javascript
// these objects are connected 
// document is object that can be used to manipulate html
// this contains 
//Selecting DOM Element
//

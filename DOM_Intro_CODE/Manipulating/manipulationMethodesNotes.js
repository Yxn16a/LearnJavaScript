const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// Dom manipulation
//*********************************/

// manipulating  essentials
// let's start by selecting the document or the tag that we want to select
//const h1= document.querySelector('h1'); 

// innerText
//************/

// innertext: is the text that is between the text
// select inner text
// document.querySelector('p').innerText; this will select the text between the pragraph

//textContent: used to give the text 
//***********************************/

// document.querySelector('p').textContent; // this  code does the same as the code above
//  but it produces the line breaks but it does because we have some of the tags 
// that is unable to read. 
// looking at the anchor tags and googling  them 
// const alllinks = document.querySelectorAll('a');

// for (let link of alllinks) {
// change all innerText to I am a Link
//     link.innerText = 'I am a Link'; // this will change the link text to I am a Link
// }

// innerHTML:gives the intire tags
//************************************/

// This will return html tags and text between those tags 
// innerText: used to retrive the text between the tags
document.querySelector('h1').innerHTML = "<i>changedNew<i>"; // this is used to italize 
// the header one
// we can do sup script part of the the header like the following the please this can
// be applied to any tag
// this will add something to the 
// document.querySelector('h1').innerHTML: returns the inner text of the tag
document.querySelector('h1').innerHTML += '<sup>you got this</sup>';
//This is an example:
//document.querySelector('h1 span').innerHTML ="Disgusting": change inner text to html
// document.querySelector('img').src = 'https://devsprouthosting.com/images/chicken.jpg'; 
//  document.querySelector('h4').innerHTML ="<i>chicken<i>"

// ATTRIBUTES
//*******************************/

// How to access the attribute
// such as id
// you can change the id
// The.id is a property for the id and used to change the id properties
// document.querySelector('#banner').id= "whoops"; // this will change the id from 
// banner to whoops. 

// getAttribute
//***********************/

// used  getattribute value but it does not give the direct 
// link to the attribute
// example: 
// const firstLink = document.querySelector('a'); 
//firstLink.getAttribute('href'): gives the text link of the achor tag
// the other way to retrieve the link is to use
//document.querySelector('a').title;  this will return the title of the link
//document.querySelector('a').href; // this will return the href of the of the document

// example of using selectors: 
// const inputselect = document.querySelector('input(type = "text")) // select input where type is text
//const doneTodos = document.querySelectorAll('.done'); 
//const checkbox = document.querySelector('#scales');

// we can also set up an attribute unsing setAttribute('href','http://www.google.com'); 
//you can also so something like the following 
// document.querySelector('input[type ="text"]') this will select the input where type is text
// document.querySelectorAll('input')[1]  this will select the second input  and the 
// if we remove that one it will select the first input that it will encounter in the document

//STYLE SELECTION
//********************************/

// how do we select the the style and change it for our document
// Example
// you do something like the following and these properties are in the inline styles
h1.style.fontSize = "3em";
h1.style.color = 'green'; // this will make our h1 to be green in color
h1.style.border = '2px solid pink'; // this will make the border of h1 to have a border
// these code above only apply when we have defined inline css style

//  Class Selectors
//*********************** */

// The better way to style element with java scrip is to use a class 
// *****************************************************************

// therefore, you can have group style using javascript
//this gives you the number like font and color 
// Window.getComputedStyle(h1).fontSize.  this is how we see the size that we used for our values
// window.getComputedStyle(h1).color  this gives you the color of the header that was used

// there is something with the following code and we are going to be checking this again later 
// this is example from colten lecture
// const value = document.querySelector('#container');
// value.display='flex';
// //value.style.margin = 'auto'; 
// value.style.justifyContent ='center'; 
// const select1 = document.querySelector('img'); 
// select1.style.border ='150px'; 
// select1.style.borderRadius ='50%'; 

// SETATTRIBUTE
//************************/

// These how  to work with class in java script
const h2 = document.querySelector('h2');
h2.setAttribute('class', 'tocnumber'); // this is how you can add a class to
// and give it a characteristics that you want it to have 
// other better ways to have a class be recognized by javascript
// will look like the following 
// you will use class list
// const h2= document.querySelector('h2');
// h2.classList.dd('classs'); 
// h2.classList.add('onother class to add')
// h2.removeclass can be done like the following 
// h2.classList.toggle(purple) // this makes the class to be like certain way when
// clicked 

//CLASS LIST
//***************************/
// this is usefull to select the class of tags
// This helps to assign 
// const h2 = document.quarySelector('h2')
// h2.setAttribute('class','purple')

// CLASSLIST
//********************/
// You can use classList to control class on the element 
// h2.classlist
// h2.classList.add('purple')
// h2.clasList.add('border')
// where border are purple are classes defined in the css file
//You can remove the class
// h2.classList.remove('purple')
// h2.classList.toggle('purple') // this adds purple class to the tag
// h2.classList.toggle('purple') this removes the class purple

//EXAMPLE
//***********/
// this says that if you this element has class of highlight then git it highlight
let list = document.querySelectorAll('ul li'); 
for(let l of list){
    if(!l.getAttribute('highlight')){
        l.classList.toggle('highlight');
    }
}
//TRAVERSING PARENT/CHILD/SIBLINGS
// 



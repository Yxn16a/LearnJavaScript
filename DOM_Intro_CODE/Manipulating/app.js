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

// innerHTML: gives the intire tags
//************************************/

// this will return html tags and text between those tags 
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

// ATTRIBUTES
//*******************************/

// How do access the attribute
// such as i
// you can change the id
// document.querySelector('#banner').id= "whoops"; // this will change the id from 
// banner to whoops. 
// Get attribute
// used  getattribute value but it does not give the direct 
// link to the attribute
// example: 
// const firstLink = document.querySelector('a'); 
//firstLink.getAttribute('href')
// the other way to retrieve the link is to use
//document.querySelector('a').title;  this will return the title of the link
//document.querySelector('a').href; // this will return the href of the of the document

// example of using selectors: 
//const doneTodos = document.querySelectorAll('.done'); 
//const checkbox = document.querySelector('#scales');

// we can also set up an attribute unsing setAttribute('href','http://www.google.com'); 
//you can also so something like the following 
// document.querySelector('input[type ="text"]') this will select the input where type is text
// document.querySelectorAll('input')[1]  this will select the second input  and the 
// if we remove that one it will select the first input that it will encounter in the program 


// how do we select the the style and change it for our document
// Example
// you do something like the following 
h1.style.fontSize = "3em";
h1.style.color = 'green'; // this will make our h1 to be green in color
h1.style.border = '2px solid pink'; // this will make the border of h1 to have a border
// these code above only apply when we have defined inline css style
// The better way to style element with java scrip is to use a class 
// therefore, you can have group style 
// Window.getComputedStyle(h1).fontSize.  this is how we see the size that we used for our values
// window.getComputedStyle(h1).color  this gives you the color of the header that was used

// there is something with the following code and we are going to be checking this againg leater 
// const value = document.querySelector('#container');
// value.display='flex';
// //value.style.margin = 'auto'; 
// value.style.justifyContent ='center'; 
// const select1 = document.querySelector('img'); 
// select1.style.border ='150px'; 
// select1.style.borderRadius ='50%'; 

// thest wa to work with class in java script
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
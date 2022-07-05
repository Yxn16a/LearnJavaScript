// creating element on the page
// we create element such as 
//const newImage=document.createElement('img')
// we can append it to the page 
// document.body.appendChild(newImage): this will come as the last child of the body 
// we can add class to the image 
// newImage.classList.add('square')
// we can do something like the following:
// we can add header 
// const newH3 = document.createElement('h3')
// newH3.innerText ="Iam new here"
// document.body.appendChild(newH3)

// append
//********* */
// example
// const p = document.querySelector('p')
//p.append('I am new texy yaaaaaaa') : this append this text to the end  of the pragraph
//Prepend:  this add element at the beginning of the element 
//****** */
// example
// const newB = document.createElement('b')
// p.prepend(newB) : newB will be put at the beginning of the pragraph
//INSERTING ADJASEND CHIELD
//element.insertAdjacentElement(position, elements)
// example: 
//const h2 = documnt.createElement('h2')
//h2.append("You are adorable chicken")
//const h1 = document.querySelector('h1')
//h1.insertAdjacentElement('afterend',h2 ) : this is inserted next child

//After
//h1.after(h3) insert h3 after h1

// Insanity exercises
const div =document.querySelector('div');
let i=0; 
while(i<100){
const b = document.createElement('button');
b.innerText ="Hey!";
b.type ="button";
div.appendChild(b)
i++; 
}

// REMOVE A CHILD
// we select the parent and then we call the child
// example
// const firstLi = document.querySelector('li')
// then we do something like the following 
// ul.removeChild(firstLi) : you see how we called the parent ul
// we can use
//REMOVE: 
// const img = document.querySelector('img')
// img.remove :removes the image
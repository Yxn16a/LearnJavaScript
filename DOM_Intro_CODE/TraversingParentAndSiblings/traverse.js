//TRAVERSING PARENT/CHILD/SIBLINGS
// we can travel upward in the element using parent siblings relationship
// Example: 
// const firstBold = document.querySelector('b') this select first bold 
// element that it encounters 
// if we want to select its parent we can say that
// firstBold.parentElement:gives a pragraph where the element is 
// firstBold.parentElement: gives the body where the paragraph is located

// EXAMPLE
// const children=document.querySelector('p')
// undefined
// const paragraph=document.querySelector('p')
// undefined
// paragraph.children
// HTMLCollection(8) [b, b, a, a, a, a, a, a]
// paragraph.parentElement
// paragraph.children[0] this helps to iterate over children 

// SIBLINGS: helps to traverse from one sibring to the next siblings
// nextsiblings and previeous siblings gives us the node texts
// nextElementSiblings: gives us the next sibling in the the section
//example 
// const squareImage = document.querySelector('.square'); 
// squareImage.nextElementSibling : this gives the next sbling whose the class 
// is square
// we can also find the previous element which is 
// squareImg.previousElementSibling
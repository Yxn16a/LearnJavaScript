
// methodes that helps us to select elements
// GetElementById():  this will help us to select the element 
// please search the object that has the id that I selected 
// this will give you the object with the id 
// you can do something like this in console
// you  can do something like this too

// GetELementById("idName"):
//*******************************************/

// const element = document.getElementById('id'); : this will create element 
// element.dir(element)
// This will return objects that we can modify in  way we want

// Document.getElementByTagName("tagName"):
//*******************************************/

// document.getElementsByTagName('img'); this gives us all elements that are images
// This code above we will give us all images or anything whose tag is img
// const allImages = document.getElementsByTagName('img');
// for (let img of allImages) {
//     //console.log(img.src) // this gives you all the image sources 
//     // that we have on in our document
//     // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

//document.getElementByClassName('classname')
//**************************************************/
// this returns a collection of elements
// select by className 
//const classnames = document.getElementsByClassName('square');
//console.log(classnames);
//const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//      console.log(img); 
// change each image to source to the following link 
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

//document.querySelector('tag,or #id,or .class',or a[title ="Java"])
//*******************************************************************/

// QuerySelector gives the first element match 
//const selectPrag = document.querySelector('p');
//console.log(selectPrag); // this give the paragraph object that
// but it only gives the first paragraph that is found
// You can use selector to select by id using css syntax 
// const bannerid = document.querySelector('#banner'); // this select the document using 
// banner id
// you can select by class
//document.querySelector('.square'); // This will select the class with name of square
//document.querySelector('img:nth-of-type(2)'); // this select the second image 

//document.querySelectorAll('')
//*****************************************/


// const links = document.querySelectorAll('p a'); // select all the anchor tags that are nested in the paragraph
// for (let link of links) {
//     console.log(link); // this will print all o the anchor tags 
//     // we can use the querySelectors to access and change things on the 
// }

























// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }
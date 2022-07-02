// this is a better way to listen to the events
// we do it like the following 
const btn = document.querySelector('#v3');
// this is as the when clicked run the following code 
// that is what we put in the function that we use
btn.addEventListener('click', () => {
    alert("you clicked me")
})
// on double click then do the following
btn.addEventListener('dblclick', () => {
    alert("you clicked twice!")
})
// go to mdn to see events that you can work with 
btn.addEventListener('mouseup', () => {
    // this is the function that we want to run
    alert("you moved mouse up")
})
// why event listener
function shout() { 
    console.log("shout")
}
function twist() { 
    console.log("twist")
}
// the events listner is better becase we can list to many functions
const tas = document.querySelector('#tas'); 
// this will return twist and shout when one click on the botton
// tas.addEventListener('click', twist); 
// tas.addEventListener('click', shout);
// Event listner can acccep many option 

tas.addEventListener('click', shout); // this will only run once
tas.addEventListener('click', twist, { once: true });  
// look more about event listeners
// you can use remove
// most people used them
// and we are not excuting these functions the blowser is excuting them for me
// ANOTHER EXAMPLE

const hbtn = document.querySelector('#hello'); 
hbtn.addEventListener('click', () => {
    console.log("hello");
});

const bbtn = document.querySelector('#goodbye'); 
btn.addEventListener('click',()=>{
    console.log("goodbye"); 
})
const btn = document.querySelector('button');
btn.addEventListener('click', (evt) => {
    //  this is the event object created at click: 
    // we use this key event to list to keyboard click
    // such as clicking the arrow keys
    console.log(evt);
})
// you can do something like the following where you print something when a key is 
// pressed down 
// const inputs = document.querySelector('input'); 
// inputs.addEventListener('keydown', () => { 
//     console.log("keydown"); 
// })
// // this files when the key is  released
// inputs.addEventListener('keyup', () => { 
//     console.log("keyup"); 
// })
// lets listen to the keyboard
const inputs = document.querySelector('input');
// e is the event keyword or objects
// inputs.addEventListener('keydown', (e) => {
//     console.log(e.key); // gives the name of the key clicked on keyboard
//     console.log(e.code); // gives the key code that was clicked on the key board
//     // code does not change depeding to the language therefore if you would like to 
//     // create a grobal game, it make sense to use e.code 
// })
// you can do something like the following too
// you can limit the keys that one used to play lets say you want the game player 
// to only us up and down arrow keys
// you can do some thing like the following 
window.addEventListener('keydown', function (e){
    switch (e.code) {
        case 'ArrowUp':
            console.log("up!")
            break; 
        case 'ArrowDown':
            console.log("down!")
            break; 
  }
})
// These are used to do something when someone is typing input 
const inputs = document.querySelector('#inputEvent');
const selecHeader = document.querySelector('#hOne');
// this input  event is used to file the text or change the test as you type
// we use this input event when we write comment and we can see what we are typing as 
// we type
// input Event
//==================
inputs.addEventListener('input', function (e) {
    // when you type, please make the header value 
    // equal to what you typed
    selecHeader.innerText = inputs.value;
});

// Change event
// ===============
// this change fires whenever we change or press the key 
// inputs.addEventListener('change', function (e) { 
//    console.log("here you go ")
// })

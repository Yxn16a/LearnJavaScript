const btn = document.querySelector('#v2'); 
btn.onclick = function () { 
    console.log("You clicked me")
    console.log("I hope it worked")
}
function scream() { 
    console.log("hahdhdhdhdhdhdhd")
}
btn.onmouseenter = scream; 
// chek different properties from mdn documentation for on click or on hover 
// another example: 
document.querySelector('h1').onclick = function () { 
    alert('you clicked me'); 
}
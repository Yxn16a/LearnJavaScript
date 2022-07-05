// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'olive'; 
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// can create a function that we can 
// you can do something like the following 
const delayedColorChange = (newColor, delay,doNext) => { 
    setTimeout(() => { 
        document.body.style.backgroundColor = newColor; 
        doNext && doNext() 
    },delay)
}
// then you can call the function as the following 
// we use callbacks to run when one thing changes
//
delayedColorChange('red', 1000, () => { 
    delayedColorChange('orange', 1000, () => { 
        delayedColorChange('green', 1000, () => { 
            delayedColorChange('blue', 1000, () => { 
            })
        })
    })
});
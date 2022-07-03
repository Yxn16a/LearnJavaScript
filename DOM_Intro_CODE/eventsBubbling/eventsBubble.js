// this bubbles event from the inner to the outer tagls
// to stop bubbling
// we do e.stopPropagation
const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    // this function will stop the event to bubble up from inner to outer
    // this helps to control the propagation of the events
    e.stopPropagation();
})
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
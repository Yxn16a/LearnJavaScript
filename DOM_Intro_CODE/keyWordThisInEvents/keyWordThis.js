// how does the word this works in the the files
const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r < 10 && g < 20 && b < 50) {
        return `rgb(${r + 50},${g + 50},${b + 50})`
    } else {
        return `rgb(${r},${g},${b})`
    }
}

const btns = document.querySelectorAll('button');
for (let btn of btns) {
    // since we used this we can used colorize function here
    btn.addEventListener('click', colorize)
}
const headers = document.querySelectorAll('h2');

for (let hd of headers) {
    // since we used this we can used colorize function here
    hd.addEventListener('click', colorize)
}
// this function will be used somewhere
// this will mean that the function will be called when the clicking or another event happens
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}
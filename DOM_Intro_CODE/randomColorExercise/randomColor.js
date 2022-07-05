const btn = document.querySelector('#colorchange'); 
const bodyColor = document.querySelector('body'); 
const h1 = document.querySelector('h1'); 
btn.addEventListener('click',function() {
    const newColor = makeRandomColor(); 
    bodyColor.style.backgroundColor = newColor;
    h1.innerText = newColor; 
})
const makeRandomColor = () => { 
    const r = Math.floor(Math.random() * 255); 
    const g= Math.floor(Math.random() * 255); 
    const b = Math.floor(Math.random() * 255); 
    if (r < 10 && g < 20 && b < 50) {
        return `rgb(${r + 50},${g + 50},${b + 50})`
    } else { 
        return `rgb(${r},${g},${b})`
    }
    
}

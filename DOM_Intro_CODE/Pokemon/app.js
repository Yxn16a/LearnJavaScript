// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    // create a div 
    const pokemon = document.createElement('div');
    // add a class to the div 
    pokemon.classList.add('pokemon');
    // create element of type span
    const label = document.createElement('span');
    // put the text inside the span
    label.innerText = `#${i}`;
    //create image tag
    const newImg = document.createElement('img');
    // create pokemon image 
    newImg.src = `${baseURL}${i}.png`

// in the add a child  to the div the image
    pokemon.appendChild(newImg);
    // used to add the lebel 
    pokemon.appendChild(label);
    // add the child 
    container.appendChild(pokemon)
}

// now practicing with filter function 
// this filters the array that is greater than one
let numbers = [1, 2, 3, 5]
let num = numbers.filter((n) => {
    return n > 1; 
})
console.log(num);

const fullNames = [{first: 'Albus', last: 'Dumbledore'},
{ first: 'Harry', last: 'Potter' },
{ first: 'Hermione', last: 'Granger' },
{ first: 'Ron', last: 'Weasley' },
{ first: 'Rubeus', last: 'Hagrid' },
{ first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }];

let firstName = fullNames.map((name) => { 
    return name.first; 
})
console.log(firstName); 

let Names = firstName.filter((name) => { 
    return name.length > 6; 
})
console.log(Names); 

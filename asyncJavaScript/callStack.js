// This helps js to track where it is during
// processing
// during call stack java script call different functions
// you can use call stack
// example
const multiply = (x, y) => x * y; 
const square = x => multiply(x, x); 
const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
// this function will not exctue until all the other function are called 
// this means the call to square of 1 then square of one calls multiply function 
// when the return in obtained then the function is removed from the call stack 
// and the process repreat for 2 and 3 
// you can see the call stack when we run our code in the browser and go to sources 
// and step out through our code
isRightTriangle(1, 2, 3)

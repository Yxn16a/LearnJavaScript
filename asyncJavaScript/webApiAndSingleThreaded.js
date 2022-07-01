// single threaded: it is not multitasking 
// run one line of code
// there are ways used by js to go around running one line at time 
// we can use timeout 
// the browser add the timeout to the browser and after those 
// it is like hello browser can you handle this for me
// can you count for me and when it time please call me and i will keep excuting my code
//example
console.log("Sending request to the server");
// during this wait time the browser will count for js  and then 
// the browser will call js to keep excuting the code
// js send this setTimeout to web api
setTimeout(() => {
    console.log("here are your data from the server")
}, 3000);
console.log("I am at the end of the file")
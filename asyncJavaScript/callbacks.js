// let says we want to change the color of html a
// at certain period of tim 
// calls backs work after the activities that we are targeting 
// these act as a chain of activities to be done after a certain excusion 
 // example: 
searchMoviesApi('amadeus', () => { 
    saveToMyDB(movies, () => { 
        // if it works, run this
    }, ()=> { 
     // if it does not work run this 
    })
},() => { 
 // if api is down, or request failed run this
})
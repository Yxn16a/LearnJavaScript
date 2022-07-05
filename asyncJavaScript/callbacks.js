// calls backs work after the activities that we are targeting 
// these act as a chain of activities to be done after a certain excusion 
// example: 
//(the following code says that if you find amadeus please send that to the following 
// function of savingToMyDB)
searchMoviesApi('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works, run this call back 
    }, () => {
        // if it does not work run this call back
    })
}, () => {
    // if api is down, or request failed run this
})
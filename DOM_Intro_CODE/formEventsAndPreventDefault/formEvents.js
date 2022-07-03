// form events
// what happens when we submit a form
// how do we do something on the form and the form stays
// something like telling the user that we do not deliver to that place
// when someone enters a wrong zipcode
const forms = document.querySelector("#shelterForm");
const inputs = document.querySelector("#catName");
const list = document.querySelector("#list")
forms.addEventListener("submit", (e) => {
    // tells the browser that do not do what you do of automatic behavior 
    // which is showing the message and keeps going instead show what we want to to show 
    // to the customers
    e.preventDefault();
    // this will print the input in the cansole
    const catName = inputs.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.append(newLI);
    inputs.value = "";
    // this works as the following
    // stop the form
    // take the value from the form
    // then display the form
})
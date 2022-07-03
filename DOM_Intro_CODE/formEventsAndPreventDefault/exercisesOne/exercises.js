// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('#formRecord');
const inputProduct = document.querySelector('#product');
const inputQuantity = document.querySelector('#qty');
const list = document.querySelector('#list');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newProduct = inputProduct.value;
    const newQuantity = inputQuantity.value;
    const newQuantityList = document.createElement("LI");
    const newProductList = document.createElement("LI");
    newQuantityList.innerText = newQuantity;
    newProductList.innerText = newProduct;
    list.append(newProduct);
    list.append(newQuantity);
    inputProduct.value = "";
    inputQuantity.value = "";
});
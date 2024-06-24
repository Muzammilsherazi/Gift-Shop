import { Data } from '../productData.js'
 
// variables
let getProductsData = Data; //get products data
let productId = new URLSearchParams(window.location.search).get("id");
let productId_2 = new URLSearchParams(window.location.search).get("id2");
let comparingProducts = document.getElementById("comparing-products");



// function for display data for comparison dynamically from products data 
function displayCompareProducts() {
    comparingProducts.innerHTML = `<div id="headings">
    <h4>Product Name:</h4>
    <h4>Brand Name:</h4>
    <h4>Product Price:</h4>
    <h4>Product Description:</h4>
    <h4>Product Rating:</h4>
</div>
<div id="first-product">
    <img src="${getProductsData[productId].image}" alt="">
    <div class="detail">
        <p>${getProductsData[productId].productName}</p>
        <p>${getProductsData[productId].brand}</p>
        <p>Rs: ${getProductsData[productId].price}</p>
        <p>${getProductsData[productId].description}</p>
        <p class="rating">${getProductsData[productId].rating}</p>
    </div>
</div>    
<div id="second-product">
<img src="${getProductsData[productId_2].image}" alt="">
<div class="detail">
    <p>${getProductsData[productId_2].productName}</p>
    <p>${getProductsData[productId_2].brand}</p>
    <p>Rs: ${getProductsData[productId_2].price}</p>
    <p>${getProductsData[productId_2].description}</p>
    <p class="rating">${getProductsData[productId_2].rating}</p>
</div>
</div>`

}
displayCompareProducts();


window.goToHome = () => {
    window.location.href = "../index.html";
}
window.goToCart = () => {
    window.location.href = "../Cart Page/cart-page.html";
}
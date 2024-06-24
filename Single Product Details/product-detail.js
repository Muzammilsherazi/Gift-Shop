import { Data } from '/productData.js';

let allproductsData = Data;

// get elemet by id's
let mainImage = document.getElementById("main-img");
let detail_section = document.getElementById("detail-section");
let brandRelatedProduct = document.getElementById("related-products");

let productId = new URLSearchParams(window.location.search).get("id"); // get selected products id from query parameter

// filter function for get selected products id
let selectedProduct = allproductsData.filter((product)=> product.id == productId);

// filter function for display brand related product of selected product
let filterBrandProduct = allproductsData.filter((product)=> product.brand == selectedProduct[0].brand && productId != product.id);

// function for display selected product detail
function displayProduct(){
    detail_section.innerHTML = 
    `<div class="main-pic">
        <h3>${allproductsData[productId].brand}</h3>
        <img src="${allproductsData[productId].image}" id="main-img">
    </div>

    <div id="detail">
        <h1 class="title">${allproductsData[productId].productName}</h1>
        <h4 class="brand">Brand: &nbsp; <span>${allproductsData[productId].brand}</span></h4>
        <h3 class="price">Price: &nbsp; <span>Rs: ${allproductsData[productId].price}</span></h3>
        <div class="description">
            <h3>Description:</h3>
            <p>
                ${allproductsData[productId].description}
            </p>
        </div>
        <div id="rating">
            <h4>Rating:</h4>
            <p>${allproductsData[productId].rating}</p>
        </div>
        <div id='btns'>
            <button class="compare-btn" onclick="window.compare(${allproductsData[productId].id})">Compare</button>
            <button onclick="window.addCart(${allproductsData[productId].id})" class="addCart-btn">Add To Cart</button>
            <a href='../products detail.docx' download><i class="fa-solid fa-download"></i></<a>
        </div>
    </div>`

}
displayProduct();


// function for display brand related products
filterBrandProduct.slice(0,4).forEach(relProduct => {
    brandRelatedProduct.innerHTML += `<div onclick='window.redirect(${relProduct.id})' class="products">
    <div class="brand">${relProduct.brand}</div>
    <img src="${relProduct.image}" alt="">
    <div class="name-and-price">
        <h4>${relProduct.productName}</h4>
        <h5>Rs: ${relProduct.price}</h5>
    </div>
    <div class="description">
        <p>${relProduct.description}</p>
    </div>
    <div class="rating">
        ${relProduct.rating}
    </div>
</div>`    
});


// function for get id for related products
window.redirect = (id) => {
    let anchorTag = document.createElement("a");
    anchorTag.href = "/Single Product Details/product-detail.html?id=" + id;
    anchorTag.click();}

// function for get id for compare products in compare page
window.compare = (id) => {
 let anchorTag = document.createElement("a");
 anchorTag.href = "/Comparision Products/comparision-products.html?id=" + id;
 anchorTag.click();
}

window.addCart = (id) => {
    let cartProductData = JSON.parse(localStorage.getItem("cart products")) || [];
    let filteredProduct = allproductsData.find(prod => prod.id == id);
    let existingIndex = cartProductData.findIndex(item => item.id == id);
    let cart_count = document.querySelector("#cartIcon p")
    
    if(existingIndex !== -1){
        cartProductData[existingIndex].quantity += 1;
    }
    else{
        cartProductData.push(filteredProduct);
        cart_count.innerHTML = cartProductData.length;
    }

    localStorage.setItem("cart products", JSON.stringify(cartProductData));
}

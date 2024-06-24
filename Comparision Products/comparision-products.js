import { Data } from '/productData.js'

// get variables
let getProductsData = Data;
let similarCat = document.getElementById("products");
let productId = new URLSearchParams(window.location.search).get("id");
let selectedProduct = getProductsData.filter((product)=> product.id == productId);


// function for display product for comparision 
let filterCatProduct = getProductsData.filter((product)=> product.category == selectedProduct[0].category && productId != product.id);
filterCatProduct.forEach(element => {
similarCat.innerHTML += `<div class="products" onclick="window.forCompare('${productId}','${element.id}')">
<div class="brand">${element.brand}</div>
<img src="${element.image}" alt="">
<div class="name-and-price">
    <h4>${element.productName}</h4>
    <h5>Rs: ${element.price}</h5>
</div>
<div class="description">
    <p>${element.description}</p>
</div>
<div class="rating">
    ${element.rating}
</div>
</div>`    
});



window.forCompare = (id_1 , id_2) => {
    let anchorTag = document.createElement("a");
    anchorTag.href = "/Compare Page/compare-page.html?id=" + id_1 +  "&id2=" + id_2;
    anchorTag.click();
}
window.goToHome = () => {
    window.location.href = "../index.html";
}
window.goToCart = () => {
    window.location.href = "../Cart Page/cart-page.html";
}
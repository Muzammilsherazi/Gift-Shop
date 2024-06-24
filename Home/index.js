import { Data } from "../productData.js";
// import { Data } from "/productData.js";

let productData = Data;

let our_latest_products = productData.slice(3, 7);
let populor_this_week = productData.slice(13, 21);

// get variables
let latest_products = document.getElementById("products");
let populor_products = document.getElementById("populor-product");

// for display product dynamically from  products data
our_latest_products.forEach(ourProduct)
function ourProduct(ourprod) {
    latest_products.innerHTML += `<div id="one" class="product" data-aos="flip-left" data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
    <img src="${ourprod.image}" alt="">
    <div class="name-and-price">     
        <h4>${ourprod.productName}</h4>
        <h5>Rs: ${ourprod.price}</h5>
 </div>
    <div class="description">
        <p>${ourprod.description}</p>
    </div>
    <div class="rating">
    ${ourprod.rating}
    </div>
    <button class="add-cart" onclick="addCart(${ourprod.id})">Add To Cart</button>
</div>`
}

populor_this_week.forEach(populorProduct)
function populorProduct(populorProd) {
    populor_products.innerHTML += `<div class="products" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
    <img src="${populorProd.image}" alt="">
    <div class="name-and-price">     
        <h4>${populorProd.productName}</h4>
        <h5>Rs: ${populorProd.price}</h5>
    </div>
    <div class="description">
        <p>${populorProd.description}</p>
    </div>
    <div class="rating">
    ${populorProd.rating}
    </div>
    <button class="add-cart" onclick="window.addCart(${populorProd.id})">Add To Cart</button>
</div>`
}


window.addCart = (id) => {
    let cartProductData = JSON.parse(localStorage.getItem("cart products")) || [];
    let filteredProduct = productData.find(prod => prod.id == id);
    console.log(filteredProduct);
    let existingIndex = cartProductData.findIndex(item => item.id == id);
    let cart_count = document.querySelector("#cartIcon p")

    if (existingIndex !== -1) {
        cartProductData[existingIndex].quantity += 1;
    }
    else {
        cartProductData.push(filteredProduct);
        cart_count.innerHTML = cartProductData.length;
    }

    localStorage.setItem("cart products", JSON.stringify(cartProductData));
}







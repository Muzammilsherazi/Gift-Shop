import { Data } from "/productData.js";
import { category } from "/productData.js";
import { brand } from "/productData.js";

// get elements 
let productData = Data;
let categories = category;
let Brand = brand;

let productCollection = document.getElementById("collection");
let productCategory = document.getElementById("productCategory");
let brandCategory = document.getElementById("brandCategory");

// display all products data from the help of array method ForEach()
function displayProducts(getArray) {
    let catName = new URLSearchParams(window.location.search).get("name");
    if (catName) {
        getArray = getArray.filter((prod) => prod.category == catName);
    }
    productCollection.innerHTML = ""
    getArray.forEach((displayArray) => {
        productCollection.innerHTML += `<div onclick='window.redirect(${displayArray.id})' class="products" id='prod'>
        <div class="brand">${displayArray.brand}</div>
        <img src="${displayArray.image}" alt="">
        <div class="name-and-price">
            <h4>${displayArray.productName}</h4>
            <h5>Rs: ${displayArray.price}</h5>
        </div>
        <div class="description">
            <p>${displayArray.description}</p>
        </div>
        <div class="rating">
            ${displayArray.rating}
        </div>
    </div>`
    })

    // forEach method on categories array for display categories array value 
    // here each element have onclick function for display selected category products
    categories.forEach((allcat) => {
        productCategory.innerHTML += `<h5 class="forhighlight" onclick="window.showProducts('${allcat}',1)">${allcat}</h5>`
    })

    // forEach method on brand array for display brands array value 
    // here each element have onclick function for display selected brand products
    Brand.forEach((allbrand) => {
        brandCategory.innerHTML += `<h5 class="forhighlight" onclick="window.showProducts('${allbrand}',2)">${allbrand}</h5>`
    })

    if (catName) {
        let sideBartext = document.querySelectorAll(".forhighlight");
        sideBartext.forEach((highlightedText) => {
            highlightedText.style.color = "#2a3439";
            if (highlightedText.innerHTML == catName) {
                highlightedText.style.color = "#960018";
            }
        })
    }
}

displayProducts(productData);

// function for display selected products
window.showProducts = (name, type)=>{
    let sideBartext = document.querySelectorAll(".forhighlight");
    sideBartext.forEach((highlightedText) => {
        highlightedText.style.color = "#2a3439";
        if (highlightedText.innerHTML == name) {
            highlightedText.style.color = "#960018";
        }
    })
    let filterProducts = productData.filter((product) => type == 1 ? product.category == name : product.brand == name);
    productCollection.innerHTML = "";
    filterProducts.forEach((filterProduct) => {
        productCollection.innerHTML += `<div onclick='redirect(${filterProduct.id})' class="products" id='prod'>
        <div class="brand">${filterProduct.brand}</div>
        <img src="${filterProduct.image}" alt="">
        <div class="name-and-price">
            <h4>${filterProduct.productName}</h4>
            <h5>Rs ${filterProduct.price}</h5>
        </div>
        <div class="description">
            <p>${filterProduct.description}</p>
        </div>
        <div class="rating">
            ${filterProduct.rating}
        </div>
    </div>`
    })

}
window.redirect = (id) => {
    let anchortag = document.createElement("a");
    anchortag.href = "/Single Product Details/product-detail.html?id=" + id;
    anchortag.click();
}

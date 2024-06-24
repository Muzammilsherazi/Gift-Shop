let cartProductsData = JSON.parse(localStorage.getItem("cart products"));
let emptyText = document.querySelector("h3");
let cartProducts = document.querySelector("section #cartProducts");
let total_price = document.querySelector(".total-price span");

let checkOut_btn = document.getElementById("checkout-btn");
checkOut_btn.onclick = function (e) {
    e.preventDefault()
    let loggedIn = JSON.parse(localStorage.getItem("logged-in-users"));
    if (loggedIn) {
        window.location.href = "/Billing Page/billing.html";
    }
    else {
        sessionStorage.setItem("goback-url", "/Cart Page/cart-page.html");
        window.location.href = "/Login-Signup Page/login-page.html";
    }
}



function displayCartProducts() {
    let totalPrice = 0;
    cartProducts.innerHTML = ""
    if (cartProductsData == null || cartProductsData == "") {
        let h3 = document.createElement("h3");
        h3.innerHTML = "Your Cart Is Empty!";
        cartProducts.appendChild(h3);
        total_price.innerHTML = "<b>Total Price:</b> Rs: 0.00";
        document.querySelector(".secondBtn").style.display = "none";
    }
    else {
        cartProducts.innerHTML = "";
        cartProductsData.forEach(cartProduct => {
            let prodTotalPrice = cartProduct.price * cartProduct.quantity;
            totalPrice += prodTotalPrice;
            cartProducts.innerHTML += `
            <div class="cartProduct">
                <img src="${cartProduct.image}" alt="">
                <p class="name">${cartProduct.productName}</p>
                <p class="price">Rs: ${cartProduct.price}</p>
                <div class="qty">
                    <div class="plus" onclick="plusQuantity(${cartProduct.id})"><i class="fa fa-plus" aria-hidden="true"></i></div>
                    <p class="number" data-product-id="${cartProduct.id}">${cartProduct.quantity}</p>
                    <div class="minus" onclick="minusQuantity(${cartProduct.id})"><i class="fa fa-minus" aria-hidden="true"></i></div>
                </div>
                <button type="button" onclick="removeProduct(${cartProduct.id})" id="remove-btn">Remove</button>
            </div>`;
        });
        total_price.innerHTML = "Rs: " + totalPrice + ".00"; // Display total price
        let Total = totalPrice
        localStorage.setItem("total price", Total);
    }
}

function plusQuantity(productId) {
    cartProductsData.forEach(cartProduct => {
        if (cartProduct.id === productId) {
            cartProduct.quantity++;
            displayCartProducts();
            return false;
        }
    });
    localStorage.setItem("cart products", JSON.stringify(cartProductsData));
}

function minusQuantity(productId) {
    cartProductsData.forEach(cartProduct => {
        if (cartProduct.id === productId && cartProduct.quantity > 1) {
            cartProduct.quantity--;
            displayCartProducts();
            return false;
        }
    });
    localStorage.setItem("cart products", JSON.stringify(cartProductsData));
}

function removeProduct(productId) {
    let filteredProduct = cartProductsData.find(prod => prod.id == productId);
    let delProduct = cartProductsData.indexOf(filteredProduct);
    let cart_count = document.querySelector("#cartIcon p")
    if (delProduct !== -1)
        cartProductsData.splice(delProduct, 1);
    displayCartProducts();
    cart_count.innerHTML = cartProductsData.length;

    localStorage.setItem("cart products", JSON.stringify(cartProductsData))
}


displayCartProducts();


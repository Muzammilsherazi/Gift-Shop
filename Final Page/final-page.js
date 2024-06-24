let body = document.querySelector("body");
let userInfo = JSON.parse(localStorage.getItem("user info"));
let userDetail = document.getElementById("user-information");


let cartProductsData = JSON.parse(localStorage.getItem("cart products"));
let subTotal = localStorage.getItem("total price");
let sideCartsubTotal = document.querySelector(".sub-total span");
let Total = document.querySelector(".total span");
let Tax = parseFloat(document.querySelector(".tax span").innerHTML);
let deliveryCharges = parseInt(document.querySelector(".charges span").innerHTML);

// side cart for responsive
let sideCart = document.getElementById("side-cart");
let shades = document.getElementById("shades");
let SideCartProducts = document.getElementById("side-cart-products");
let sideCartTotalPrice = document.querySelector(".total-amount span");



userInfo.forEach(information => {
    userDetail.innerHTML = `<div id="first-name" class="info">
    <p>First Name</p>
    <span>${information.first_name}</span>
</div>
<div id="last-name" class="info">
    <p>Last Name</p>
    <span>${information.last_name}</span>
</div>
<div id="email-address" class="info">
    <p>Email Address</p>
    <span>${information.email}</span>
</div>
<div id="phone-number" class="info">
    <p>Phone Number</p>
    <span>${information.phone_number}</span>
</div>
<div id="city" class="info">
    <p>City</p>
    <span>${information.city}</span>
</div>
<div id="Address" class="info">
    <p>Address</p>
    <span>${information.address}</span>
</div>`
});

function openSideCart(){
    SideCartProducts.innerHTML = ""
    let subTotalValue = parseFloat(subTotal);
    let total = subTotalValue + Tax + deliveryCharges;
    cartProductsData.forEach(cartProduct => {
        let totalPrice = cartProduct.quantity * cartProduct.price;
        SideCartProducts.innerHTML += `
        <div class="each-product">
        <div class="left">
            <img src="${cartProduct.image}" alt="">
            <div class="detail">
                <h5>${cartProduct.productName}</h5>
                <div class="qty">
                    <p>QTY:</p>
                    <span>${cartProduct.quantity}</span>
                </div>
                <div class="per-qty">
                    <p>Per Price:</p>
                    <span>${cartProduct.price}</span>
                </div>
                <div class="rating">
                    ${cartProduct.rating}
                </div>
            </div>
        </div>
        <h5 class="price">Rs: ${totalPrice}</h5>
        </div>
        <hr class="line">`
    });
    
    body.style.overflow = "hidden";
    sideCartsubTotal.innerHTML = subTotal + ".0"; 
    Total.innerHTML = "Rs: " + total.toFixed(1);
    sideCart.style.transform = "translateX(0)";
    sideCart.style.transition = "0.4s ease"

    shades.style.display = "block"; 
}

function closeSideCart(){
    shades.style.display = "none"; 
    sideCart.style.transform = "translateX(100%)";
    sideCart.style.transition = "0.4s ease"
    body.style.overflow = "auto";
}


function orderPlaced(){
    document.getElementById("shades").style.display = "block";
    document.getElementById("order-placed").style.display = "flex"
}

function OK(){
    document.getElementById("shades").style.display = "none";
    document.getElementById("order-placed").style.display = "none"
    window.location.href = "/Home/index.html";
}
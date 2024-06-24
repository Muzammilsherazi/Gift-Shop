
let body = document.querySelector("body");
let cartProductsData = JSON.parse(localStorage.getItem("cart products"));
let subTotal = localStorage.getItem("total price");

// side cart 
let sideCart = document.getElementById("side-cart");
let shades = document.getElementById("shades");
let SideCartProducts = document.getElementById("side-cart-products");
let sideCartsubTotal = document.querySelector(".sub-total span");
let Total = document.querySelector(".total span");
let Tax = parseFloat(document.querySelector(".tax span").innerHTML);
let deliveryCharges = parseInt(document.querySelector(".charges span").innerHTML);

// input fileds
let firstName = document.getElementById("1st-name");
let secName = document.getElementById("2nd-name");
let email = document.getElementById("email-add");
let phoneNumber = document.getElementById("phone");
let address = document.getElementById("address");
let city = document.getElementById("city");

// input errors
let firstNameErr = document.getElementById("1st-nameError");
let secNameErr = document.getElementById("2nd-nameError");
let emailErr = document.getElementById("emailError");
let numberErr = document.getElementById("numberError");
let addressErr = document.getElementById("addressError");
let cityErr = document.getElementById("cityError");

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
    sideCart.style.transform = "translate(0px)";
    sideCart.style.transition = "0.4s ease"
    shades.style.display = "block"; 
}

function closeSideCart(){
    shades.style.display = "none"; 
    sideCart.style.transform = "translateX(100%)";
    sideCart.style.transition = "0.4s ease"
    body.style.overflow = "auto";
}

function checkOutBtn() {
    let numLength = phoneNumber.value.length;
    let forEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (firstName.value == "") {
        firstNameErr.style.visibility = "visible";
        firstName.style.border = "1px solid #960018";
    }
    else if (secName.value == "") {
        secNameErr.style.visibility = "visible";
        secName.style.border = "1px solid #960018";
    }
    else if (email.value == "") {
        emailErr.style.visibility = "visible";
        email.style.border = "1px solid #960018";
    }
    else if(!forEmail.test(email.value)){
        emailErr.style.visibility = "visible";
        emailErr.innerHTML = "Please enter valid email address!"
        email.style.border = "1px solid #960018";
    }
    else if (phoneNumber.value == "") {
        numberErr.style.visibility = "visible";
        phoneNumber.style.border = "1px solid #960018";
    }
    else if(numLength <= 10){    
        numberErr.style.visibility = "visible";
        numberErr.innerHTML = "Please enter correct number!"
        phoneNumber.style.border = "1px solid #960018";
    }
    else if (city.value == "") {
        cityErr.style.visibility = "visible";
        city.style.border = "1px solid #960018";
    }
    else if (address.value == "") {
        addressErr.style.visibility = "visible";
        address.style.border = "1px solid #960018";
    }
    else {
        let inputsData = {
            first_name : firstName.value,
            last_name : secName.value,
            email: email.value,
            phone_number : phoneNumber.value,
            address : address.value,
            city : city.value,
        }

        let userInfo = [];
        userInfo.push(inputsData);
        localStorage.setItem("user info", JSON.stringify(userInfo));
        let anchortag = document.createElement("a");
        anchortag = window.location.href ="/Final Page/final-page.html";
    }
}

function clearFoam(){
    firstName.value = "";
    secName.value = "";
    email.value = "";
    phoneNumber.value = "";
    address.value = "";
    city.value = "";    
}

function fillInput() {
    firstNameErr.style.visibility = "hidden";
    firstName.style.border = "1px solid silver";

    secNameErr.style.visibility = "hidden";
    secName.style.border = "1px solid silver";

    emailErr.style.visibility = "hidden";
    email.style.border = "1px solid silver";

    numberErr.style.visibility = "hidden";
    phoneNumber.style.border = "1px solid silver";

    cityErr.style.visibility = "hidden";
    city.style.border = "1px solid silver";

    addressErr.style.visibility = "hidden";
    address.style.border = "1px solid silver";
}

function Alphabet(event){
    let alphabet = event.keyCode;
    return ((alphabet >= 65 && alphabet <= 90) || (alphabet >= 97 && alphabet <= 122) || alphabet == 32);
}
function number(event){
    let getNumber = event.keyCode;
    return ((getNumber >= 48 && getNumber <= 57))
}
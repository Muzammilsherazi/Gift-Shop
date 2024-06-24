window.onload = function () {
    let cartProductData = JSON.parse(localStorage.getItem("cart products")) || [];
    let cart_count = document.querySelector("#cartIcon p");
    cart_count.innerHTML = cartProductData.length;
}
// for highlight the selective navbar links
const activePage = window.location.href;
let navLinks = document.querySelectorAll('nav a');

if (activePage == "https://gift-shop-online.web.app/") {
    navLinks[0].classList.add("active");
}
navLinks.forEach(links => {
    if (links.href == activePage) {
        links.classList.add("active")
    }
})

// for responsive sidenavbar for whole website
let sideNavBar = document.getElementById("sideNavbar");
let shade = document.getElementById("shade");
let menu = document.getElementById("menu");
let closed = document.getElementById("close");

window.Showsidebar = () => {
    sideNavBar.style.transform = "translate(0px)";
    sideNavBar.style.opacity = "1";
    sideNavBar.style.transition = "0.4s ease";
    menu.style.display = "none";
    closed.style.display = "flex";
    shade.style.display = "block";
}

window.Hidesidebar = () => {
    sideNavBar.style.transform = "translate(300px)";
    sideNavBar.style.opacity = "0";
    sideNavBar.style.transition = "0.4s ease";
    menu.style.display = "flex";
    closed.style.display = "none";
    shade.style.display = "none";
    }   

document.addEventListener("DOMContentLoaded", () => {
    let cartProductData = JSON.parse(localStorage.getItem("cart products")) || [];
    let cart_count = document.querySelector("#cartIcon p");
    cart_count.innerHTML = cartProductData.length;
});

let signupUsers = JSON.parse(localStorage.getItem("users"));
let loggedInUsers = JSON.parse(localStorage.getItem("logged-in-users"));
if (signupUsers && loggedInUsers) {
    let profile = document.querySelector("#left #profile");
    let avatarPic = "/images/no image avatar.jpg";
    let username = document.getElementById("username")
    let logOutLink = document.getElementById("logout-link");
    let loginLink = document.getElementById("login-link");
    let sureMsg = document.getElementById("logout-msg");
    let shade = document.getElementById("shade");
    let sureMsgNoBtn = document.getElementById("no-btn");
    let sureMsgYesBtn = document.getElementById("yes-btn");


    loginLink.style.display = "none";
    logOutLink.style.display = "block";

    logOutLink.onclick = function () {
        sureMsg.style.display = "flex";
        shade.style.display = "block";
    }
    sureMsgNoBtn.onclick = function () {
        sureMsg.style.display = "none";
        shade.style.display = "none";
    }
    sureMsgYesBtn.onclick = function () {
        localStorage.removeItem("logged-in-users");
        loginLink.style.display = "block";
        logOutLink.style.display = "none";
        profile.src = avatarPic;
        sureMsg.style.display = "none";
        shade.style.display = "none";
        username.innerHTML = "Unknown";
    }
    
    
    if (loggedInUsers) {
        profile.src = loggedInUsers.image;
        username.innerHTML = loggedInUsers.name
    }
    else {
        signupUsers.forEach(users => {
            profile.src = users.image;
            username.innerHTML = users.name;
        })
    }
}

// onclick function on logo image for go to home for whole website
window.goToHome = () => {
    window.location.href = "/Home/index.html";
}
window.goToCart = () => {
    window.location.href = "/Cart Page/cart-page.html";
}


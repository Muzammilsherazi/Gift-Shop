
// for login 
let loginEmail = document.getElementById("login-email");
let loginPass = document.getElementById("login-password");
let loginMsg = document.getElementById("login-msg");

// for login errors
let loginEmailErr = document.querySelector(".email-error");
let loginPassErr = document.querySelector(".pass-error");

function login(){
    let email = loginEmail.value;
    let password = loginPass.value;
    let forEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(loginEmail.value == ""){
        loginEmail.style.border = "1px solid #960018";
        loginEmailErr.innerHTML = "Please enter email!";
        loginEmailErr.style.visibility = "visible";
        return
    }
    else if(!forEmail.test(loginEmail.value)){
        loginEmail.style.border = "1px solid #960018";
        loginEmailErr.innerHTML = "Enter valid email address!";
        loginEmailErr.style.visibility = "visible";
        return
    }
    else if(loginPass.value == ""){
        loginPass.style.border = "1px solid #960018";
        loginPassErr.innerHTML = "Please enter password!";
        loginPassErr.style.visibility = "visible";
        return    
    }
    else if(loginPass.value.length <= 7){
        loginPass.style.border = "1px solid #960018";
        loginPassErr.innerHTML = "Password atleast 8 characters!";
        loginPassErr.style.visibility = "visible";  
        return  
    }

    let usersArray = JSON.parse(localStorage.getItem("users"));

    if(usersArray === null || usersArray.length === 0){
        loginMsg.innerHTML = "No user found please signup first!"
        loginMsg.style.visibility = "visible";
    }


    let users = usersArray.find(user => user.email === email && user.password === password);
    if(users){
        localStorage.setItem("logged-in-users", JSON.stringify(users))
        let gobackUrl = sessionStorage.getItem("goback-url");
        if(gobackUrl){
            sessionStorage.removeItem("goback-url");
            window.location.href = gobackUrl;
        }
        else{
            window.location.href = "../index.html";
        }
    }
    else{
        loginMsg.innerHTML = "Incorrect email and password please signup!"
        loginMsg.style.visibility = "visible";
    }
}


loginEmail.oninput = function () {
    loginEmail.style.border = "1px solid silver";
    loginEmailErr.style.visibility = "hidden";
}
loginPass.oninput = function () {
    if (loginPass.value.length <= 7) {
        loginPass.style.border = "1px solid #960018";
        loginPassErr.innerHTML = "Poor password";
        loginPassErr.style.visibility = "visible"
        loginPassErr.style.color = "#960018"
    }
    else if (loginPass.value.length <= 10) {
        loginPass.style.border = "1px solid green";
        loginPassErr.innerHTML = "Good password";
        loginPassErr.style.visibility = "visible"
        loginPassErr.style.color = "green"
    }
    else {
        loginPass.style.border = "1px solid green";
        loginPassErr.innerHTML = "Excellent";
        loginPassErr.style.visibility = "visible"
    }
}




// for login
let loginOpenEye = document.getElementById("login-open-eye");
let loginCloseEye = document.getElementById("login-close-eye");
// for see password
function seePass(){
  loginPass.type = "text";
  loginCloseEye.style.display = "block";
  loginOpenEye.style.display = "none";  
}
// for hide password
function hidePass(){
    loginPass.type = "password";
    loginCloseEye.style.display = "none";
    loginOpenEye.style.display = "block";  
}
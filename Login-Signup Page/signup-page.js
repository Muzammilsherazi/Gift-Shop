// from navbar links
let loginLnk = document.getElementById("login-link");
let signupLink = document.getElementById("signup-link");
let navRightlink = document.querySelector("nav #right-corner");


// for signup
let signupName = document.getElementById("name");
let signupEmail = document.getElementById("signup-email");
let signupPass = document.getElementById("signup-password");

// for signup errors
let nameErr = document.querySelector(".name-error");
let emailErr = document.querySelector(".email-error");
let passErr = document.querySelector(".pass-error");


let profilePic = document.getElementById("profile-img");
let imgFile = document.getElementById("img-file");


imgFile.onchange = function () {
    var file = imgFile.files[0];
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", () => {
        profilePic.src = fileReader.result;
    })
}


let usersArr = JSON.parse(localStorage.getItem("users")) || [];
let forEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function signup() {

    if (signupName.value == "") {
        signupName.style.border = "1px solid #960018";
        nameErr.innerHTML = "Please enter name!";
        nameErr.style.visibility = "visible";
        return
    }
    else if (signupEmail.value == "") {
        signupEmail.style.border = "1px solid #960018";
        emailErr.innerHTML = "Please enter email!";
        emailErr.style.visibility = "visible";
        return
    }
    else if(!forEmail.test(signupEmail.value)){
        signupEmail.style.border = "1px solid #960018";
        emailErr.innerHTML = "Enter valid email address!";
        emailErr.style.visibility = "visible";    
        return
    }
    else if (signupPass.value == "") {
        signupPass.style.border = "1px solid #960018";
        passErr.innerHTML = "Please enter password!";
        passErr.style.visibility = "visible";
        return
    }
    else if(signupPass.value.length <= 7){
        signupPass.style.border = "1px solid #960018";
        passErr.innerHTML = "Password atleast 8 characters!";
        passErr.style.visibility = "visible";
        return    
    }
    else {
        let users = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPass.value,
            image: profilePic.src,
        }

        usersArr.push(users);
        localStorage.setItem("users", JSON.stringify(usersArr));
        localStorage.setItem("logged-in-users", JSON.stringify(users));
        let gobackUrl = sessionStorage.getItem("goback-url");
        if(gobackUrl){
            sessionStorage.removeItem("goback-url");
            window.location.href = gobackUrl;
        }
        else{
            window.location.href = "/Home/index.html";
        }
    }
}

signupName.oninput = function () {
    signupName.style.border = "1px solid silver";
    nameErr.style.visibility = "hidden";
}
signupEmail.oninput = function () {
    signupEmail.style.border = "1px solid silver";
    emailErr.style.visibility = "hidden";
}
signupPass.oninput = function () {
    if (signupPass.value.length <= 7) {
        signupPass.style.border = "1px solid #960018";
        passErr.innerHTML = "Poor password";
        passErr.style.visibility = "visible"
        passErr.style.color = "#960018"
    }
    else if (signupPass.value.length <= 10) {
        signupPass.style.border = "1px solid green";
        passErr.innerHTML = "Good password";
        passErr.style.visibility = "visible"
        passErr.style.color = "green"
    }
    else {
        signupPass.style.border = "1px solid green";
        passErr.innerHTML = "Excellent";
        passErr.style.visibility = "visible"
    }
}



let signupOpenEye = document.getElementById("signup-open-eye");
let signupCloseEye = document.getElementById("signup-close-eye");

// for see password
function seePass() {
    signupPass.type = "text";
    signupCloseEye.style.display = "block";
    signupOpenEye.style.display = "none";
}
// for hide password
function hidePass() {
    signupPass.type = "password";
    signupCloseEye.style.display = "none";
    signupOpenEye.style.display = "block";
}


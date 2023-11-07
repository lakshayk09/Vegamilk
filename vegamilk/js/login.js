let loginlink = document.querySelector(".Login-Link"); 

close = document.querySelector(".btn-close");

loginlink.addEventListener("click", showLoginForm);

close.addEventListener("click", hideLoginForm);




function showLoginForm(event) {
    event.preventDefault();
    document.getElementById("LoginTab").style.display = "block";
    document.body.style.overflow = "hidden";
    
    // $('#ContactTab').css("display", "block");
    // $('body').css("overflow", "hidden");
}

function hideLoginForm(event) {
    event.preventDefault();
    document.getElementById("LoginTab").style.display = "none";
    document.body.style.overflow = "auto";
    
    // $('#ContactTab').css("display", "none");
    // $('body').css("overflow", "auto");
}

let loginlink = document.querySelector(".Login-Link"); 
let close2 = document.querySelector(".btn-close2");

loginlink.addEventListener("click", showLoginForm);

close2.addEventListener("click", hideLoginForm);




function showLoginForm(event) {
    event.preventDefault();
    document.getElementById("LoginTab").style.display = "block";
    document.body.style.overflow = "hidden";
    $('#LoginTab').css("z-index","99999");

    
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

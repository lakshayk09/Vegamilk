// contact form trigger using javascript
// TODO: use jquery instead of JavaScript


let contactlink = document.querySelector(".Contact-Link"); 
let contactlink2 = document.querySelector(".Contact-Link2"); 

let close = document.querySelector(".btn-close");

contactlink.addEventListener("click", showContactForm);
contactlink2.addEventListener("click", showContactForm);

close.addEventListener("click", hideContactForm);




function showContactForm(event) {
    event.preventDefault();
    document.getElementById("ContactTab").style.display = "block";
    document.body.style.overflow = "hidden";
    
    // $('#ContactTab').css("display", "block");
    // $('body').css("overflow", "hidden");
}

function hideContactForm(event) {
    event.preventDefault();
    document.getElementById("ContactTab").style.display = "none";
    document.body.style.overflow = "auto";
    
    // $('#ContactTab').css("display", "none");
    // $('body').css("overflow", "auto");
}


    


// contact form trigger using javascript
// TODO: use jquery instead of JavaScript


let contactlink = document.querySelector(".Contact-Link"); 
let contactlink2 = document.querySelector(".Contact-Link2"); 

let contactform = document.getElementById("ContactTab");

let close = document.querySelector("btn-close");

contactlink.addEventListener("click", showContactForm, false);
contactlink2.addEventListener("click", showContactForm, false);

close.addEventListener("click", hideContactForm, false);

function showContactForm(event) {
    event.preventDefault();
    contactform.style.display = 'block';
    $('body').css("overflow", "hidden");
}

function hideContactForm(event) {
    event.preventDefault();
    contactform.style.display = 'none';
    $('body').css("overflow", "auto");
}


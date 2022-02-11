window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove("fade-out");
});

validateForm = () => {
    let x = document.forms["contact"]["Name"].value;
    let y = document.forms["contact"]["Email"].value;
    if ((x == "") || (y == "")) {
        alert("Please make sure your name and email address are entered.");
        return false;
    }
}

validatePopupForm = () => {
    let x = document.forms["popup-contact"]["Name"].value;
    let y = document.forms["popup-contact"]["Email"].value;
    if ((x == "") || (y == "")) {
        alert("Please make sure your name and email address are entered.");
        return false;
    }
}

openForm = () => {
    document.getElementById("myForm").style.display = "block";
}

closeForm = () => {
    document.getElementById("myForm").style.display = "none";
}


$(".slideshow > div:gt(0)").hide();

setInterval(function() {
    $(".slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo(".slideshow");
}, 3000);

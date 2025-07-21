let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let hamburg = document.getElementById("hamburg");
let cancel = document.getElementById("cancel");

hamburg.addEventListener("click", function() {
    hamburg.style.display = "none";
    menu.style.display = "block"
})

cancel.addEventListener("click", function() {
    hamburg.style.display = "block";
    menu.style.display = "none";
})
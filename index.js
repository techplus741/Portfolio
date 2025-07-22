let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let hamburg = document.getElementById("hamburg");
let cancel = document.getElementById("cancel");
let container = document.getElementById("container1")

hamburg.addEventListener("click", function() {
    hamburg.style.display = "none";
    menu.style.display = "block"
    container.style.display = "none";
})

cancel.addEventListener("click", function() {
    hamburg.style.display = "block";
    menu.style.display = "none";
    container.style.display = "block";
})
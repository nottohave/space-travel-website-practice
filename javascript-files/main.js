// hamburger onclick
var hamburger = document.querySelector("#primary-navigation");
hamburger.addEventListener("click", function() {
    this.classList.toggle("is-active");
    if (this.classList.contains("is-active")) {
        openNav();
    } else {
        closeNav();
    }
})

function openNav() {
    hamburger.style.width = "15.875rem";
}

function closeNav() {
    hamburger.style.width = "0";
}
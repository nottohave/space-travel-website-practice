var primeNav = document.querySelector(".primary-navigation");
var mobileNav = document.querySelector(".mobile-nav-toggle");

// trying out hamburger button
mobileNav.addEventListener("click", function() {
    // upon click, get the value of data-visible
    var visibleValue = primeNav.getAttribute("data-visible");
    console.log(visibleValue);
    // change the value of data-visible to true to open nav
    if (visibleValue === "false") {
        primeNav.setAttribute("data-visible", true);
        console.log("true");
    } else {
        primeNav.setAttribute("data-visible", false);
        console.log("false");
    }
    // do the opposite afterward
})
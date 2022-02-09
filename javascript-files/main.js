var primeNav = document.querySelector(".primary-navigation");
var mobileNav = document.querySelector(".mobile-nav-toggle");

// trying out hamburger button
mobileNav.addEventListener("click", function() {
    var visibleValue = primeNav.getAttribute("data-visible");

    // consider undefined case
    if (visibleValue !== "true") {
        primeNav.setAttribute("data-visible", true);
        mobileNav.setAttribute("aria-expanded", true);
    } else {
        primeNav.setAttribute("data-visible", false);
        mobileNav.setAttribute("aria-expanded", false);
    }

})


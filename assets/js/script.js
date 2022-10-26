const navbarLink = document.querySelectorAll("#header .nav-link")
navbarLink.forEach((nl) => nl.addEventListener("click", function(e) {
    document.querySelector("#header .nav-link.active").classList.remove("active")
    e.target.classList.add("active")
}))

const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolioFilterButtons = document.querySelectorAll("#portfolio-flters li")
const filterPortfolioItems = function(e) {
    portfolioItems.forEach((pi) => pi.classList.toggle("d-none", e.target.dataset.filter !== "all" ? pi.dataset.item !== e.target.dataset.filter : false))
}
portfolioFilterButtons.forEach((fb) => fb.addEventListener("click", filterPortfolioItems))
// Change active class in navbar links
const navLinks = document.querySelectorAll("#header .nav-link")
const toggleNavLinks = (e) => {
    document.querySelector("#header .nav-link.active").classList.remove("active")
    e.target.classList.add("active")
}
navLinks.forEach((nl) => nl.addEventListener("click", toggleNavLinks))

// Filter portfolio items
const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolioFilterButtons = document.querySelectorAll("#portfolio-filters li")
const filterPortfolioItems = (e) => {
    document.querySelector("#portfolio-filters .active").classList.remove("active")
    e.target.classList.add("active")
    portfolioItems.forEach((pi) => pi.classList.toggle("d-none", e.target.dataset.filter !== "all" ? pi.dataset.item !== e.target.dataset.filter : false))
}
portfolioFilterButtons.forEach((fb) => fb.addEventListener("click", filterPortfolioItems))
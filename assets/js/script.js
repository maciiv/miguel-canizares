// Change active class in navbar links
const navLinks = document.querySelectorAll("#header .nav-link")
const toggleNavLinks = (e) => {
    document.querySelector("#header .nav-link.active").classList.remove("active")
    e.target.classList.add("active")
}
navLinks.forEach(nl => nl.addEventListener("click", toggleNavLinks))

// Filter portfolio items
const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolioFilterButtons = document.querySelectorAll("#portfolio-filters li")
const filterPortfolioItems = (e) => {
    document.querySelector("#portfolio-filters .active").classList.remove("active")
    e.target.classList.add("active")
    portfolioItems.forEach(pi => {
        let toggle = e.target.dataset.filter !== "all" && pi.dataset.item !== e.target.dataset.filter
        pi.parentElement.classList.toggle("d-none", toggle)
    })
}
portfolioFilterButtons.forEach(fb => fb.addEventListener("click", filterPortfolioItems))

// Type hero effect
const typedSpan = document.querySelector(".typed")
const typedWords = typedSpan.dataset.typed.split(",").map(c => c.trim())
const typeWriter = (wi = 0, ci = 0, deleting = false) => {
    let word = typedWords[wi]
    switch (deleting) {
        case false:
            switch (true) {
                case ci == word.length:
                    setTimeout(typeWriter, 500, wi, ci, true)
                    break
                default:
                    typedSpan.innerText = word.slice(0, ci + 1)
                    ci++
                    setTimeout(typeWriter, 100, wi, ci)
                    break
            }
            break
        case true:
            if (wi + 1 === typedWords.length) {
                typedSpan.classList.remove("animated-cursor")
                return
            }
            switch (true) {
                case ci >= 0:
                    typedSpan.innerText = word.slice(0, ci)
                    ci--
                    setTimeout(typeWriter, 100, wi, ci, true)
                    break
                default:
                    wi++
                    if (wi < typedWords.length) setTimeout(typeWriter, 500, wi)
                    break
            }
            break
    }  
}  
typeWriter()
const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolioItemsHover = function(e) {
    let itemInfo = e.target.querySelector(".portfolio-info")
    if(itemInfo === null) return
    itemInfo.style.width = `${e.target.querySelector("img").getBoundingClientRect().width - 30}px`
    itemInfo.style.marginLeft = "15px"
}
portfolioItems.forEach((pi) => pi.addEventListener("mouseover", portfolioItemsHover))

const portfolioFilterButtons = document.querySelectorAll("#portfolio-flters li")
const filterPortfolioItems = function(filter) {
    portfolioItems.forEach((pi) => pi.classList.toggle("d-none", pi.dataset.filter !== filter))
}
portfolioFilterButtons.forEach((fb) => fb.addEventListener("click", ))
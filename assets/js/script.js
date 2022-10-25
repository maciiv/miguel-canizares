const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolioItemsHover = function(e) {
    let itemInfo = e.target.querySelector(".portfolio-info")
    itemInfo.style.width = e.target.getRoundClient().width
}
portfolioItems.forEach((pi) => pi.addEventListener("mouseover", portfolioItemsHover))

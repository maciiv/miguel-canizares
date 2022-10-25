const portfolioItems = document.querySelectorAll(".portfolio-item")
const portfolioItemsHover = function(e) {
    let itemInfo = e.target.querySelector(".portfolio-info")
    console.log(itemInfo.style.width)
    itemInfo.style.width = e.target.getBoundingClientRect().width
}
portfolioItems.forEach((pi) => pi.addEventListener("mouseover", portfolioItemsHover))

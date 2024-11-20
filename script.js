const features = document.querySelector(".features")
const company = document.querySelector(".company")
const features2 = document.querySelector(".features2")
const company2 = document.querySelector(".company2")

const h1s = document.querySelectorAll("h1")

buttonExit = document.querySelector(".exit")
overlay = document.querySelector(".overlay")
mobileButton = document.querySelector(".mobile")
mobileLists = document.querySelector(".mobile-lists")

console.log(h1s)

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if(width < 376){
        mobileButton.style.display = "flex"
    }else if(width > 376){
        mobileButton.style.display = "none"
    }
})

let width = window.innerWidth;
if(width < 376){
    mobileButton.style.display = "flex"
}else if(width > 376){
    mobileButton.style.display = "none"
}

mobileButton.addEventListener("click", () => {
    mobileLists.style.display = "block"
    overlay.style.display = "block"
})

buttonExit.addEventListener("click", () => {
    mobileLists.style.display = "none"
})

h1s[0].addEventListener("mouseover", () => {
    features.style.display = "flex"
    features.style.position = "absolute"
    h1s[0].classList.toggle("after:content-iconDown")
    h1s[0].classList.toggle("after:content-iconUp")
})

h1s[0].addEventListener("mouseleave", () => {
    features.style.display = "none"
    h1s[0].classList.toggle("after:content-iconDown")
    h1s[0].classList.toggle("after:content-iconUp")
})

h1s[1].addEventListener("mouseover", () => {
    company.style.display = "flex"
    company.style.position = "absolute"
    h1s[1].classList.toggle("after:content-iconDown")
    h1s[1].classList.toggle("after:content-iconUp")
})

h1s[1].addEventListener("mouseleave", () => {
    company.style.display = "none"
    h1s[1].classList.toggle("after:content-iconDown")
    h1s[1].classList.toggle("after:content-iconUp")
})

h1s[2].addEventListener("click", () => {
    if(features2.style.display === "" || features2.style.display === "none"){
        features2.style.display = "flex"
        features2.style.position = "block"
        h1s[2].classList.toggle("after:content-iconDown")
        h1s[2].classList.toggle("after:content-iconUp")
    }else if(features2.style.display === "flex"){ 
        features2.style.display = "none"
        h1s[2].classList.toggle("after:content-iconDown")
        h1s[2].classList.toggle("after:content-iconUp")
    }
})

h1s[3].addEventListener("click", () => {
    if(company2.style.display === "" || company2.style.display === "none"){
        company2.style.display = "flex"
        company2.style.position = "block"
        h1s[3].classList.toggle("after:content-iconDown")
        h1s[3].classList.toggle("after:content-iconUp")
    }else if(company2.style.display === "flex"){ 
        company2.style.display = "none"
        h1s[3].classList.toggle("after:content-iconDown")
        h1s[3].classList.toggle("after:content-iconUp")
    }
})




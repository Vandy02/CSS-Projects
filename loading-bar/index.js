const counterEl = document.querySelector(".counter")
const loadingBarFront = document.querySelector(".loading-bar-front")

let index = 0

updateNum()

function updateNum(){
    counterEl.innerText = index + "%"
    if(index < 100){
        index++
        loadingBarFront.style.width = index + "%"
        setTimeout(updateNum, 20)
    }
}
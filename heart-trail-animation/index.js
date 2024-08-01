const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX
    const yPos = event.offsetY
    const spaanEl = document.createElement("span")
    spaanEl.style.left = xPos + "px"
    spaanEl.style.top = yPos + "px"
    const size = Math.random()*100
    spaanEl.style.width = size + "px"
    spaanEl.style.height = size + "px"
    bodyEl.appendChild(spaanEl)
    setTimeout(() =>{
        spaanEl.remove()
    }, 3000)
})
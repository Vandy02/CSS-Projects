const buttonEl = document.getElementById("roll-button")
const diceEl = document.getElementById("dice")
const rollhistoryEl = document.getElementById("roll-history")

let historyList = [];


function rollDice(){
    const randomNum = Math.floor(Math.random() * 6) + 1
    const diceFace = getDiceFace(randomNum)
    diceEl.innerHTML = diceFace
    historyList.push(randomNum)
    updateRollHistory()
}

function updateRollHistory(){

    rollhistoryEl.innerHTML = ""
    for (let index = 0; index < historyList.length; index++) {
        const listEl = document.createElement("li")
        listEl.innerHTML = `Roll ${index + 1}: <span> ${getDiceFace(historyList[index])}</span>`
        rollhistoryEl.appendChild(listEl)
        
    }
}

function getDiceFace(num){
    switch(num){
        case 1:
            return "&#9856;"
        case 2:
            return "&#9857;"
        case 3:
            return "&#9858;"
        case 4:
            return "&#9859;"
        case 5:
            return "&#9860;"
        case 6:
            return "&#9861;"
    }
}

buttonEl.addEventListener("click", ()=>{
   diceEl.classList.add("roll-animation")
  
   setTimeout(()=>{
       diceEl.classList.remove("roll-animation")
       rollDice()
   }, 1000)
})
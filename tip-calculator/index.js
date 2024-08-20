const btnEl = document.getElementById("calculate")
const billEl = document.getElementById("bill")
const tipEl = document.getElementById("tip")
const totalEl = document.getElementById("total")

function calculateTotal(){
    const bill = billEl.value
    const tip = tipEl.value
    const total = (1 + (tip/100)) * bill
    totalEl.innerText = total.toFixed(2)
}

btnEl.addEventListener("click", calculateTotal)
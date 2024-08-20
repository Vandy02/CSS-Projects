function calculateLoan(){
   loanAmountValue = document.getElementById("loan_amount").value

   interestRateValue = document.getElementById("interest_rate").value

   monthstopay = document.getElementById("months_to_pay").value

   interest = (loanAmountValue* (interestRateValue*0.01))/monthstopay

   monthlypayment = (loanAmountValue/monthstopay + interest).toFixed(2)

   document.getElementById("payment").innerHTML = 
   `Montly Payment: ${monthlypayment}`
}
// COMPOUND INTEREST CALCULATOR

const mainBtn = document.getElementById('mainBtn');
const totalInterest = document.getElementById('interestEarned');
const totalBalance = document.getElementById('totalBalance');
const resultArea = document.getElementById('resultArea');

const yearsInput = document.getElementById('years');
const rateInput = document.getElementById('rate');
const amountInput = document.getElementById('principal');


mainBtn.addEventListener("click",() =>{
    const rate = Number(rateInput.value);
    const years = Number(yearsInput.value);
    const principal = Number(amountInput.value);

    const total = principal * ((1 + (rate/100)) ** years);
    const interest = total - principal;


    totalInterest.textContent = interest.toFixed(2);
    totalBalance.textContent = total.toFixed(2);

    resultArea.classList.remove("hidden");
});
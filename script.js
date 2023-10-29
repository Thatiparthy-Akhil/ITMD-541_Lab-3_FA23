
// Creating an object to store the HTML reference variables.
const elements = {
    BillTotalInput: document.getElementById('Bill-Total'),
    TipInput: document.getElementById('Tip'),
    TipPercentageInput: document.getElementById('Tip-Percentage'),
    TipAmountInput: document.getElementById('Tip-Amount'),
    TotalBillInput: document.getElementById('Total-Bill'),
    form: document.getElementById('Calculator-Form'),
};

// creating a function for calculating the tip.
function calculatingTip() {
    const BillTotal = parseFloat(elements.BillTotalInput.value);
    const Tip = parseInt(elements.TipInput.value);
    const TipPercentage = parseFloat(elements.TipInput.value);
    //calculating the tip amount and total bill.
    const TipAmount = (BillTotal * TipPercentage) / 100;
    const TotalBill = BillTotal + TipAmount;

    if (!isNaN(TotalBill)) {
        //The values that takes only up to 2 decimals.
        elements.TipPercentageInput.value = TipPercentage.toFixed(2);
        elements.TipInput.value = Tip.toFixed(2);
        elements.TipAmountInput.value = TipAmount.toFixed(2);
        elements.TotalBillInput.value = TotalBill.toFixed(2);
    }
}

// Adding an event listener to the form for input changes
elements.form.addEventListener('input', calculatingTip);
elements.BillTotalInput.addEventListener('input', function () {
    //printing alert message for other than number texts.
    if (isNaN((elements.BillTotalInput.value)) || elements.BillTotalInput.value === " ")  {
        alert('Please enter a valid number for Bill Total.');
        elements.BillTotalInput.value = " ";
    }
});
calculatingTip();



  


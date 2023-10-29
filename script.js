
// Creating an object to store the HTML reference variables.
const elements = {
    BillTotalInput: document.getElementById('Bill-Total'),
    TipInput: document.getElementById('Tip'),
    TipPercentageInput: document.getElementById('Tip-Percentage'),
    TipAmountInput: document.getElementById('Tip-Amount'),
    TotalBillInput: document.getElementById('Total-Bill'),
    form: document.getElementById('Calculator-Form'),
};

// Creating a function for calculating the tip.
function calculatingTip() {
    const BillTotal = parseFloat(elements.BillTotalInput.value);
    const Tip = parseInt(elements.TipInput.value);
    const TipPercentage = parseFloat(elements.TipInput.value);

    // Calculating the tip amount and total bill.
    const TipAmount = (BillTotal * TipPercentage) / 100;
    const TotalBill = BillTotal + TipAmount;

    if (isNaN(BillTotal)) {
        elements.TipInput.value = 0;
        elements.TipPercentageInput.value = 0;
        elements.TipAmountInput.value = 0;
        elements.TotalBillInput.value = 0;
        return;
    }
       

    if (!isNaN(TotalBill)) {
        // The values that take only up to 2 decimals.
        elements.TipPercentageInput.value = TipPercentage.toFixed(2);
        elements.TipInput.value = Tip.toFixed(2);
        elements.TipAmountInput.value = TipAmount.toFixed(2);
        elements.TotalBillInput.value = TotalBill.toFixed(2);
    }
}



// Adding an event listener to the form for input changes
elements.form.addEventListener('input', calculatingTip);

// Adding an event listener to the BillTotalInput to check if it's empty or contains non-digit characters
elements.BillTotalInput.addEventListener('input', function () {
    const billTotalValue = elements.BillTotalInput.value;
    if(/[^\d]/.test(billTotalValue)) {
        alert('Please enter a valid number for Bill Total.');
    }
    
});

calculatingTip();








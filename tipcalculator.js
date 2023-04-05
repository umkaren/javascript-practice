let billsubtotal = 100;

// create tip function
function calculateTip(a) {
    return a * 0.20;
}

// create total bill function
function getBillTotal(amount) {
    let total = amount + calculateTip(amount);
    return total;
}

console.log(calculateTip(billsubtotal).toFixed(2));
console.log(getBillTotal(billsubtotal).toFixed(2));
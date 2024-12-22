function AmountChange() {
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}
function YearsChange() {
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}
function RateChange() {
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}

function CalculateClick() {

    var P = parseInt(document.getElementById("txtAmount").value);
    var N = parseInt(document.getElementById("txtYears").value) * 12;
    var R = parseInt(document.getElementById("txtRate").value) / 12 / 100;
    var EMI = (P * R * (Math.pow(1 + R, N))) / ((Math.pow(1 + R, N) - 1));

    if (txtAmount.value == '' || txtYears.value == '' || txtRate.value == '') {
        alert('Fill all of the below details to calculate your EMI.');
    } else {

        document.getElementById("lblEMI").innerHTML = `Your Monthly installment amount is <b>${EMI.toLocaleString(`en-in`, { style: "currency", currency: "INR" })}</b>`
    }
}
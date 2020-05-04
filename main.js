function calculateTip() {
  var billAmount = document.getElementById("amount").value;
  var service = document.getElementById("service").value;
  var numPeople = document.getElementById("people").value;
  var finalTip = document.getElementById("finalTip");
  var textTip = document.getElementById("tip");

  var finalTotal = document.getElementById("finalTotal");
  var billTotal = document.getElementById("total");

  if (billAmount <= 0 || billAmount === "" || numPeople === 0) {
    alert("Please enter valid values!");
    return;
  }

  var totalTip = billAmount * service;
  var total = Number(billAmount) + totalTip;

  if (numPeople == "1") {
    textTip.innerHTML = totalTip.toFixed(2);
  } else {
    totalTip = totalTip / numPeople;
    var total = Number(billAmount) + totalTip;
    textTip.innerHTML = totalTip.toFixed(2);
    document.getElementById("each").display = "inline";
    document.getElementById("each2").display = "inline";
  }

  billTotal.innerHTML = total.toFixed(2);
  finalTotal.style.display = "block";
  finalTip.style.display = "block"
}

document.getElementById("finalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("each2").style.display = "none";
document.getElementById("finalTotal").style.display = "none";
document.getElementById("calculate").onclick = function () {
  calculateTip();
};

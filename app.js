// Simulated profits data
let totalProfits = 12500; // Adjust as needed

document.addEventListener("DOMContentLoaded", () => {
  const totalDisplay = document.getElementById("total-profits");
  const adminDisplay = document.getElementById("admin-profits");

  if (totalDisplay) totalDisplay.textContent = "R" + totalProfits;
  if (adminDisplay) adminDisplay.textContent = "R" + totalProfits;
});

function withdrawPaypal() {
  alert("Withdrawal request sent to PayPal: lmoholei@gmail.com");
}

function withdrawLuno() {
  alert("Withdrawal request sent to Luno BTC wallet: 3JGxZhxaKVHTPjNEZYB2ZRg7GCyWsXntxi");
}

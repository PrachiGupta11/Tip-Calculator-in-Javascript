button = document.getElementById("calculate");
bill = document.getElementById("bill");
serviceFeed = document.getElementById("serviceFeedback");
people = document.getElementById("people");
tipAmount = document.getElementById("amount");

button.addEventListener("click", function() {

  totalAmount = bill.value * serviceFeed.value;

  tipPerPerson = totalAmount / people.value;

  tipPerPersonRounded = tipPerPerson.toFixed(2);
  tipAmount.innerHTML = "Rs " + tipPerPersonRounded;

})


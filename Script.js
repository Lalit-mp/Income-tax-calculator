
const input = document.querySelector("input");
const range = document.querySelector(".range");
const theMassage = document.querySelector(".massage");
const theOutputText = document.querySelector(".output-text");
function taxCalculator(ammount) {
  if (ammount <= 300000) {
    theMassage.textContent = "Congratulations- You Don't need to pay any text";
    theOutputText.textContent = "";
  } else if (ammount <= 600000) {
    theMassage.textContent = " You need to pay 5% Tax on your income";
    const taxslab5 = (5 / 100) * range.value;
    theOutputText.textContent = `Your income is ${
      range.value
    } So you have to pay ${Math.round(taxslab5)} As income tax`;
  } else if (ammount <= 900000) {
    theMassage.textContent = " You need to pay ₹15000 + 10% Tax on your income";
    const taxslab5 = (10 / 100) * range.value + 15000;
    theOutputText.textContent = `Your income is ${range.value} So you have to pay ${Math.round(taxslab5)} As income tax`;
  } else if (ammount <= 1200000) {
    theMassage.textContent = " You need to pay ₹45000 + 15% Tax on your income";
    const taxslab5 = (15 / 100) * range.value + 45000;
    theOutputText.textContent = `Your income is ${range.value} So you have to pay ${Math.round(taxslab5)} As income tax`;
  } else if (ammount <= 1500000) {
    theMassage.textContent = " You need to pay ₹90000 + 20% Tax on your income";
    const taxslab5 = (20 / 100) * range.value + 90000;
    theOutputText.textContent = `Your income is ${range.value} So you have to pay ${Math.round(taxslab5)} As income tax`;
  } else if (ammount > 1500000) {
    theMassage.textContent =
      " You need to pay ₹150000 + 30% Tax on your income";
    const taxslab5 = (30 / 100) * range.value + 150000;
    theOutputText.textContent = `Your income is ${range.value} So you have to pay ${Math.round(taxslab5)} As income tax`;
  } 
  else {
    console.log("wrong entry");
  }
}

range.addEventListener("input", () => {
  input.value = range.value;
  taxCalculator(input.value);
});

input.addEventListener("input", () => {
  if (input.value === "" || input.value === undefined || input.value === null) {
      range.value = 0;
      theMassage.textContent = "Please enter your income to Calculate tax";
      theOutputText.textContent = "";
  } else {
      range.value = input.value;
      taxCalculator(input.value);
  }
});

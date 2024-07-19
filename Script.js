
const input = document.querySelector("input");
const range = document.querySelector(".range");

const tList = document.querySelectorAll(".opacity")
function taxCalculator(ammount) {
    for (const iterator of tList) {
        if (ammount == 0) {
            iterator.style.opacity= 1;
        }else{

            iterator.style.opacity= 0.5;      
        }
    }
    if ( ammount <= 300000) {
        tList[0].style.opacity= 1;
       
      } else if (ammount <= 600000) {
        tList[1].style.opacity= 1;
      } else if (ammount <= 900000) {
        tList[2].style.opacity= 1;
      } else if (ammount <= 1200000) {
        tList[3].style.opacity= 1;
      } else if (ammount <= 1500000) {
        tList[4].style.opacity= 1;
      } else if (ammount > 1500000) {
        tList[5].style.opacity= 1;
      } 
      else {
        alert("Wrong entry");
      }
    
  
}

range.addEventListener("input", () => {
  input.value = range.value;
  taxCalculator(input.value);
});
input.addEventListener("input", () => {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (input.value === '') {
    range.value = 0;
  } else {
    range.value = parseFloat(input.value);
    taxCalculator(parseFloat(input.value));
  }
});

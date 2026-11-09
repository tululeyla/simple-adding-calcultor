const firstInput = document.getElementById("first");
const secondInput = document.getElementById("second");
const form = document.querySelector("form");
const addedNumber = document.querySelector(".added-number");





form.addEventListener("submit",(e)=>{
e.preventDefault();
const firstNumber = Number(firstInput.value);
const secondNumber = Number(secondInput.value);
let add;
add = firstNumber + secondNumber;
addedNumber.textContent = add;

form.reset();
})
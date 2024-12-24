const parentButton = document.querySelector("main");
const display = document.querySelector("input");
const equalTo = document.querySelector(".equal");
const fact = document.querySelector(".fact");
const percent = document.querySelector(".percent");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let previousButton = null;
let currentOperator = null;
let isOperatorSelected = false;

display.value = "0";

parentButton.addEventListener("click", (e) => {
const value = e.target.innerText;

    if (e.target.tagName === "TH") {
        if (previousButton) {
          previousButton.classList.remove("clicked");
        }
        e.target.classList.add("clicked");

        previousButton = e.target;

        if (["+", "-", "*", "/"].includes(value)) {
  if (firstNumber !== "" && secondNumber !== "") {
    operate(); 
  }

   operator = value;
   isOperatorSelected = true; 
   return;
}


    if(value === 'AC'){
      firstNumber = '';
      secondNumber = '';
      operator = '';
      isOperatorSelected = false;
      display.value = "0";
      return
    }
  }

  
  if (e.target.tagName === "TD") {

    if(value === '+/-'){
      if (isOperatorSelected && secondNumber) {
        if (secondNumber.startsWith("-")) {
          secondNumber = secondNumber.slice(1);
        } else {
          secondNumber = "-" + secondNumber;
        }
        display.value = secondNumber;
      } 
      
      else if (firstNumber !== "") {
        if (firstNumber.startsWith("-")) {
          firstNumber = firstNumber.slice(1);
        } else {
          firstNumber = "-" + firstNumber;
        }
        display.value = firstNumber;
      }

      return
    }

    // if (value === "+/-") {
    //   if (isOperatorSelected && secondNumber) {
    //     secondNumber = secondNumber.startsWith("-")
    //       ? secondNumber.slice(1)
    //       : "-" + secondNumber;
    //     display.value = secondNumber;
    //   } else if (firstNumber) {
    //     firstNumber = firstNumber.startsWith("-")
    //       ? firstNumber.slice(1)
    //       : "-" + firstNumber;
    //     display.value = firstNumber;
    //   }
    //   return;
    // }


      if (value === ".") {
        if (isOperatorSelected) {
          if (!secondNumber.includes(".")) {
            secondNumber = secondNumber || "0"
            secondNumber += ".";
          }
          display.value = secondNumber; 
        } else {
          if (!firstNumber.includes(".")) {
            firstNumber = firstNumber || "0"
            firstNumber += ".";
          }
          display.value = firstNumber;
        }


        return;
      }

    
    if (isOperatorSelected) {
      secondNumber += value;
      display.value = secondNumber;
    } else if (value !=='+/-'){
      firstNumber += value;
      display.value = firstNumber;
    }
  }
});

const addition = (a, b) => {
  const sum = a + b;
  return sum;
};


const subtract = (a, b) => {
  const minus = a - b;
  return minus;
};


const division = (a, b) => {
  const divide = a / b;
  return divide;
};


const multiply = (a, b) => {
  const times = a * b;
  return times;
};

const factorial = (a) => {
  let num = 1;
  for(let i = 1; i <= a; i++) {
    num *= (i);
  }
  firstNumber = num.toString();
  display.value = num;
};

const percentage = (a) => {
  let result = a/100
  firstNumber = result.toString();
  display.value = result;
}


const operate = () => {
  let result;

  // Perform the operation based on the operator
  if (operator === "+") {
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  } else if (operator === "-") {
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
  } else if (operator === "*") {
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
  } else if (operator === "/") {
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
  }

  display.value = result;


  firstNumber = result.toString();  
  secondNumber = "";
  isOperatorSelected = false;
};
equalTo.addEventListener('click', operate);

fact.addEventListener('click', () =>{
  const a = parseFloat(display.value);
  factorial(a);
});

percent.addEventListener('click', () =>{
  const a = parseFloat(display.value);
  percentage(a)
})
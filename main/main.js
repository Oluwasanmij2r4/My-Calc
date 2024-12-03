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

display.value = "0";

parentButton.addEventListener("click", (e) => {


    if (e.target.tagName === "TH") {
        if (previousButton) {
          previousButton.classList.remove("clicked");
        }
        e.target.classList.add("clicked");

        previousButton = e.target;

        if (["+", "-", "*", "/"].includes(operator)) {
  if (firstNumber !== "" && secondNumber !== "") {
    operate(); 
  }
}

    operator = e.target.innerText;
    if(operator === 'AC'){
      firstNumber = '';
      secondNumber = '';
      operator = '';
      display.value = "0";
    }
  }

  
  if (e.target.tagName === "TD") {
    const value = e.target.innerText;

    if(value === '+/-'){
      if(firstNumber.startsWith('-')){
      firstNumber = firstNumber.slice(1);
      } else if (firstNumber !== ''){
      firstNumber = '-' + firstNumber;
      } else if (value = '0'){
        display.value = 0;
      }
      display.value = firstNumber;
      return
    }

      if (value === ".") {
        if (firstNumber.endsWith('.')) {
          firstNumber = firstNumber.replace('.', '');
        } else if (firstNumber != "") {
          firstNumber = firstNumber + '.';
        }
        display.value = firstNumber;
        return;
      }

    
    if (value !== '+/-' && operator === "") {
      firstNumber += value;
      display.value = firstNumber;
    } else if (value !=='+/-'){
      secondNumber += value;
      display.value = secondNumber;
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
    if(operator === '+'){
      let num1 = parseFloat(firstNumber);
      let num2 = parseFloat(secondNumber);
      const result = addition(num1, num2);


      display.value = result;

        firstNumber = result;
        secondNumber = '';
        // result = '';
    }

    if (operator === "-") {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);
      const result = subtract(num1, num2);

      display.value = result;

      firstNumber = result;
      secondNumber = "";
      // result = "";
    }

     if (operator === "*") {
       const num1 = parseFloat(firstNumber);
       const num2 = parseFloat(secondNumber);
       const result = multiply(num1, num2);

       display.value = result;

       firstNumber = result;
       secondNumber = "";
      //  result = "";
     }

      if (operator === "/") {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const result = Math.round((division(num1, num2)) * 1000000)/ 1000000;

        display.value = result;

        firstNumber = result;
        secondNumber = "";
        // result = "";
      }
    
}
equalTo.addEventListener('click', operate);

fact.addEventListener('click', () =>{
  const a = parseFloat(display.value);
  factorial(a);
});

percent.addEventListener('click', () =>{
  const a = parseFloat(display.value);
  percentage(a)
})
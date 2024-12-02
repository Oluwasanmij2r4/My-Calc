const parentButton = document.querySelector("main");
const display = document.querySelector("input");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let previousButton = null;

display.value = "0";

parentButton.addEventListener("click", (e) => {


    if (e.target.tagName === "TH") {
        if (previousButton) {
          previousButton.classList.remove("clicked");
        }
        e.target.classList.add("clicked");

        previousButton = e.target;

    operator = e.target.innerText;
  }

  
  if (e.target.tagName === "TD") {
    const value = e.target.innerText;

    if(value === '+/-'){
      if(firstNumber.startsWith('-')){
      firstNumber = firstNumber.slice(1);
      } else if (firstNumber !== ''){
      firstNumber = '-' + firstNumber;
      }
      display.value = firstNumber;
      return
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
  for(let i = 0; i < a; i++) {
    let num = 1;
    num *= (a-i);
  }
}

const equalTo = document.querySelector('.equal')

const operate = () => {
    if(operator === '+'){
         const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const result = addition(num1, num2);

        display.value = result;

        firstNumber = result;
        secondNumber = '';
        result = '';
    }

    if (operator === "-") {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(secondNumber);
      const result = subtract(num1, num2);

      display.value = result;

      firstNumber = result;
      secondNumber = "";
      result = "";
    }

     if (operator === "*") {
       const num1 = parseFloat(firstNumber);
       const num2 = parseFloat(secondNumber);
       const result = multiply(num1, num2);

       display.value = result;

       firstNumber = result;
       secondNumber = "";
       result = "";
     }

      if (operator === "/") {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        const result = Math.round((division(num1, num2)) * 1000000)/ 1000000;

        display.value = result;

        firstNumber = result;
        secondNumber = "";
        result = "";
      }
    
}
equalTo.addEventListener('click', operate);

// parentButton.addEventListener('click', (evt) =>{
//     if (evt.target.tagName === 'TD') {
//          const value = evt.target.innerText;

//          if ((operator === "")) {
//            firstNumber += value;
//            display.value = firstNumber;
//          } else {
//            secondNumber += value;
//            display.value = secondNumber;
//          }

//     if (value === '+'){
//         operator = '+';
//         display.value = '';
//     } else if (value === "=") {
//         const num1 = parseFloat(firstNumber);
//         const num2 = parseFloat(secondNumber);
//         const sum = num1 + num2;
//         display.value = sum;

//         secondNumber = '';
//         operator = '';
//     }
// }

// })

// parentButton.addEventListener("click", (evt) => {
//   if (evt.target.tagName === "TD") {
//     display.value = '';

//     secondNumber = evt.target.innerText;
//     display.value = secondNumber;
//     console.log(secondNumber);
//   }
// });

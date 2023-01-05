"use strict";

//selecting elements
const btnDark = document.querySelector(".icon--dark");
const btnLight = document.querySelector(".icon--light");
const btnEqual = document.querySelector(".btn--equal");
const btnCe = document.querySelector(".btn--current");
const btnBack = document.querySelector(".btn--back");
const btnClear = document.querySelector(".btn--clear");
const plus = document.querySelector(".btn--plus");
const less = document.querySelector(".btn--less");
const divide = document.querySelector(".btn--divide");
const multiply = document.querySelector(".btn--multiply");

const screenTextUp = document.querySelector(".up");
const screenTextDown = document.querySelector(".down");
const nbsp = document.querySelector(".nbsp");

const btn0 = document.querySelector(".btn--0");
const btn1 = document.querySelector(".btn--1");
const btn2 = document.querySelector(".btn--2");
const btn3 = document.querySelector(".btn--3");
const btn4 = document.querySelector(".btn--4");
const btn5 = document.querySelector(".btn--5");
const btn6 = document.querySelector(".btn--6");
const btn7 = document.querySelector(".btn--7");
const btn8 = document.querySelector(".btn--8");
const btn9 = document.querySelector(".btn--9");

const btns = document.querySelectorAll(".btn");
const btnsOperation = document.querySelectorAll(".icon--operation");

let operator = "";
let operation = 0;
let number = 0;
let num1 = 0;
let num2 = 0;
let active = true;

//function to change between light and dark mode
btnLight.addEventListener("click", function () {
  btnLight.classList.toggle("hidden");
  btnDark.classList.toggle("hidden");

  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector("h1").style.color = "#fff";
  btnDark.style.color = "#fff";
  screenTextDown.style.color = "#fff";
  screenTextUp.style.color = "#fff";
  document.querySelector("header").style.borderBottom = "2px solid #fff";
  document.querySelector(".calculator").style.border = "2px solid #fff";
  document.querySelector(".screen").style.borderBottom = "2px solid #fff";
  document.querySelector(".keyboard").style.backgroundColor = "#333";

  for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = "#000";
    btns[i].style.color = "#fff";
  }

  for (let i = 0; i < btnsOperation.length; i++) {
    btnsOperation[i].classList.toggle("icon--operation");
    btnsOperation[i].classList.toggle("icon--operation-dark");
  }
});

//function to change between light and dark mode
btnDark.addEventListener("click", function () {
  btnLight.classList.toggle("hidden");
  btnDark.classList.toggle("hidden");

  document.querySelector("body").style.backgroundColor = "#fff";
  document.querySelector("h1").style.color = "#333";
  btnDark.style.color = "#333";
  screenTextDown.style.color = "#222";
  screenTextUp.style.color = "#222";
  document.querySelector("header").style.borderBottom = "2px solid #555";
  document.querySelector(".calculator").style.border = "2px solid #333";
  document.querySelector(".screen").style.borderBottom = "2px solid #333";
  document.querySelector(".keyboard").style.backgroundColor = "#888";

  for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = "#fff";
    btns[i].style.color = "#333";
  }

  for (let i = 0; i < btnsOperation.length; i++) {
    btnsOperation[i].classList.toggle("icon--operation");
    btnsOperation[i].classList.toggle("icon--operation-dark");
  }
});

//function to print numbers
const printScreen = function () {
  if (screenTextDown.textContent == 0) {
    screenTextDown.textContent = number;
  } else if (num1 != 0 && num2 != 0) {
    num1 = num2;
    num2 = 0;
    screenTextDown.textContent += number;
  } else {
    screenTextDown.textContent = screenTextDown.textContent + number;
  }
};

//function to clear all
const clear = function () {
  operator = "";
  operation = 0;
  number = 0;
  num1 = 0;
  num2 = 0;
  active = true;
  screenTextUp.textContent = nbsp.textContent;
  screenTextDown.textContent = 0;
};

//function to clear current number
const currentClear = function () {
  if (active == false) {
  } else {
    num2 = 0;
    screenTextDown.textContent = 0;
  }
};

//function to clear the last number
const lastClear = function () {
  if (active == false) {
  } else {
    if (screenTextDown.textContent.length >= 2) {
      screenTextDown.textContent = screenTextDown.textContent.slice(0, -1);
    } else {
      screenTextDown.textContent = 0;
    }
  }
};

//function to do an operation
const DoOperation = function () {
  switch (operator) {
    case "+":
      operation = num1 + num2;
      screenTextUp.textContent = `${num1}+${num2}=`;
      screenTextDown.textContent = num1 + num2;
      active = false;
      break;
    case "-":
      operation = num1 - num2;
      screenTextUp.textContent = `${num1}-${num2}=`;
      screenTextDown.textContent = num1 - num2;
      active = false;
      break;
    case "x":
      operation = num1 * num2;
      screenTextUp.textContent = `${num1}x${num2}=`;
      screenTextDown.textContent = num1 * num2;
      active = false;
      break;
    case "/":
      operation = num1 / num2;
      screenTextUp.textContent = `${num1}/${num2}=`;
      screenTextDown.textContent = num1 / num2;
      active = false;
  }
};

//function to do the operations the last number
const equalOperation = function () {
  if (screenTextDown.textContent == 0 || active == false) {
  } else if (operation != 0) {
    num1 = operation;
    num2 = Number(screenTextDown.textContent);
    DoOperation();
  } else if (screenTextUp.textContent != 0 && screenTextDown.textContent != 0) {
    num2 = Number(screenTextDown.textContent);
    DoOperation();
  }
};

//function to add numbers
const addOperation = function () {
  if (screenTextDown.textContent == 0) {
  }
  if (active == false) {
    active = true;
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "+";
    screenTextDown.textContent = 0;
    operator = "+";
  } else if (screenTextUp.textContent == 0 && screenTextDown.textContent != 0) {
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "+";
    screenTextDown.textContent = 0;
    operator = "+";
  } else if (operation != 0) {
    num1 = operation;
    num2 = Number(screenTextDown.textContent);
    operation = num1 + num2;
    screenTextUp.textContent = `${num1 + num2}+`;
    screenTextDown.textContent = num1 + num2;
    operator = "+";
  } else if (screenTextUp.textContent != 0 && screenTextDown.textContent != 0) {
    num2 = Number(screenTextDown.textContent);
    operation = num1 + num2;
    screenTextUp.textContent = `${num1 + num2}+`;
    screenTextDown.textContent = num1 + num2;
    operator = "+";
  }
};

//function to less numbers
const lessOperation = function () {
  if (screenTextDown.textContent == 0) {
  }
  if (active == false) {
    active = true;
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "-";
    screenTextDown.textContent = 0;
    operator = "-";
  } else if (screenTextUp.textContent == 0 && screenTextDown.textContent != 0) {
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "-";
    screenTextDown.textContent = 0;
    operator = "-";
  } else if (operation != 0) {
    num1 = operation;
    num2 = Number(screenTextDown.textContent);
    operation = num1 - num2;
    screenTextUp.textContent = `${num1 - num2}-`;
    screenTextDown.textContent = num1 - num2;
    operator = "-";
  } else if (screenTextUp.textContent != 0 && screenTextDown.textContent != 0) {
    num2 = Number(screenTextDown.textContent);
    operation = num1 - num2;
    screenTextUp.textContent = `${num1 - num2}-`;
    screenTextDown.textContent = num1 - num2;
    operator = "-";
  }
};

//function to multiply numbers
const multiplyOperation = function () {
  if (screenTextDown.textContent == 0) {
  }
  if (active == false) {
    active = true;
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "x";
    screenTextDown.textContent = 0;
    operator = "x";
  } else if (screenTextUp.textContent == 0 && screenTextDown.textContent != 0) {
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "x";
    screenTextDown.textContent = 0;
    operator = "x";
  } else if (operation != 0) {
    num1 = operation;
    num2 = Number(screenTextDown.textContent);
    operation = num1 * num2;
    screenTextUp.textContent = `${num1 * num2}x`;
    screenTextDown.textContent = num1 * num2;
    operator = "x";
  } else if (screenTextUp.textContent != 0 && screenTextDown.textContent != 0) {
    num2 = Number(screenTextDown.textContent);
    operation = num1 * num2;
    screenTextUp.textContent = `${num1 * num2}x`;
    screenTextDown.textContent = num1 * num2;
    operator = "x";
  }
};

//function to divide numbers
const divideOperation = function () {
  if (screenTextDown.textContent == 0) {
  }
  if (active == false) {
    active = true;
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "/";
    screenTextDown.textContent = 0;
    operator = "/";
  } else if (screenTextUp.textContent == 0 && screenTextDown.textContent != 0) {
    num1 = Number(screenTextDown.textContent);
    screenTextUp.textContent = screenTextDown.textContent + "/";
    screenTextDown.textContent = 0;
    operator = "/";
  } else if (operation != 0) {
    num1 = operation;
    num2 = Number(screenTextDown.textContent);
    operation = num1 / num2;
    screenTextUp.textContent = `${num1 / num2}/`;
    screenTextDown.textContent = num1 / num2;
    operator = "/";
  } else if (screenTextUp.textContent != 0 && screenTextDown.textContent != 0) {
    num2 = Number(screenTextDown.textContent);
    operation = num1 / num2;
    screenTextUp.textContent = `${num1 / num2}/`;
    screenTextDown.textContent = operation;
    operator = "/";
  }
};

//Function that print numbers in the screen
btn0.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 0;
  active = true;
  printScreen();
});

btn1.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 1;
  active = true;
  printScreen();
});

btn2.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 2;
  active = true;
  printScreen();
});

btn3.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 3;
  active = true;
  printScreen();
});

btn4.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 4;
  active = true;
  printScreen();
});

btn5.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 5;
  active = true;
  printScreen();
});

btn6.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 6;
  active = true;
  printScreen();
});

btn7.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 7;
  active = true;
  printScreen();
});

btn8.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 8;
  active = true;
  printScreen();
});

btn9.addEventListener("click", function () {
  if (active == false) {
    clear();
  }
  number = 9;
  active = true;
  printScreen();
});

//functions to add functionality to the operation numbers
plus.addEventListener("click", function () {
  addOperation();
});

less.addEventListener("click", function () {
  lessOperation();
});

multiply.addEventListener("click", function () {
  multiplyOperation();
});

divide.addEventListener("click", function () {
  divideOperation();
});

btnClear.addEventListener("click", function () {
  clear();
});

btnCe.addEventListener("click", function () {
  currentClear();
});

btnBack.addEventListener("click", function () {
  lastClear();
});

btnEqual.addEventListener("click", function () {
  equalOperation();
});
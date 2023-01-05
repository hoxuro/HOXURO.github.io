"use strict";

const btnColor = document.querySelector(".btn");
let letras, random1, random2, random3, random4, random5, random6;
const pageColor = document.querySelector("body");
const hexText = document.querySelector(".hex-number");

//function that returns a random hexadecial letter
const generarLetra = function () {
  letras = ["a", "b", "c", "d", "e", "f"];
  return letras[Math.trunc(Math.random() * 6)];
};

//function that returns a random number between o and 9
const generarNumero = function () {
  return Number(Math.trunc(Math.random() * 10));
};

//function that selects randomly a number or a letter
const generar = function () {
  const x = Math.trunc(Math.random() * 2);

  if (x === 0) {
    return generarLetra();
  } else {
    return generarNumero();
  }
};

//Generating random letters and numbers
random1 = generar();
random2 = generar();
random3 = generar();
random4 = generar();
random5 = generar();
random6 = generar();

let hexNumber = `#${random3}${random4}${random5}${random1}${random6}${random2}`;

//function that set starting conditions
const init = function () {
  document.querySelector("body").style.backgroundColor = hexNumber;
  hexText.style.color = hexNumber;
  hexText.textContent = hexNumber;
  btnColor.style.backgroundColor = hexNumber;
};

init();

//implementing new color button functionality
btnColor.addEventListener("click", function () {
  random1 = generar();
  random2 = generar();
  random3 = generar();
  random4 = generar();
  random5 = generar();
  random6 = generar();

  hexNumber = `#${random3}${random4}${random5}${random1}${random6}${random2}`;
  init();
});

"use strict";

var isNumber = function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function one() {
  var a = 10;
  var userNum = prompt("Угадай число от 1 до 100");

  function two(b) {
    if (b == null) {
      alert('Game Over');
    } else if (!isNumber(b)) {
      alert("Введи число!");
      one();
    } else if (b > a) {
      alert("Загаданное число меньше");
      one();
    } else if (b < a) {
      alert("Загаданное число больше");
      one();
    } else if (b == a) {
      alert("Вы угадали!");
    }
  }

  two(userNum);
}

one();
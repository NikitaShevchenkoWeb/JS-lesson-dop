"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function one() {
    let a = 10;

    let userNum = prompt("Угадай число от 1 до 100");

    function two(b) {
        if (b == null) {
            alert('Game Over');
        }
        else if (!isNumber(b)) {
            alert("Введи число!");
            one();
        }
        else if (b > a) {
            alert("Загаданное число меньше");
            one();
        }
        else if (b < a) {
            alert("Загаданное число больше");
            one();
        }
        else if (b == a) {
            alert("Вы угадали!");
        }
    }

    two(userNum);
}

one();
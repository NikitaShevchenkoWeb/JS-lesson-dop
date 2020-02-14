"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function one(newCount) {
    let a = 10,
        count = newCount;

    let userNum = prompt("Угадай число от 1 до 100. Попыток: " + count);

    function two(b) {
        let newCount;

        if (b == null) {
            alert('Game Over');
        }
        else if (!isNumber(b)) {
            alert("Введи число!");
            one(count);
        }
        else if (count == 0) {
            alert("Попытки закончились, хотите сыграть еще?");
            if (true) {
                one(10);
            }
        }
        else if (b > a) {
            newCount = count - 1;
            alert("Загаданное число меньше,осталось попыток: " + newCount);
            one(newCount);
        }
        else if (b < a) {
            newCount = count - 1;
            alert("Загаданное число больше,осталось попыток: " + newCount);
            one(newCount);
        }
        else if (b == a) {
            alert("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            if (true) {
                one(10);
            }
        }
    }

    two(userNum);
}

one(10);
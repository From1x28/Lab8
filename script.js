let userName = prompt("Введіть ваше ім'я:", "Гравець");
if (!userName) userName = "Гравець";

document.getElementById("user-score").textContent = `${userName}: 0`;

let userScore = 0;
let compScore = 0;

const btn = document.getElementById("btn");
const userNumEl = document.getElementById("user-num");
const compNumEl = document.getElementById("comp-num");
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const messageEl = document.getElementById("message");

btn.addEventListener("click", function() {
    let userNumber = Math.floor(Math.random() * 10) + 1;
    let compNumber = Math.floor(Math.random() * 10) + 1;

    userNumEl.textContent = userNumber;
    compNumEl.textContent = compNumber;

    if (userNumber > compNumber) {
        userScore++;
        messageEl.textContent = `${userName} виграв раунд!`;
    } else if (compNumber > userNumber) {
        compScore++;
        messageEl.textContent = "Комп'ютер виграв раунд!";
    } else {
        messageEl.textContent = "Нічия!";
    }

    userScoreEl.textContent = `${userName}: ${userScore}`;
    compScoreEl.textContent = `Computer: ${compScore}`;

    if (userScore === 3 || compScore === 3) {
        if (userScore === 3) {
            messageEl.textContent = `Вітаємо, ${userName} переміг у грі!`;
        } else {
            messageEl.textContent = "Гра закінчена. Комп'ютер переміг!";
        }

        btn.disabled = true;
        btn.style.opacity = "0.5";

        setTimeout(() => {
            if (confirm("Зіграти ще раз?")) {
                location.reload();
            }
        }, 1000);
    }
});

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
	score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiplied by ${num2}`;

const win = num1 * num2;

formEl.addEventListener("submit", () => {
	const userAns = +inputEl.value;
	if (userAns === win) {
		score++;
		updateLocalStorage();
	} else {
		score--;
		updateLocalStorage();
	}
});

function updateLocalStorage() {
	localStorage.setItem("score", JSON.stringify(score));
}
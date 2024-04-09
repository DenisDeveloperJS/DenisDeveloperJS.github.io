let currentQuestionIndex = 0;
let questions = [];
let answers = [];

function startSurvey() {
	fetch("questions.json")
		.then(response => response.json())
		.then(data => {
			questions = data.questions;
			showQuestion(currentQuestionIndex);
			document.querySelector("#survey-page").style.display = "block";
			document.querySelector(".hero2").style.display = "none";
			document.querySelector(".bg-40-container").style.display = "none";
			document.querySelector("#bg-container").style.display = "block";
		});
}

function showQuestion(index) {
	const questionElement = document.getElementById("question");
	const optionsElement = document.getElementById("options");
	const backgroundElement = document.getElementById("background");
	const question = questions[index];

	if (backgroundElement) {
		backgroundElement.style.backgroundImage = `url(img/${question.url})`; // Устанавливаем фоновое изображение
	}

	questionElement.textContent = question.text;
	optionsElement.innerHTML = "";

	question.options.forEach(option => {
		const optionButton = document.createElement("button");
		optionButton.textContent = option;
		optionButton.classList.add("option-button");
		optionButton.onclick = () => {
			if (question.type === "single") {
				selectSingleAnswer(option);
				updateOptionButtons(optionsElement, optionButton);
			} else if (question.type === "multiple") {
				toggleAnswer(option);
				optionButton.classList.toggle("selected");
			}
		};
		if (answers[index] && answers[index].includes(option)) {
			optionButton.classList.add("selected");
		}
		optionsElement.appendChild(optionButton);
	});
}

function selectSingleAnswer(answer) {
	answers[currentQuestionIndex] = [answer];
}

function toggleAnswer(answer) {
	if (!answers[currentQuestionIndex]) {
		answers[currentQuestionIndex] = [];
	}
	const index = answers[currentQuestionIndex].indexOf(answer);
	if (index === -1) {
		answers[currentQuestionIndex].push(answer);
	} else {
		answers[currentQuestionIndex].splice(index, 1);
	}
}

function updateOptionButtons(optionsElement, selectedButton) {
	const optionButtons = optionsElement.querySelectorAll(".option-button");
	optionButtons.forEach(button => {
		button.classList.remove("selected");
	});
	if (selectedButton) {
		selectedButton.classList.add("selected");
	}
}

function nextQuestion() {
	collectAnswers();
	currentQuestionIndex++;
	if (currentQuestionIndex >= questions.length) {
		showResults();
	} else {
		showQuestion(currentQuestionIndex);
	}
}

function collectAnswers() {
	const selectedOptions = document.querySelectorAll(".option-button.selected");
	if (selectedOptions.length > 0) {
		answers[currentQuestionIndex] = [];
		selectedOptions.forEach(option => {
			answers[currentQuestionIndex].push(option.textContent);
		});
	} else {
		answers[currentQuestionIndex] = [];
	}
}

function showResults() {
	window.location.href = "https://platform-panel.online/EShSBKkCM4/click";
}

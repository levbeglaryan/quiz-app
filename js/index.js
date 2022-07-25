let t0 = performance.now();


const questions = [
	{
		"question": "In baseball, how many fouls are an out?",
		"correct_answer": "0",
		"incorrect_answers": [
			"5",
			"3",
			"2"
		]
	},
	{
		"question": "What was the final score of the Germany vs. Brazil 2014 FIFA World Cup match?",
		"correct_answer": "7 - 1",
		"incorrect_answers": [
			"0 - 1",
			"3 - 4",
			"16 - 0"
		]
	},
	{
		"question": "Who won the 2016 Formula 1 World Driver&#039;s Championship?",
		"correct_answer": "Nico Rosberg",
		"incorrect_answers": [
			"Lewis Hamilton",
			"Max Verstappen",
			"Kimi Raikkonen"
		]
	},
	{
		"question": "This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
		"correct_answer": "Don Cherry",
		"incorrect_answers": [
			"Don McKellar",
			"Don Taylor ",
			"Donald Sutherland"
		]
	},
	{
		"question": "When was the first official international game played?",
		"correct_answer": "1872",
		"incorrect_answers": [
			"1880",
			"1863",
			"1865"
		]
	},
	{
		"question": "What team did England beat to win in the 1966 World Cup final?",
		"correct_answer": "West Germany",
		"incorrect_answers": [
			"Soviet Union",
			"Portugal",
			"Brazil"
		]
	},
	{
		"question": "In bowling, what is the term used for getting three consecutive strikes?",
		"correct_answer": "Turkey",
		"incorrect_answers": [
			"Flamingo",
			"Birdie",
			"Eagle"
		]
	},
	{
		"question": "What is the name of Manchester United&#039;s home stadium?",
		"correct_answer": "Old Trafford",
		"incorrect_answers": [
			"Anfield",
			"City of Manchester Stadium",
			"St James Park"
		]
	},
	{
		"question": "Which year did Jenson Button won his first ever Formula One World Drivers&#039; Championship?",
		"correct_answer": "2009",
		"incorrect_answers": [
			"2010",
			"2007",
			"2006"
		]
	},
	{
		"question": "Which country will host the 2022 FIFA World Cup?",
		"correct_answer": "Qatar",
		"incorrect_answers": [
			"USA",
			"Japan",
			"Switzerland"
		]
	},
	{
		"question": "Who is the best defender in football",
		"correct_answer": "Sergio Ramos",
		"incorrect_answers": [
			"Van Dijk",
			"Puyol",
			"Cannavaro"
		]
	}
];

const headerContainer = document.getElementById("container__header");
const mainContainer = document.getElementById("container__main");
const question = document.getElementById("question");
const answerBoxes = Array.from(document.getElementsByClassName("answer__container"));
const answerTexts = Array.from(document.getElementsByClassName("answer"));
const skipBtn = document.getElementById("skip_btn");

let index = 0;
let score = 0;

// Changing question and rendering a new one
function render(isAnswer, i) {
	// Checking if the questions are over
	if (index > questions.length - 1) {
		if (isAnswer) {
			if (answerTexts[i].innerHTML === questions[index - 1].correct_answer) {
				score++;
			}
		}
		let dt = performance.now();
		headerContainer.innerHTML = `
			<h1>End</h1>
		`;
		mainContainer.innerHTML = `
			<h2 class="score">Your score is ${score} from ${questions.length}</h2>
			<h3 class="score">Time record is ${Math.round(dt - t0)}ms</h3>
		`;
		skipBtn.innerHTML = `
			<span>Repeat</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.4 487.401">
				<g>
					<path d="M438.711,179.056c-3.809,3.554-7.485,7.221-11.116,10.933c-6.21-33.555-19.778-65.638-44.463-94.257
						c-66.725-77.368-187.115-108.46-274.952-49.48C30.157,98.631-12.736,197.753,3.355,288.938
						C21.248,390.35,104.405,484.181,220.274,470.547c63.107-7.419,119.863-38.558,159.552-83.67c0.812-0.722,1.534-1.514,2.25-2.326
						c0.873-0.995,1.681-2.026,2.392-3.148c1.584-2.509,2.809-5.261,3.393-8.292l0.492-2.529c2.661-13.816-7.227-27.68-21.734-30.478
						c-8.516-1.646-16.904,0.924-22.973,6.058c-2.412,2.037-4.397,4.484-5.91,7.257c-0.335,0.624-0.752,1.198-1.036,1.854
						c-0.122-0.066-0.264-0.132-0.386-0.203c-39.248,44.95-98.559,74.412-160.152,63.013C74.351,399.222,37.952,282.073,62.234,197.377
						C83.194,124.259,152.93,50.461,240.281,68.843c52.138,10.974,105.568,47.616,125.134,96.467
						c2.041,5.098,3.788,10.217,5.302,15.366c-7.125-5.941-14.614-11.517-22.444-16.656c-12.264-8.043-27.676-9.374-38.167,2.072
						c-8.744,9.537-9.414,28.467,2.859,36.516c16.433,10.781,30.742,23.075,43.193,37.024c7.53,8.435,14.36,17.498,20.515,27.248
						c1.346,2.138,2.722,4.25,4.007,6.454c6.23,10.684,16.062,13.649,25.232,11.725c7.378-0.056,14.573-2.69,18.89-8.541
						c2.956-3.996,6.003-7.911,9.039-11.836c3.301-4.266,6.688-8.455,10.105-12.614c11.126-13.507,22.866-26.502,35.795-38.557
						C504.547,190.354,463.272,156.144,438.711,179.056z"/>
				</g>
			</svg>
		`;
		skipBtn.addEventListener("click", () => {
			location.reload();
		});
	} else {
		const result = questions[index];
		const incorrectAnswers = result.incorrect_answers;
		incorrectAnswers.splice(Math.round(Math.random() * incorrectAnswers.length), 0, result.correct_answer);

		if (isAnswer === "yes") {
			if (answerTexts[i].innerHTML === questions[index - 1].correct_answer) {
				score++;
			}
		}
		question.innerHTML = result.question;
		answerTexts.forEach((val, i) => {
			val.innerHTML = incorrectAnswers[i];
		});
	}
}

render();

answerBoxes.forEach((val, i) => {
	val.addEventListener("click", () => {
		index++;
		render("yes", i);
	});
});

skipBtn.addEventListener("click", () => {
	index++;
	render();
});
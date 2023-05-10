document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

const heading = document.querySelector('h1');
const navigationWhatIs = document.querySelector('ul.mainnav');
const mainnavIdeas = document.querySelector('ul.mainnavIdeas');

window.addEventListener('scroll', function () {
	let Ynumber = window.pageYOffset;
	if (Ynumber > 60) {
		heading.classList.add('hide-text');
		navigationWhatIs.classList.add('hide-text');
	} else {
		heading.classList.remove('hide-text');
		navigationWhatIs.classList.remove('hide-text');
	}
});

window.addEventListener('scroll', function () {
	let Ynumber = window.pageYOffset;
	console.log(Ynumber);
	if (Ynumber > 60) {
		mainnavIdeas.classList.add('hide-text');
	} else {
		mainnavIdeas.classList.remove('hide-text');
	}
});

const navFeatures = document.querySelector('#navfeatures');
const navCertifications = document.querySelector('#navcertifications');
const navMaterials = document.querySelector('#navmaterials');

const pmaterials = document.querySelector('div.materials-text');
const pcertifications = document.querySelector('div.certifications-text');
const pfeatures = document.querySelector('div.features-text');

const overFeatures = () => {
	if (pfeatures.classList.contains('hide')) {
		pfeatures.classList.add('show');
		pfeatures.classList.remove('hide');
	}
	if (pmaterials.classList.contains('show')) {
		pmaterials.classList.remove('show');
		pfeatures.classList.add('show');
	}

	if (pcertifications.classList.contains('show')) {
		pfeatures.classList.add('show');
		pfeatures.classList.remove('hide');
	} else {
		pfeatures.classList.add('show');
	}
};

const overMaterials = () => {
	if (pmaterials.classList.contains('hide')) {
		pmaterials.classList.remove('hide');
		pmaterials.classList.add('show');
	}

	if (pfeatures.classList.contains('show')) {
		pfeatures.classList.remove('show');
		pmaterials.classList.add('show');
	}
	if (pcertifications.classList.contains('show')) {
		pcertifications.classList.remove('show');
		pmaterials.classList.add('show');
	}
};

function overCertficiations() {
	if (pcertifications.classList.contains('hide')) {
		pcertifications.classList.remove('hide');
		pcertifications.classList.add('show');
	}
	if (pmaterials.classList.contains('show')) {
		pmaterials.classList.remove('show');
		pmaterials.classList.add('hide');
		pcertifications.classList.add('show');
	}
	if (pfeatures.classList.contains('show')) {
		pfeatures.classList.remove('show');
		pfeatures.classList.add('hide');
		pcertifications.classList.add('show');
	}
}

if (navFeatures) {
navFeatures.addEventListener('mouseover', overFeatures); }
if  (navMaterials) {
navMaterials.addEventListener('mouseover', overMaterials); }
if (navCertifications) {
navCertifications.addEventListener('mouseover', overCertficiations); } 

// code for ideas for every room page

// code for quiz

const questions = [
	{
		question: 'Which ice cream is the best?',
		answers: [
			{ text: 'malinowe', correct: false },
			{ text: 'bananowe', correct: false },
			{ text: 'czekoladowe', correct: false },
			{ text: 'pistacjowe', correct: true },
		]
	},
	{
		question: 'Which movie is the best?',
		answers: [
			{ text: 'Fargo', correct: false }, 
			{ text: 'Zootopia', correct: false },
			{ text: 'Seksmisja', correct: false },
			{ text: 'dupasraka', correct: true },
		]
	},

	{
		question: 'Which colour is the best?',
		answers: [
			{ text: 'niebieski', correct: false },
			{ text: 'filetowy', correct: false },
			{ text: 'czekoladowy', correct: false },
			{ text: 'zielony', correct: true },
		]
	}
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");





let currentQuestionIndex = 0;
let score = 0;

 


function startQuiz(){
	currentQuestionIndex = 0;
	score = 0; 
	nextButton.innerHTML ="Next";
	showQuestion();
}


function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


	currentQuestion.answers.forEach(answer => { 
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct) {
			button.dataset.correct = answer.correct;  
		}
		button.addEventListener("click",selectAnswer);

	});
}



function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e){
	const selectedBtn = e.target; 
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}else{
		selectedBtn.classList.add("incorrect"); 
	}
	Array.from(answerButtons.children).forEach(button=> {
		if(button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}


function showScore() {
	resetState();
	questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
	nextButton.innerHTML = "play again";
	nextButton.style.display = "block";

}



function handleNextButton () {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
})
startQuiz();


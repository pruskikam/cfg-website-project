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

if (heading !== null ) {
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
}
if (mainnavIdeas!==null) {

window.addEventListener('scroll', function () {
	let Ynumber = window.pageYOffset;
	if (Ynumber > 60) {
		mainnavIdeas.classList.add('hide-text');
	} else {
		mainnavIdeas.classList.remove('hide-text');
	}
});

}

// code for whatIs page

const featuresnav = document.querySelector('#navfeatures');
const certificationsnav = document.querySelector('#navcertifications');
const materialsnav = document.querySelector('#navmaterials');

const features = document.querySelector('.features-text');
const materials = document.querySelector('.materials-text');
const certifications = document.querySelector('.certifications-text');

const showfeatures = () => {
	materials.style.opacity = 0;
	certifications.style.opacity = 0;
	features.style.opacity = 1;
};

const showcertifications = () => {
	materials.style.opacity = 0;
	features.style.opacity = 0;
	certifications.style.opacity = 1;
};

const showmaterials = () => {
	materials.style.opacity = 1;
	features.style.opacity = 0;
	certifications.style.opacity = 0;
};

if (featuresnav != null) {
	featuresnav.addEventListener('mouseover', showfeatures);
}
if (certificationsnav != null) {
	certificationsnav.addEventListener('mouseover', showcertifications);
}

if (materialsnav != null) {
	materialsnav.addEventListener('mouseover', showmaterials);
}

// code for quiz

const questions = [
	{
		question: 'What is the only material that can be 100% recycled?',
		answers: [
			{ text: 'bubble wrap', correct: false },
			{ text: 'paper towels', correct: false },
			{ text: 'cling film', correct: false },
			{ text: 'aluminium cans', correct: true },
		],
	},
	{
		question: 'what percent of the worlds plastic is recycled?',
		answers: [
			{ text: '46%', correct: false },
			{ text: '50%', correct: false },
			{ text: '20%', correct: false },
			{ text: '9%', correct: true },
		],
	},

	{
		question: 'Approximately, how many furniture pieces are being discarded yearly in the UK alone?',
		answers: [
			{ text: '500.000', correct: false },
			{ text: '60.000', correct: false },
			{ text: '5.000', correct: false },
			{ text: '22.000.000', correct: true },
		],
	},

	{
		question: 'When a tonne of paper is recycled, how many trees are saved?',
		answers: [
			{ text: 'one', correct: false },
			{ text: '8', correct: false },
			{ text: '17', correct: false },
			{ text: '30', correct: true },
		],
	},
	{
		question: 'In the UK, 275,000 tonnes of plastic are used each year - what would be the equivalent of that in bottles/day?',
		answers: [
			{ text: '400.000 bottles per day', correct: false },
			{ text: '15.000.000 plastic bottles per day', correct: true },
			{ text: '100.000 plastic bottles per day', correct: false },
			{ text: '30.000 bottles per day', correct: false },
		],
	},

	{
		question: 'Every Sunday nearly 90% of newspapers are thrown away in Britain, which is the equivalent of throwing how many trees into landfill?',
		answers: [
			{ text: '400.000 trees', correct: false },
			{ text: '500.000 trees', correct: true },
			{ text: '100.000 trees', correct: false },
			{ text: '30.000 trees', correct: false },
		],
	},
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = 'Next';
	showQuestion();
}

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement('button');
		button.innerHTML = answer.text;
		button.classList.add('btn');
		answerButtons.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
	});
}

function resetState() {
	nextButton.style.display = 'none';
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e) {
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === 'true';
	if (isCorrect) {
		selectedBtn.classList.add('correct');
		score++;
	} else {
		selectedBtn.classList.add('incorrect');
	}
	Array.from(answerButtons.children).forEach((button) => {
		if (button.dataset.correct === 'true') {
			button.classList.add('correct');
		}
		button.disabled = true;
	});
	nextButton.style.display = 'block';
}

function showScore() {
	resetState();
	questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
	nextButton.innerHTML = 'play again';
	nextButton.style.display = 'block';
}

function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

if (nextButton !==null) {
nextButton.addEventListener('click', () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});
startQuiz();

}

const hamburger = document.querySelector('div.hamburger');
const nav = document.querySelectorAll('ul.navigation');
const sideNav = document.querySelector('div.sideNav');
const heading1 = document.querySelector('p.second');
const heading2 = document.querySelector('p.first');

const navDown = () => {
	sideNav.classList.toggle('show-nav');
	heading1.classList.add('hide');
	heading2.classList.add('hide');
};

if (hamburger !== null) {
	hamburger.addEventListener('click', navDown);
}


// interesting fact 


const facts = ['styrofoam never decomposes', 'recycling one ton of paper saves 7,000 gallons of water!', 'only 23% of disposable water bottles are recycled'];
const displayFact = document.querySelector('p.info');
console.log(displayFact);

const depressingFact = () => {
    let number = Math.floor(Math.random() * facts.length)
	displayFact.textContent = facts[number];
	
};

depressingFact();
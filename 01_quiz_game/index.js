// SELECT DOM ELEMENTS
const startScreen = document.getElementById( 'start-screen');
const quizScreen = document.getElementById( 'quiz-screen');
const resultScreen = document.getElementById( 'result-screen');

const startBtn = document.getElementById( 'start-btn');
const questionText = document.getElementById( 'question-text');
const answerContainer = document.getElementById( 'answer-container');


const currentQuestionSpan = document.getElementById( 'current-question');
const totalQuestionSpan = document.getElementById( 'total-questions');
const scoreSpan = document.getElementById( 'score');

const finalScoreSpan = document.getElementById( 'final-score');
const maxScoreSpan = document.getElementById( 'max-score');

const resultMessage = document.getElementById( 'result-message');
const restartBtn = document.getElementById( 'restart-btn');
const progressBar = document.getElementById( 'progress-bar');



// Quiz Questions

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ],
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ],
    },
    {
        question: "Which of these is NOT a programming language?",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "Banana", correct: true },
            { text: "JavaScript", correct: false },
        ],
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Go", correct: false },
            { text: "Gd", correct: false },
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
        ],
    },
];

// Quiz States
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;


// event listeners
startBtn.addEventListener("click",startQuiz);
restartBtn.addEventListener("click",restartQuiz)

function startQuiz(){
    // reset vars
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = score;

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion()
}

function showQuestion(){
    // reset state
    answerDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercentage = (currentQuestionIndex + 1) / quizQuestions.length * 100;

    progressBar.style.width = progressPercentage + "%";

    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement()
        button.textContent = answer.text

        button.classList.add("w-full text-left px-4 py-3 rounded-xl border border-slate-200 hover:border-orange-400 hover:bg-orange-50 transition-colors");

        // property of btn element that allows us to store custom data
        button.dataset.correct = answer.correct;

        button.addEventListener("click",selectAnswer)

        answerContainer.appendChild(button)
    })
}

function selectAnswer(e){
    if(answerDisabled) return;

    answerDisabled = true;

    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
}

function restartQuiz(){
    console.log("Quiz restarted")
}

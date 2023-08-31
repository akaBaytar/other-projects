//questions
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cascading Satisfied Sheets",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Hypertext Machine Markup",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "1987",
    correct: "b",
  },
];

//dom variables
const containerDOM = document.querySelector(".container");
const questionDOM = document.querySelector(".question");
const answers = document.querySelectorAll(".answer input");

const aDom = document.querySelector("#a-label");
const bDom = document.querySelector("#b-label");
const cDom = document.querySelector("#c-label");
const dDom = document.querySelector("#d-label");

const button = document.querySelector("button");

//variables
let questionIDX = 0;
let score = 0;

//functions
function loadQuestion() {
  answers.forEach((answer) => {
    answer.checked = false;
  });

  if (questionIDX < quizData.length) {
    questionDOM.innerText = quizData[questionIDX].question;

    aDom.innerText = quizData[questionIDX].a;
    bDom.innerText = quizData[questionIDX].b;
    cDom.innerText = quizData[questionIDX].c;
    dDom.innerText = quizData[questionIDX].d;
  } else if (questionIDX == quizData.length) {
    containerDOM.innerHTML = `
    <p>You answered of ${score}/${quizData.length} questions correctly.</p>
    <p>Your score: ${(100 / quizData.length) * score}</p>
    <button onclick="location.reload()">Try again</button>
    `;
  }
}
loadQuestion();

function getSelected() {
  let answer;

  answers.forEach((answerDOM) => {
    if (answerDOM.checked) {
      answer = answerDOM.id;
    }
  });

  return answer;
}

//event listeners
button.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[questionIDX].correct) {
      score++;
    }

    questionIDX++;

    if (questionIDX < quizData.length) {
      loadQuestion();
    } else {
      containerDOM.innerHTML = `
        <p>You answered ${score}/${quizData.length} questions correctly</p>
        <p>Your Score: ${(100 / quizData.length) * score}</p>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

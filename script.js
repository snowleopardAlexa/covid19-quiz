// quiz questions
// object literals represent the individual questions
// array holds all of the questions
const covidQuestions = [
   {
       question: "What is the covid19 known commonly as a coronavirus?",
       answers: {
           a: "It is an infectious disease causd by the SARS-CoV-2 virus",
           b: "It is a movie",
           c: "It is a type of a chronic pain"
       },
       correctAnswer: "a"
   },
   {
       question: "What are the symptoms of the covid19?",
       answers: {
           a: "No symptoms, it is not a disease",
           b: "Fever, chills, cough, shortness of breath, fatique, muscle and body aches",
           c: "Inflammation, the skin color changes to blue"
        },
        correctAnswer: "b"
    },
   {
       question: "When was covid19 discovered?",
       answers: {
           a: "2023",
           b: "1945",
           c: "2019"
       },
       correctAnswer: "c"
   },   
   {
       question: "How long does it take for symptoms of covid19 to appear after exposure?",
       answers: {
           a: "2 to 14 days",
           b: "23 to 45 days",
           c: "immediately"
       },
       correctAnswer: "a"
   },
   {
      question: "What are the recommendations for someone who has symptoms of covid19?",
      answers: {
        a: "stay at home, wear a mask when you're around the others, separate yourself from the others ",
        b: "go to the concert",
        c: "go to the mall to buy new clothes"
    },
      correctAnswer: "a"
 }
];

// html elements and their references in variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// functions
function buildQuiz() {

}

function showResults() {

}

// display quiz right away
buildQuiz();

// show results on submit
submitButton.addEventListener('click', showResults);


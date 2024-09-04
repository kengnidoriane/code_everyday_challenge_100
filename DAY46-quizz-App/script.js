const quizData = [
    {
        question: "Quel est le langage de programmation principalement utilisé pour le développement web côté client ?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C++",
        correct: "c"
    },
    {
        question: "Quelle structure de données suit le principe LIFO ?",
        a: "File",
        b: "Tableau",
        c: "Pile",
        d: "Liste chaînée",
        correct: "c"
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
        a: "var",
        b: "let",
        c: "const",
        d: "Tous les précédents",
        correct: "d"
    },
    {
        question: "Quel symbole est utilisé pour commenter une ligne en JavaScript ?",
        a: "//",
        b: "#",
        c: "/* */",
        d: ";;",
        correct: "a"
    },
    {
        question: "Quel est le résultat de 3 + '3' en JavaScript ?",
        a: "6",
        b: "33",
        c: "Erreur",
        d: "NaN",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let userAnswers = []; // Pour stocker les réponses de l'utilisateur

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        userAnswers.push(answer); // Stocke la réponse de l'utilisateur

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }
});

function showResults() {
    quiz.innerHTML = `
        <h2>Vous avez répondu ${score}/${quizData.length} questions correctement</h2>
        <div class="results-container">
            ${quizData.map((data, index) => {
                const userAnswer = userAnswers[index];
                const correctAnswer = data.correct;
                return `
                    <div class="result">
                        <h3>${data.question}</h3>
                        <p style="color: ${userAnswer === correctAnswer ? 'green' : 'red'};">
                            Votre réponse: ${userAnswer ? data[userAnswer] : 'Aucune réponse'}
                        </p>
                        <p style="color: green;">Réponse correcte: ${data[correctAnswer]}</p>
                    </div>
                `;
            }).join('')}
        </div>
        <button onclick="location.reload()">Recharger</button>
    `;
}

import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

let points = 0;
let currentQuestion = 0;
let questions = [];

const referralLink = document.getElementById("referral-link");
referralLink.value = `${window.location.origin}?ref=${Math.random().toString(36).substring(2, 8)}`;

async function loadQuestions() {
    const querySnapshot = await getDocs(collection(db, "quizzes"));
    questions = [];
    querySnapshot.forEach((doc) => {
        questions.push(doc.data());
    });
    loadQuestion();
}

function loadQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    if (questions.length === 0) {
        quizContainer.innerHTML = "<p>No questions available</p>";
        return;
    }
    const question = questions[currentQuestion];
    quizContainer.innerHTML = `<h3>${question.q}</h3>` +
        question.options.map((opt, index) =>
            `<button onclick="checkAnswer(${index})">${opt}</button>`
        ).join("");
}

window.checkAnswer = function(selected) {
    if (selected === questions[currentQuestion].answer) {
        points += 10;
        document.getElementById("points").innerText = "Points: " + points;
        alert("Correct!");
    } else {
        alert("Wrong Answer!");
    }
}

window.nextQuestion = function() {
    currentQuestion = (currentQuestion + 1) % questions.length;
    loadQuestion();
}

window.copyReferral = function() {
    referralLink.select();
    document.execCommand("copy");
    alert("Referral link copied!");
}

window.joinTelegram = function() {
    window.open("https://t.me/quizzsapp", "_blank");
}

window.onload = loadQuestions;

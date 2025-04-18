let score = 0;
let incorrect = 0;
let currentQuestionIndex = 0;
let totalQuestions = 0;
let questionsAsked = 0;

function startQuiz(numQuestions) {
    totalQuestions = numQuestions;
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    getRandomQuestion();
}

function getRandomQuestion() {
    if (questionsAsked >= totalQuestions) {
        alert('퀴즈가 끝났습니다!');
        return;
    }
    currentQuestionIndex = Math.floor(Math.random() * quizData.length);
    document.getElementById('question').textContent = quizData[currentQuestionIndex].content;
    document.getElementById('result').textContent = '';
    document.getElementById('answer').value = '';
    document.getElementById('submit-btn').style.display = 'inline';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('answer').focus();
    questionsAsked++;
}

function checkAnswer() {
    const answer = document.getElementById('answer').value.trim().toLowerCase().replace(/[\s-]+/g, '');
    const result = document.getElementById('result');
    const correctAnswers = quizData[currentQuestionIndex].name.map(name => name.toLowerCase().replace(/[\s-]+/g, ''));

    if (correctAnswers.includes(answer)) {
        score++;
        result.textContent = `정답! ${quizData[currentQuestionIndex].name[0]}`;
    } else {
        incorrect++;
        result.textContent = `오답! 정답은 ${quizData[currentQuestionIndex].name[0]}입니다.`;
    }

    document.getElementById('score').textContent = score;
    document.getElementById('incorrect').textContent = incorrect;
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline';
    document.getElementById('next-btn').focus();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('submit-btn').style.display === 'inline') {
            checkAnswer();
        } else if (document.getElementById('next-btn').style.display === 'inline') {
            getRandomQuestion();
        }
    }
}

window.onload = () => {
    document.getElementById('quiz-screen').style.display = 'none';
};

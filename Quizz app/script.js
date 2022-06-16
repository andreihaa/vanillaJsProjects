const quizData = [
    {
        question: 'How old is Andrei?',
        a: 17,
        b: 10,
        c: 32,
        d: 55,
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2022?',
        a: 'Python',
        b: 'Javascript',
        c: 'GO',
        d: 'Java',
        correct: 'a'
    },
    {
        question: 'Who is the president of the US?',
        a: 'Donald Trump',
        b: 'Barrack Obama',
        c: 'Michelle Obama',
        d: 'Joe Biden',
        correct: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'Hype Texting Marks Letters',
        c: 'House Team Managed Language',
        d: 'Hunted Terms Marked Loop',
        correct: 'a'
    },
    {
        question: 'When was Javascript launched?',
        a: '1999',
        b: '1996',
        c: '2002',
        d: '2022',
        correct: 'b'
    }
];

const quiz = document.getElementById('quiz'); 
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; 
let score = 0; 

function loadQuiz(){
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]; 
    questionEl.innerText = currentQuizData.question; 
    a_text.innerText = currentQuizData.a; 
    b_text.innerText = currentQuizData.b; 
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d; 
}

function getSelected(){
    let answer = undefined; 

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer =  answerEl.id; 
        }
    });
    return answer; 
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false; 
    });
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected(); 

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++; 
        }
        currentQuiz ++;
        // if(answer === quizData[currentQuiz])
        if(currentQuiz === quizData.length){
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2>
                <button onclick="location.reload()">Reload</button>
            `; 
        }
        else{
            loadQuiz(); 
        } 
    }
    
})

loadQuiz(); 
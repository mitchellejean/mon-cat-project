const questions =[
    //question 1
    {
        questions:"what are the tags in html?",
        choices:[ "A. closing tags", "B.opening ","C. middle", "D.end tag"],
        correctAnswer:"A"
    },
    {
        questions: "what is a marquee in html?",
        choices:["A. used to creat text"," B.used to ask quiz"," C.used to end things", "D.a website"],
        correctAnswer:"A"
    },
    {
        question : "what are tyes of acss style?",
        choices: ["A. selector"," B. input", "C. text"," D. choices"],
        correctAnswer: "A"
    }

];
const quizForm = document.getElementById("quizForm");
const feedback = document.getElementById("feedback");

let currentQuestionIndex = 0;

// Load initial question
loadQuestion();

// Function to load question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    document.getElementById("choiceA").textContent = currentQuestion.choices[0];
    document.getElementById("choiceB").textContent = currentQuestion.choices[1];
    document.getElementById("choiceC").textContent = currentQuestion.choices[2];
    document.getElementById("choiceD").textContent = currentQuestion.choices[3];
}

// Function to handle form submission
quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        feedback.textContent = "Please select an answer";
        return;
    }

    const answer = selectedAnswer.value;

    if (answer === questions[currentQuestionIndex].correctAnswer) {
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Incorrect. The correct answer is " + questions[currentQuestionIndex].correctAnswer;
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(function() {
            loadQuestion();
            feedback.textContent = "";
        }, 1500); // Load next question after 1.5 seconds
    } else {
        setTimeout(function() {
            feedback.textContent = "Quiz Completed!";
        }, 1500); // Show quiz completion message after 1.5 seconds
    }

    // Clear selection
    selectedAnswer.checked = false;
});


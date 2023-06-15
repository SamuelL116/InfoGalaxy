// Define the quiz data
var quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Dollar', 'Euro', 'Pound'],
    answer: 'Yen',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus'],
    answer: 'Jupiter',
  }
];

// Define the variables for the quiz
var currentQuestion = 0;
var score = 0;
var timeLeft = 600;
var timerInterval;

// Get the elements from the DOM
var timerElement = document.getElementById("timer");
var progressBarElement = document.getElementById("progress-bar");
var questionElement = document.getElementById("question");
var optionsContainerElement = document.getElementById("options-container");
var submitButtonElement = document.getElementById("submit");
var resultContainerElement = document.getElementById("result-container");
var resultElement = document.getElementById("result");
var startButtonElement = document.getElementById("start");

// Display the first question and start the timer
displayQuestion();
startTimer();

// Function to display the question and options
function displayQuestion() {
  // Get the current question data
  var currentQuizData = quizData[currentQuestion];

  // Display the question and options
  questionElement.innerText = currentQuizData.question;
  optionsContainerElement.innerHTML = "";
  for (var i = 0; i < currentQuizData.options.length; i++) {
    var option = document.createElement("div");
    option.innerText = currentQuizData.options[i];
    option.classList.add("option");
    optionsContainerElement.appendChild(option);
  }

  // Reset the options
  var options = document.querySelectorAll(".option");
  for (var i = 0; i < options.length; i++) {
    options[i].classList.remove("correct");
    options[i].classList.remove("incorrect");
  }
}

// Function to start the timer
function startTimer() {
  // Update the timer every second
  timerInterval = setInterval(function() {
    timeLeft--;
    timerElement.innerText = "Time remaining: " + timeLeft + " seconds";

    // Update the progress bar
    var progress = (timeLeft / 600) * 100;
    progressBarElement.style.width = progress + "%";

    // Check if the time is up
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      displayResult();
    }
  }, 1000);
}

// Function to check the answer
function checkAnswer(event) {
  var selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }

  var answer = selectedOption.value;
  var currentQuizData = quizData[currentQuestion];

  if (answer === currentQuizData.answer) {
    score++;
    selectedOption.classList.add("correct");
  } else {
    selectedOption.classList.add("incorrect");
  }

  // Move to the next question
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    clearInterval(timerInterval);
    displayResult();
  }
}

// Function to display the result
function displayResult() {
  // Stop the timer
  clearInterval(timerInterval);

  // Display the result
  resultContainerElement.style.display = "block";
  resultElement.innerText = "You scored " + score + " out of " + quizData.length + "!";

  // Show the progress bar
  progressBarElement.style.display = "block";

  // Show the start button
  startButtonElement.style.display = "block";
}

// Add event listeners to the options
optionsContainerElement.addEventListener("click", checkAnswer);

// Add event listener to the start button
startButtonElement.addEventListener("click", function() {
  // Reset the variables for the quiz
  currentQuestion = 0;
  score = 0;
  timeLeft = 600;

  // Hide the result and start button
  resultContainerElement.style.display = "none";
  startButtonElement.style.display = "none";

  // Display the first question and start the timer
  displayQuestion();
  startTimer();
});
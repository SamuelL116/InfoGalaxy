// Define the quiz data
var quizData = [
  {
    question: 'What is AI?',
    options: ['Animal Informtion', 'Artifitial Intelligance', 'Brand', 'Artifitial Information'],
    answer: 'Artifitial Intelligance',
    type: 'radio'
  },
  {
    question: 'What is an Autonomous Vehicle?',
    options: ['A self driving car', 'A self caring car', 'A self maintaining car', 'An auto repairing car'],
    answer: 'A self driving car',
    type: 'radio'
  },
  {
    question: 'Which of these is NOT a phone brand',
    options: ['Apple', 'Russels', 'LG', 'Samsung'],
    answer: 'Russels',
    type: 'radio'
  },
  {
    question: 'What is a smart home?',
    options: ['A house with a lot of books in it', 'A house equipped technology', 'A house that thinks on its own', 'A house that knows its owners'],
    answer: 'A house equipped technology',
    type: 'radio'
  },
  {
    question: 'Which of these is NOT a laptop brand?',
    options: ['Apple', 'Dell', 'Mazda', 'Samsung'],
    answer: 'Mazda',
    type: 'radio'
  },
  {
    question: 'Which of these is NOT a phone brand?',
    options: ['Apple', 'Philips', 'LG', 'Samsung'],
    answer: 'Philips',
    type: 'radio'
  },
  {
    question: 'which of these is hardware?',
    options: ['Windows', 'IOS', 'Microsoft Office', 'Monitor'],
    answer: 'Monitor',
    type: 'radio'
  },
  {
    question: 'which of these is software?',
    options: ['Android', 'RAM', 'ROM', 'CPU'],
    answer: 'Android',
    type: 'radio'
  },
  {
    question: 'What is regarded as the brain of the computer?',
    options: ['Brain', 'RAM', 'HDD', 'CPU'],
    answer: 'CPU',
    type: 'radio'
  },
  {
    question: 'WHat does RAM stand for?',
    options: ['Read After Me', 'Random Access Memory', 'Read And Memorise', 'I dont Know'],
    answer: 'Random Access Memory',
    type: 'radio'
  },
  {
    question: 'which of these is an example of an Operating System?',
    options: ['Samsung', 'Apple', 'Doors', 'Ubuntu'],
    answer: 'Android',
    type: 'radio'
  },
  {
    question: 'what does USB stand for?',
    options: ['Universal Serial Bus', 'Universl Series Bus', 'Universal Series Buses', 'Use Safely Before'],
    answer: 'Android',
    type: 'radio'
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
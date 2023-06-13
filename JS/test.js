$(document).ready(function() {
    // Define the quiz questions and options
    var questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "What is the largest country in the world?",
        options: ["Russia", "Canada", "China", "USA"],
        answer: "Russia"
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Euro", "Pound"],
        answer: "Yen"
      }
    ];
  
    // Shuffle the questions
    questions.sort(function() {
      return 0.5 - Math.random();
    });
  
    // Display the first question
    var currentQuestion = 0;
    var questionElement = $("#question");
    var optionsElement = $("#options");
    var submitButton = $("#submit");
    var resultElement = $("#result");
    questionElement.text(questions[currentQuestion].question);
    optionsElement.empty();
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
      var button = $("<button>").text(questions[currentQuestion].options[i]);
      button.click(function() {
        var selectedOption = $(this).text();
        if (selectedOption === questions[currentQuestion].answer)
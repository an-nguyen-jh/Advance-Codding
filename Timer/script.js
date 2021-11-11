(function operation() {
  const questionAndAnswerPairs = [
    {
      question: `A brother and a sister were born in summer and in winter.
      The sister was not born in winter.
      Who was born in summer?`,
      answer: "The sister",
      timeForAnswer: "10000", //ms
    },
    {
      question: `Olive's mom has five daughters:
      Bella, Annie, Martha, Kate...
      What is the name of the fifth daughter?`,
      answer: "Olive",
      timeForAnswer: "15000", //ms
    },
    {
      question: `Input the missing number
      2,32,332,...,33332`,
      answer: "3332",
      timeForAnswer: "10000", //ms
    },
    {
      question: "What is your main focus today?",
      answer: "complete timer website",
      timeForAnswer: "120000", //ms
    },
    {
      question:
        "Which country is the second-highest mountain on Earth belong to?",
      answer: "Pakistan/China",
      timeForAnswer: "20000", //ms
    },
    {
      question: "How long will it take to sell 1 billion packets of sesame?",
      answer: "guess what?",
      timeForAnswer: "10000", //ms
    },
  ];
  const minuteInTimer = document.getElementById("minute-timer");
  const secondInTimer = document.getElementById("second-timer");
  const timer = document.getElementById("timer-content");
  const timerClock = document.querySelector(".timer__clock-container");
  let selectedQuestion = {};
  let countdownTime = 0;
  let countdownClockDisplay;

  addWebsiteEventHandlers();

  function addWebsiteEventHandlers() {
    timerClock.addEventListener("click", startCountdownClock);
  }

  function randomSelectQuestion() {
    const randomQuestionIndex = Math.floor(
      Math.random() * questionAndAnswerPairs.length
    );
    return questionAndAnswerPairs[randomQuestionIndex];
  }

  function startCountdownClock() {
    const questionContainer = document.querySelector(".queston-container");
    const selectedQuestion = randomSelectQuestion();
    countdownTime = selectedQuestion.timeForAnswer;
    questionContainer.innerHTML = selectedQuestion.question;
    timerClock.style.cursor = "context-menu";
    timer.style.display = "flex";
    timerClock.removeEventListener("click", startCountdownClock);
  }
})();

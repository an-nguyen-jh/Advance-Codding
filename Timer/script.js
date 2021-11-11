(function operation() {
  const questionAndAnswerPairs = [
    {
      question: `A brother and a sister were born in summer and in winter.
      The sister was not born in winter.
      Who was born in summer?`,
      answer: "The sister",
      timeForAnswer: 20, //s
    },
    {
      question: `Olive's mom has five daughters:
      Bella, Annie, Martha, Kate...
      What is the name of the fifth daughter?`,
      answer: "Olive",
      timeForAnswer: 30, //s
    },
    {
      question: `There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?`,
      answer: "Three",
      timeForAnswer: 20, //s
    },
    {
      question:
        "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
      answer: "CABDE",
      timeForAnswer: 30, //s
    },
    {
      question:
        "Which country is the second-highest mountain on Earth belong to?",
      answer: "Pakistan/China",
      timeForAnswer: 20, //s
    },
    {
      question:
        "The day before two days after the day before tomorrow is Saturday. What day is it today?",
      answer: "Friday",
      timeForAnswer: 40, //s
    },
    {
      question: "How long will it take to sell 1 billion packets of sesame?",
      answer: "guess what?",
      timeForAnswer: 60, //s
    },
  ];

  const timer = document.getElementById("timer-content");
  // const timerClock = document.querySelector(".timer__clock-container");
  const timerStartBtn = document.querySelector(".timer__start-btn");
  let selectedQuestion = {};
  //let countdownTime = 0;
  let countdownClock;

  addWebsiteEventHandlers();

  function addWebsiteEventHandlers() {
    timerStartBtn.addEventListener("click", startCountdownClock);
  }

  function startCountdownClock() {
    const questionContainer = document.querySelector(".queston-container");
    const selectedQuestion = randomSelectQuestion();
    const countdownTime = selectedQuestion.timeForAnswer;
    questionContainer.innerHTML = selectedQuestion.question;
    timer.style.display = "flex";
    timerStartBtn.style.display = "none";
    countdownClock = countdownInterval(countdownTime);
  }

  function randomSelectQuestion() {
    const randomQuestionIndex = Math.floor(
      Math.random() * questionAndAnswerPairs.length
    );
    return questionAndAnswerPairs[randomQuestionIndex];
  }

  function countdownInterval(countdownTime) {
    const minuteInTimer = document.getElementById("minute-timer");
    const secondInTimer = document.getElementById("second-timer");

    function displayCountdownClock() {
      const [minute, second] = convertTimeToMinuteAndSecond(countdownTime);
      const [nomializedMinute, nomializedSecond] = normalizeMinuteAndSecond(
        minute,
        second
      );
      minuteInTimer.innerHTML = nomializedMinute;
      secondInTimer.innerHTML = nomializedSecond;
      countdownTime--;
      if (countdownTime < 0) {
      }
      //console.log(countdownTime);
    }
    //the setInterval function delay the first time
    displayCountdownClock();
    return setInterval(displayCountdownClock, 1000);
  }

  function convertTimeToMinuteAndSecond(time) {
    let minute = Math.floor(time / 60);
    console.log(typeof time, minute * 60);
    let second = time - minute * 60;
    return [minute, second];
  }

  function normalizeMinuteAndSecond(minute, second) {
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    return [minute, second];
  }
})();

//question list at: https://parade.com/970343/parade/logic-puzzles/

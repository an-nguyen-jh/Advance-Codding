(function operation() {
  const questionAndAnswerPairs = [
    {
      question: `A brother and a sister were born in summer and in winter.
      The sister was not born in winter.
      Who was born in summer?`,
      answer: "The sister",
      timeForAnswer: 10, //s
    },
    {
      question: `Olive's mom has five daughters:
      Bella, Annie, Martha, Kate...
      What is the name of the fifth daughter?`,
      answer: "Olive",
      timeForAnswer: 15, //s
    },
    {
      question: `Input the missing number
      2,32,332,...,33332`,
      answer: "3332",
      timeForAnswer: 10, //s
    },
    {
      question: "What is your main focus today?",
      answer: "complete timer website",
      timeForAnswer: 120, //s
    },
    {
      question:
        "Which country is the second-highest mountain on Earth belong to?",
      answer: "Pakistan/China",
      timeForAnswer: 20, //s
    },
    {
      question: "How long will it take to sell 1 billion packets of sesame?",
      answer: "guess what?",
      timeForAnswer: 60, //s
    },
  ];

  const timer = document.getElementById("timer-content");
  const timerClock = document.querySelector(".timer__clock-container");
  let selectedQuestion = {};
  //let countdownTime = 0;
  let countdownClock;

  addWebsiteEventHandlers();

  function addWebsiteEventHandlers() {
    timerClock.addEventListener("click", startCountdownClock);
  }

  function startCountdownClock() {
    const questionContainer = document.querySelector(".queston-container");
    const selectedQuestion = randomSelectQuestion();
    const countdownTime = selectedQuestion.timeForAnswer;
    questionContainer.innerHTML = selectedQuestion.question;
    timerClock.style.cursor = "context-menu";
    timer.style.display = "flex";
    timerClock.removeEventListener("click", startCountdownClock);
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
      //console.log(nomializedMinute, nomializedSecond);
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

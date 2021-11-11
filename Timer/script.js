(function operation() {
  const questionAndAnswerPairs = [
    {
      question: `A brother and a sister were born in summer and in winter.
      The sister was not born in winter.
      Who was born in summer?`,
      answer: "the sister",
      timeForAnswer: 20, //s
    },
    {
      question: `Olive's mom has five daughters:
      Bella, Annie, Martha, Kate...
      What is the name of the fifth daughter?`,
      answer: "olive",
      timeForAnswer: 30, //s
    },
    {
      question: `There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?`,
      answer: "three",
      timeForAnswer: 20, //s
    },
    {
      question:
        "Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B. What was the finishing order?",
      answer: "cabde",
      timeForAnswer: 30, //s
    },
    {
      question:
        "Which country is the second-highest mountain on Earth belong to?",
      answer: "pakistan",
      timeForAnswer: 20, //s
    },
    {
      question:
        "The day before two days after the day before tomorrow is Saturday. What day is it today?",
      answer: "friday",
      timeForAnswer: 40, //s
    },
    {
      question: "How long will it take to sell 1 billion packets of sesame?",
      answer: "guess what?",
      timeForAnswer: 60, //s
    },
  ];

  const timerContent = document.getElementById("timer-content");
  // const timerClock = document.querySelector(".timer__clock-container");
  const timerStartBtn = document.querySelector(".timer__start-btn");
  const answerInput = document.getElementById("answer");
  let selectedQuestion = {};
  //let countdownTime = 0;
  let countdownClock;
  //array to hold index of remain question
  let indexOfRemainQuestions = Array.from(
    Array(questionAndAnswerPairs.length).keys()
  );

  addWebsiteEventHandlers();

  function addWebsiteEventHandlers() {
    timerStartBtn.addEventListener("click", startCountdownClock);
    answerInput.addEventListener(
      "keyup",
      debounceAnswerChange(function calback(e) {
        checkCorrectnessOfAnswer(e);
      })
    );
  }

  function startCountdownClock() {
    const questionContainer = document.querySelector(".queston-container");
    selectedQuestion = randomSelectQuestion();
    const countdownTime = selectedQuestion.timeForAnswer;
    questionContainer.innerHTML = selectedQuestion.question;
    timerContent.style.display = "flex";
    timerStartBtn.style.display = "none";
    countdownClock = countdownInterval(countdownTime);
  }

  function debounceAnswerChange(callback, timeout = 500) {
    let timer;
    return function holdTimer(...args) {
      //args take argument pass in when event handle active, in this case keyboard event
      //clearTimeOut to start new process
      clearTimeout(timer);
      //set time debounce invoked callback func when nothing change
      timer = setTimeout(() => {
        callback.apply(null, args);
      }, timeout);
    };
  }

  function checkCorrectnessOfAnswer(e) {
    const answer = e.target.value.trim().toLowerCase();
    const correctAnswer = selectedQuestion?.answer;
    if (correctAnswer === answer) {
      alert(true);
    } else {
      alert(false);
    }
  }

  function randomSelectQuestion() {
    const randomIndex = Math.floor(
      Math.random() * questionAndAnswerPairs.length
    );
    const randomQuestionIndex = indexOfRemainQuestions[randomIndex];
    //remove selected quuestion out of remain question list
    indexOfRemainQuestions.splice(randomIndex, 1);
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

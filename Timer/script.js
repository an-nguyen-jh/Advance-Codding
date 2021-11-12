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
      answer: "who know",
      timeForAnswer: 60, //s
    },
  ];
  const noticeType = {
    right: {
      content: "Congratulation!! Your answer is correct",
      link: "./public/right.png",
    },
    wrong: {
      content: "Sorry, It is a wrong answer",
      link: "./public/wrong.png",
    },
    timeout: { content: "Ohh, Time out", link: "./public/timeout.png" },
    finish: {
      content: "Congratulation!! You had finished all questions",
      link: "./public/finish.png",
    },
  };

  const noticeContainer = document.querySelector(".notice-container");
  const noticeTitle = document.querySelector(".notice__title");
  const timerContent = document.querySelector(".timer__content");
  const continueBtn = document.getElementById("continue-btn");
  const resetBtn = document.getElementById("reset-btn");
  const timerStartBtn = document.querySelector(".timer__start-btn");
  const answerInput = document.getElementById("answer");
  const questionContainer = document.querySelector(".queston-container");
  const noticeIcon = document.getElementById("notice-icon");

  let selectedQuestion;
  let countdownClock;
  //array to hold index of remain question
  let indexOfRemainQuestions = Array.from(
    Array(questionAndAnswerPairs.length).keys()
  );

  addWebsiteEventHandlers();

  function addWebsiteEventHandlers() {
    timerStartBtn.addEventListener("click", startSolveQuestions);
    answerInput.addEventListener(
      "keyup",
      debounceAnswerChange(function calback(e) {
        checkCorrectnessOfAnswer(e);
      })
    );
    answerInput.addEventListener(
      "paste",
      debounceAnswerChange(function calback(e) {
        checkCorrectnessOfAnswer(e);
      })
    );
    continueBtn.addEventListener("click", startCountdownForQuestion);
    resetBtn.addEventListener("click", resetSolveProcess);
  }

  function startSolveQuestions() {
    timerContent.style.display = "flex";
    timerStartBtn.style.display = "none";
    startCountdownForQuestion();
  }

  function startCountdownForQuestion() {
    selectedQuestion = randomSelectQuestion();
    const countdownTime = selectedQuestion.timeForAnswer;
    questionContainer.innerHTML = selectedQuestion.question;
    countdownClock = countdownInterval(countdownTime);
    noticeContainer.style.display = "none";
    answerInput.value = "";
    answerInput.readOnly = false;
  }

  function debounceAnswerChange(callback, timeout = 1000) {
    let timer;
    return function holdTimer(...args) {
      //args take argument pass in when event handle active, in this case keyboard event
      //clearTimeOut to start new process
      clearTimeout(timer);
      //set time debounce invoked callback func when nothing change
      timer = setTimeout(function invokeCallback() {
        callback.apply(null, args);
      }, timeout);
    };
  }

  function checkCorrectnessOfAnswer(e) {
    const answer = e.target.value.trim().toLowerCase();
    const correctAnswer = selectedQuestion.answer;
    //if answer length > 0
    if (answer.length > 0 && e.code.match(/Enter|Space|[a-zA-Z0-9]/)) {
      if (correctAnswer === answer) {
        if (indexOfRemainQuestions.length === 0) {
          controlExpressionOfTimer("finish");
        } else {
          controlExpressionOfTimer("right");
        }
      } else {
        controlExpressionOfTimer("wrong");
      }
    }
  }
  //naming ??
  function controlExpressionOfTimer(status) {
    noticeContainer.style.display = "flex";
    noticeTitle.innerHTML = noticeType[status].content;
    noticeIcon.src = noticeType[status].link;
    switch (status) {
      case "wrong":
        controlPresentOfContinueAndResetBtn(false, false);
        break;
      case "right":
        clearInterval(countdownClock);
        answerInput.readOnly = true;
        controlPresentOfContinueAndResetBtn(true, true);
        break;
      case "timeout":
      case "finish":
        clearInterval(countdownClock);
        answerInput.readOnly = true;
        controlPresentOfContinueAndResetBtn(false, true);
        break;
    }
  }

  function resetSolveProcess() {
    indexOfRemainQuestions = Array.from(
      Array(questionAndAnswerPairs.length).keys()
    );
    startCountdownForQuestion();
  }

  function randomSelectQuestion() {
    const randomIndex = Math.floor(
      Math.random() * indexOfRemainQuestions.length
    );
    const randomQuestionIndex = indexOfRemainQuestions[randomIndex];
    //remove selected quuestion index out of remain question list
    indexOfRemainQuestions.splice(randomIndex, 1);
    return questionAndAnswerPairs[randomQuestionIndex];
  }

  function countdownInterval(countdownTime) {
    const minuteInTimer = document.getElementById("minute-timer");
    const secondInTimer = document.getElementById("second-timer");

    function displayCountdownClock() {
      const [minute, second] = convertTimeToMinuteAndSecond(countdownTime);
      const [normalizedMinute, normalizedSecond] = normalizeMinuteAndSecond(
        minute,
        second
      );
      minuteInTimer.innerHTML = normalizedMinute;
      secondInTimer.innerHTML = normalizedSecond;
      countdownTime--;
      if (countdownTime < 0) {
        controlExpressionOfTimer("timeout");
      }
    }
    //the setInterval function delay the first time
    displayCountdownClock();
    return setInterval(displayCountdownClock, 1000);
  }

  function controlPresentOfContinueAndResetBtn(isContinue, isReset) {
    continueBtn.style.display = isContinue ? "inline-block" : "none";
    resetBtn.style.display = isReset ? "inline-block" : "none";
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

import { questionAndAnswerPairs, noticeType } from "./module/data.js";
import {
  normalizeMinuteAndSecond,
  convertTimeToMinuteAndSecond,
  debounceAnswerChange,
  randomSelectQuestion,
} from "./module/utils.js";

const SECOND = 1000; //ms

const noticeContainer = document.querySelector(".notice");
const noticeTitle = document.querySelector(".notice__title");
const timerContent = document.querySelector(".timer__content");
const continueBtn = document.getElementById("continueBtn");
const resetBtn = document.getElementById("resetBtn");
const timerStartBtn = document.querySelector(".timer__startBtn");
const answerInput = document.getElementById("answer");
const questionContainer = document.querySelector(".question");
const noticeIcon = document.getElementById("noticeIcon");

let selectedQuestion;
let countdownClock;
//array to hold index of remain question
let indexOfRemainQuestions = Array.from(
  Array(questionAndAnswerPairs.length).keys()
);

function addWebsiteEventHandlers() {
  timerStartBtn.addEventListener("click", startSolveQuestions);
  answerInput.addEventListener(
    "keyup",
    debounceAnswerChange(function calback(e) {
      const correctnessOfAnswer = checkCorrectnessOfAnswer(e);
      console.log(correctnessOfAnswer);
      if (correctnessOfAnswer) {
        controlExpressionOfTimer(correctnessOfAnswer);
      }
    })
  );
  answerInput.addEventListener(
    "paste",
    debounceAnswerChange(function calback(e) {
      const correctnessOfAnswer = checkCorrectnessOfAnswer(e);
      if (correctnessOfAnswer) {
        controlExpressionOfTimer(correctnessOfAnswer);
      }
    })
  );
  continueBtn.addEventListener("click", function continueSolveProcess() {
    selectedQuestion = randomSelectQuestion(
      indexOfRemainQuestions,
      questionAndAnswerPairs
    );
    startCountdownForQuestion();
    noticeContainer.style.display = "none";
    controlAnswerInput(true, false);
  });
  resetBtn.addEventListener("click", resetSolveProcess);
}

function startSolveQuestions() {
  timerContent.style.display = "flex";
  timerStartBtn.style.display = "none";
  selectedQuestion = randomSelectQuestion(
    indexOfRemainQuestions,
    questionAndAnswerPairs
  );
  startCountdownForQuestion();
  noticeContainer.style.display = "none";
  controlAnswerInput(true, false);
}

function startCountdownForQuestion() {
  const countdownTime = selectedQuestion.timeForAnswer;
  questionContainer.innerHTML = selectedQuestion.question;
  countdownClock = countdownInterval(countdownTime);
}

function controlAnswerInput(isClear, readOnly) {
  if (isClear) {
    answerInput.value = "";
  }
  answerInput.readOnly = readOnly;
}

function checkCorrectnessOfAnswer(e) {
  const answer = e.target.value.trim().toLowerCase();
  const correctAnswer = selectedQuestion.answer;
  if (answer.length === 0 || !e.code.match(/Enter|Space|[a-zA-Z0-9]/)) {
    return;
  }
  if (answer === correctAnswer) {
    if (indexOfRemainQuestions.length === 0) {
      return "finish";
    }
    return "right";
  }
  return "wrong";
}

function controlExpressionOfTimer(status) {
  noticeContainer.style.display = "flex";
  noticeTitle.innerHTML = noticeType[status].content;
  noticeIcon.src = noticeType[status].link;
  switch (status) {
    case "wrong":
      controlPresentOfContinueAndResetBtn(false, false);
      return;
    case "right":
      clearInterval(countdownClock);
      controlAnswerInput(false, true);
      controlPresentOfContinueAndResetBtn(true, true);
      return;
    case "timeout":
    case "finish":
      clearInterval(countdownClock);
      controlAnswerInput(false, true);
      controlPresentOfContinueAndResetBtn(false, true);
      return;
  }
}

function resetSolveProcess() {
  indexOfRemainQuestions = Array.from(
    Array(questionAndAnswerPairs.length).keys()
  );
  selectedQuestion = randomSelectQuestion(
    indexOfRemainQuestions,
    questionAndAnswerPairs
  );
  startCountdownForQuestion();
  noticeContainer.style.display = "none";
  controlAnswerInput(true, false);
}

function countdownInterval(countdownTime) {
  const minuteInTimer = document.getElementById("minuteTimer");
  const secondInTimer = document.getElementById("secondTimer");

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
  return setInterval(displayCountdownClock, SECOND);
}

function controlPresentOfContinueAndResetBtn(isContinue, isReset) {
  continueBtn.style.display = isContinue ? "inline-block" : "none";
  resetBtn.style.display = isReset ? "inline-block" : "none";
}

addWebsiteEventHandlers();

//question list at: https://parade.com/970343/parade/logic-puzzles/

import { questionAndAnswerPairs, noticeType } from "./module/data.js";
import {
  normalizeMinuteAndSecond,
  convertTimeToMinuteAndSecond,
  debounceAnswerChange,
  randomSelectQuestion,
} from "./module/utils.js";

const noticeContainer = document.querySelector(".notice");
const noticeTitle = document.querySelector(".notice__title");
const timerContent = document.querySelector(".timer__content");
const continueBtn = document.getElementById("continueBtn");
const resetBtn = document.getElementById("resetBtn");
const timerStartBtn = document.querySelector(".timer__startBtn");
const answerInput = document.getElementById("answer");
const questionContainer = document.querySelector(".queston");
const noticeIcon = document.getElementById("noticeIcon");

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
  selectedQuestion = randomSelectQuestion(
    indexOfRemainQuestions,
    questionAndAnswerPairs
  );
  const countdownTime = selectedQuestion.timeForAnswer;
  questionContainer.innerHTML = selectedQuestion.question;
  countdownClock = countdownInterval(countdownTime);
  noticeContainer.style.display = "none";
  answerInput.value = "";
  answerInput.readOnly = false;
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
  return setInterval(displayCountdownClock, 1000);
}

function controlPresentOfContinueAndResetBtn(isContinue, isReset) {
  continueBtn.style.display = isContinue ? "inline-block" : "none";
  resetBtn.style.display = isReset ? "inline-block" : "none";
}

//question list at: https://parade.com/970343/parade/logic-puzzles/

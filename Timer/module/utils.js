const DEBOUNCE_TIMEOUT = 500;

export function convertTimeToMinuteAndSecond(time) {
  let minute = Math.floor(time / 60);
  let second = time - minute * 60;
  return [minute, second];
}

export function normalizeMinuteAndSecond(minute, second) {
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  return [minute, second];
}

export function debounceAnswerChange(callback, timeout = DEBOUNCE_TIMEOUT) {
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

export function randomSelectQuestion(
  indexOfRemainQuestions,
  questionAndAnswerPairs
) {
  const randomIndex = Math.floor(Math.random() * indexOfRemainQuestions.length);
  const randomQuestionIndex = indexOfRemainQuestions[randomIndex];
  //remove selected quuestion index out of remain question list
  indexOfRemainQuestions.splice(randomIndex, 1);
  return questionAndAnswerPairs[randomQuestionIndex];
}

export const questionAndAnswerPairs = [
  {
    question: `<p>A brother and a sister were born in summer and in winter.</p>
    <p>The sister was not born in winter.</p>
    <p> Who was born in summer?</p>`,
    answer: "the sister",
    timeForAnswer: 20, //s
  },
  {
    question: `<p>Olive's mom has five daughters:</p>
    <p>Bella, Annie, Martha, Kate...</p>
    <p>What is the name of the fifth daughter?</p>`,
    answer: "olive",
    timeForAnswer: 30, //s
  },
  {
    question: `<p>There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle.</p> 
    <p>How many ducks are there?</p>`,
    answer: "three",
    timeForAnswer: 20, //s
  },
  {
    question: `<p>Five people were eating apples, A finished before B, but behind C. D finished before E, but behind B.</p>
      <p>What was the finishing order?</p>`,
    answer: "cabde",
    timeForAnswer: 30, //s
  },
  {
    question:
      "<p>Which country is the second-highest mountain on Earth belong to?</p>",
    answer: "pakistan",
    timeForAnswer: 20, //s
  },
  {
    question:
      "<p>The day before two days after the day before tomorrow is Saturday.</p><p> What day is it today?</p>",
    answer: "friday",
    timeForAnswer: 40, //s
  },
  {
    question:
      "<p>How long will it take to sell 1 billion packets of sesame?</p>",
    answer: "who know",
    timeForAnswer: 60, //s
  },
];

export const noticeType = {
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

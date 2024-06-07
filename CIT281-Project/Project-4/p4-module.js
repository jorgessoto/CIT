/*
Project 4
*/

const { data } = require("./p4-data.js");

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < data.length; i++) {
    questions.push(data[i].question);
  }
  return questions;
};

const getAnswers = () => {
  const answers = [];
  for (let i = 0; i < data.length; i++) {
    answers.push(data[i].answer);
  }
  return answers;
};
const getQuestionsAnswers = () => {
  const questionsAnswers = [];
  for (let i = 0; i < data.length; i++) {
    questionsAnswers.push(
      ` question: ${data[i].question}, answer: ${data[i].answer} `
    );
  }
  return questionsAnswers;
};

const getQuestion = (number = "") => {
  const returnQuestion = {
    error: "",
    question: "",
    number: "",
  };
  switch (true) {
    case number === "":
      returnQuestion.error = "Question number must be an integer";
      break;
    case number === 0:
      returnQuestion.error = "Question number must be >= 1";
      break;
    case number < 1 || number > data.length:
      returnQuestion.error = `Question number must be less than the number of questions (${data.length})`;
      break;
    default:
      returnQuestion.number = number;
      returnQuestion.question = data[number - 1].question;
  }
  return returnQuestion;
};

const getAnswer = (number = "") => {
  const returnAnswer = {
    error: "",
    answer: "",
    number: "",
  };

  switch (true) {
    case number === "":
      returnAnswer.error = "Answer number must be an integer";
      break;
    case number === 0:
      returnAnswer.error = "Answer number must be >= 1";
      break;
    case number < 1 || number > data.length:
      returnAnswer.error = `Answer number must be less than the number of questions (${data.length})`;
      break;
    default:
      returnAnswer.number = number;
      returnAnswer.answer = data[number - 1].answer;
  }
  return returnAnswer;
};

const getQuestionAnswer = (number = "") => {
  const returnQuestionAnswer = {
    error: "",
    question: "",
    answer: "",
    number: "",
  };

  switch (true) {
    case number === "":
      returnQuestionAnswer.error = "Question number must be an integer";
      break;
    case number === 0:
      returnQuestionAnswer.error = "Question number must be >= 1";
      break;
    case number < 1 || number > data.length:
      returnQuestionAnswer.error = `Question number must be less than the number of questions (${data.length})`;
      break;
    default:
      returnQuestionAnswer.number = number;
      returnQuestionAnswer.question = data[number - 1].question;
      returnQuestionAnswer.answer = data[number - 1].answer;
  }

  return returnQuestionAnswer;
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;

// getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
};

/*
Project 4
*/
const fs = require("fs");
const fastify = require("fastify")();
const { getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer } = require("./p4-module.js");

fastify.get("/cit/question", (request, reply) => {
    const questions = getQuestions();
    const questionJSON = { error: "", statusCode: 200, questions: questions };
    reply.code(200).header("Content-Type", "application/json; charset=utf-8").send(questionJSON);
    
});
fastify.get("/cit/answer", (request, reply) => {
    const answers = getAnswers();
    const answerJSON = { error: "", statusCode: 200, answers: answers };
    reply.code(200).header("Content-Type", "application/json; charset=utf-8").send(answerJSON);
    
});
fastify.get("/cit/questionanswer", (request, reply) => {
    const questionsAnswers = getQuestionsAnswers();
    const qaJSON = { error: "", statusCode: 200, questions_answers: questionsAnswers };
    reply.code(200).header("Content-Type", "application/json; charset=utf-8").send(questionsAnswers);
});
fastify.get("/cit/question/:number", (request, reply) => {
    const { number = "" } = request.params;
    const question = { error: "", statusCode: 200, question: getQuestion(number)}
    reply.code(200).header("Content-Type", "application/json; charset=utf-8").send(question);
});
fastify.get("/cit/answer/:number", (request, reply) => {
    const { number = "" } = request.params;
    const answer = { error: "", statusCode: 200, answer: getAnswer(number)};
    reply.code(200).header("Content-Type", "application/json; charset=utf-8").send(answer);
});
fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const { number = "" } = request.params;
    const question = getQuestion(number);
    const answer = getAnswer(number);
    const qa = { error: "", statusCode: 200, question: question, answer: answer };
    reply.code(200).header("Content-Type", "application/json; charset=utf-8").send(qa);
});
fastify.get("/*", (request, reply) => {
    const error = { error: "Route not found", statusCode: 404 };
    reply.code(404).header("Content-Type", "application/json; charset=utf-8").send(error);
});
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    // fastify.log.error(err);
    console.log(err);
    process.exit(1);
  }
  // fastify.log.info(`Server listening on ${address}`);
  console.log(`Server listening on ${address}`);
});

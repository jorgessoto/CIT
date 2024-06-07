/*
    CIT 281 Project 3
    Name: Jorge Soto
*/

const fs = require("fs");
const fastify = require("fastify")();
const { coinCount } = require("./p3-module.js");

fastify.get("/", (request, reply) => {
  const data = fs.readFileSync("p3/index.html", "utf8");
  reply.code(200).header("Content-Type", "text/html; charset=utf-8").send(data);
});

// New route
fastify.get("/coin", (request, reply) => {
  const { denom = 0, count = 0 } = request.query;
  let coinValue = coinCount({ denom, count });
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(
      `<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`
    );
});

// New route for /coins
fastify.get("/coins", (request, reply) => {
  const { option } = request.query;
  let coinValue = 0;
  switch (option) {
    case "1":
      coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
      break;
    case "2":
      const coins = [
        { denom: 25, count: 2 },
        { denom: 1, count: 7 },
      ];
      coinValue = coinCount(...coins);
      break;
    default:
      coinValue = 0;
  }
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(
      `<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`
    );
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

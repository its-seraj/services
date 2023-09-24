const express = require("express");

const app = express();
const chalk = require("chalk");

// adding environment variales configuration file
require("dotenv").config();

// adding the start up routes
require("./startup/routes")(app);

// adding mongo service
require("./service/database.service")();
// initializing th port number to a variable from environment variables
const port = process.env.APP_PORT;

process.on("unhandledRejection", (reason, promise) => {
  console.error(
    "Unhandled rejection happened at",
    promise,
    `reason: ${reason}`
  );
});

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception happened :${err}`);
});

// running the app on the port
app.listen(port, () => {
  console.log(chalk.bold.green(`Listening on port ${port} . . .`));
});

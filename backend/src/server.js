const { PORT = process.env.PORT || 5001 } = process.env;

const path = require("path");
const app = require(
  path.resolve(`${process.env.SOLUTION_PATH || ""}`, "src/app")
);

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

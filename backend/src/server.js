const { PORT = process.env.PORT || 5000 } = process.env;

const path = require("path");
const app = require("./app");

// Serve static files from the React frontend app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/build")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
  });
}

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

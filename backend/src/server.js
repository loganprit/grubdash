const { PORT = process.env.PORT || 5000 } = process.env;

const path = require("path");
const express = require("express");
const app = require("./app");

// Create a new router for API routes
const apiRouter = express.Router();

// Mount the dishes and orders routes on the API router
apiRouter.use("/dishes", require("./dishes/dishes.router"));
apiRouter.use("/orders", require("./orders/orders.router"));

// Mount the API router at /api
app.use("/api", apiRouter);

// Serve static files from the React frontend app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
  });
}

const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

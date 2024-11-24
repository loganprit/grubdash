const express = require("express");
const cors = require("cors");
const path = require("path");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const ordersRouter = require("./orders/orders.router");
const dishesRouter = require("./dishes/dishes.router");

const app = express();

// CORS configuration
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [process.env.VERCEL_URL, process.env.FRONTEND_URL].filter(Boolean)
      : "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use("/dishes", dishesRouter);
app.use("/orders", ordersRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;

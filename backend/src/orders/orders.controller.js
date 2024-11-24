const path = require("path");
const orders = require(path.resolve("src/data/orders-data"));
const nextId = require("../utils/nextId");

function list(req, res) {
  res.json({ data: orders });
}

// Create a new order
function create(req, res, next) {
  const { data: { deliverTo, mobileNumber, dishes } = {} } = req.body;

  // Check if required fields are present
  const requiredFields = ["deliverTo", "mobileNumber", "dishes"];
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return res.status(400).json({ error: `Order must include a ${field}` });
    }
  }

  // Check if dishes array is valid
  if (!Array.isArray(dishes) || dishes.length === 0) {
    return res
      .status(400)
      .json({ error: "Order must include at least one dish" });
  }

  // Check if each dish has a valid quantity
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    if (
      !dish.quantity ||
      dish.quantity <= 0 ||
      !Number.isInteger(dish.quantity)
    ) {
      return res.status(400).json({
        error: `Dish ${i} must have a quantity that is an integer greater than 0`,
      });
    }
  }

  // Create a new order object
  const newOrder = {
    id: nextId(),
    deliverTo,
    mobileNumber,
    status: "pending",
    dishes,
  };

  // Add the new order to the orders array
  orders.push(newOrder);
  res.status(201).json({ data: newOrder });
}

function read(req, res) {
  res.json({ data: res.locals.order });
}

// Update an existing order
function update(req, res, next) {
  const { data: { id, deliverTo, mobileNumber, status, dishes } = {} } =
    req.body;
  const order = res.locals.order;

  // Check if the provided order id matches the route id
  if (id && id !== order.id) {
    return res.status(400).json({
      error: `Order id does not match route id. Order: ${id}, Route: ${order.id}.`,
    });
  }

  // Check if required fields are present
  if (!deliverTo) {
    return res.status(400).json({ error: "Order must include a deliverTo" });
  }
  if (!mobileNumber) {
    return res.status(400).json({ error: "Order must include a mobileNumber" });
  }
  if (!dishes) {
    return res.status(400).json({ error: "Order must include a dish" });
  }

  // Check if dishes array is valid
  if (dishes.length === 0) {
    return res
      .status(400)
      .json({ error: "Order must include at least one dish" });
  }
  if (!Array.isArray(dishes)) {
    return res
      .status(400)
      .json({ error: "Order must include at least one dish" });
  }

  // Check if status is valid
  const validStatuses = [
    "pending",
    "preparing",
    "out-for-delivery",
    "delivered",
  ];
  if (!status) {
    return res.status(400).json({
      error:
        "Order must have a status of pending, preparing, out-for-delivery, delivered",
    });
  }
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      error:
        "Order must have a status of pending, preparing, out-for-delivery, delivered",
    });
  }

  // Check if each dish has a valid quantity
  for (let i = 0; i < dishes.length; i++) {
    const dish = dishes[i];
    if (
      !dish.quantity ||
      dish.quantity <= 0 ||
      !Number.isInteger(dish.quantity)
    ) {
      return res.status(400).json({
        error: `Dish ${i} must have a quantity that is an integer greater than 0`,
      });
    }
  }

  // Update the order object with the new values
  order.deliverTo = deliverTo;
  order.mobileNumber = mobileNumber;
  order.status = status;
  order.dishes = dishes;

  res.json({ data: order });
}

// Delete an existing order
function destroy(req, res, next) {
  const { orderId } = req.params;
  const index = orders.findIndex((order) => order.id === orderId);
  const order = orders[index];

  // Check if the order status is pending
  if (order.status !== "pending") {
    return next({
      status: 400,
      message: "An order cannot be deleted unless it is pending",
    });
  }

  // Remove the order from the orders array
  orders.splice(index, 1);
  res.sendStatus(204);
}

// Middleware to check if the order exists
function orderExists(req, res, next) {
  const { orderId } = req.params;
  const foundOrder = orders.find((order) => order.id === orderId);

  // If the order exists, store it in res.locals and proceed to the next middleware
  if (foundOrder) {
    res.locals.order = foundOrder;
    return next();
  }

  // If the order does not exist, return an error
  next({
    status: 404,
    message: `Order does not exist: ${orderId}.`,
  });
}

module.exports = {
  list,
  create: [create],
  read: [orderExists, read],
  update: [orderExists, update],
  delete: [orderExists, destroy],
};

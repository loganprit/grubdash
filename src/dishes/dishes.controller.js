const path = require("path");
// Existing dishes data
const dishes = require(path.resolve("src/data/dishes-data"));
// Function to assign ID's when necessary
const nextId = require("../utils/nextId");

function list(req, res) {
  res.json({ data: dishes });
}

// Function to create a new dish
function create(req, res, next) {
  const { data: { name, description, price, image_url } = {} } = req.body;

  // Check if all required fields are present
  const requiredFields = ["name", "description", "price", "image_url"];
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Dish must include a ${field}` });
    }
  }

  // Check if price is a positive integer
  if (price <= 0 || !Number.isInteger(price)) {
    return next({
      status: 400,
      message: "Dish must have a price that is an integer greater than 0",
    });
  }

  // Create a new dish object
  const newDish = {
    id: nextId(),
    name,
    description,
    price,
    image_url,
  };

  // Add the new dish to the dishes array
  dishes.push(newDish);
  res.status(201).json({ data: newDish });
}

function read(req, res) {
  res.json({ data: res.locals.dish });
}

// Function to update a specific dish
function update(req, res, next) {
  const dish = res.locals.dish;
  const { data: { id, name, description, price, image_url } = {} } = req.body;

  // Check if the provided dish id matches the route id
  if (id && id !== dish.id) {
    return next({
      status: 400,
      message: `Dish id does not match route id. Dish: ${id}, Route: ${dish.id}`,
    });
  }

  // Check if all required fields are present
  const requiredFields = ["name", "description", "price", "image_url"];
  for (const field of requiredFields) {
    if (!req.body.data[field]) {
      return next({ status: 400, message: `Dish must include a ${field}` });
    }
  }

  // Check if price is a positive integer
  if (
    price &&
    (typeof price !== "number" || price <= 0 || !Number.isInteger(price))
  ) {
    return next({
      status: 400,
      message: "Dish must have a price that is an integer greater than 0",
    });
  }

  // Update the dish properties
  dish.name = name;
  dish.description = description;
  dish.price = price;
  dish.image_url = image_url;

  res.json({ data: dish });
}

// Function to check if a dish exists
function dishExists(req, res, next) {
  const { dishId } = req.params;
  const foundDish = dishes.find((dish) => dish.id === dishId);

  // If the dish exists, store it in res.locals and proceed to the next middleware
  if (foundDish) {
    res.locals.dish = foundDish;
    return next();
  }

  // If the dish does not exist, return a 404 error
  next({
    status: 404,
    message: `Dish does not exist: ${dishId}.`,
  });
}

module.exports = {
  list,
  create: [create],
  read: [dishExists, read],
  update: [dishExists, update],
};

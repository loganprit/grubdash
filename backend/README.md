# GrubDash Backend

The backend API for GrubDash, providing endpoints for managing dishes and orders in the food delivery platform.

## Features

- RESTful API design
- CRUD operations for dishes and orders
- Data validation and error handling
- JSON-based data persistence
- Comprehensive test suite

## Technology Stack

- Node.js
- Express.js
- Jest for testing
- JSON for data storage

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone this repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run start:dev
```

The server will start on http://localhost:5000 by default.

## API Endpoints

### Dishes

#### GET /dishes

- Lists all dishes
- Response: Array of dish objects

#### POST /dishes

- Creates a new dish
- Required fields in request body:
  - name: string
  - description: string
  - price: number
  - image_url: string

#### GET /dishes/:dishId

- Retrieves a specific dish
- Response: Dish object

#### PUT /dishes/:dishId

- Updates a specific dish
- Required fields same as POST

### Orders

#### GET /orders

- Lists all orders
- Response: Array of order objects

#### POST /orders

- Creates a new order
- Required fields in request body:
  - deliverTo: string
  - mobileNumber: string
  - dishes: array of dish objects with quantity

#### GET /orders/:orderId

- Retrieves a specific order
- Response: Order object

#### PUT /orders/:orderId

- Updates an order's status
- Required fields:
  - status: string (pending, preparing, out-for-delivery, delivered)

## Data Validation

The API includes validation for:

- Required fields
- Data types
- Status values
- Dish existence in orders
- Order status transitions

## Testing

Run the test suite:

```bash
npm test
```

## Environment Variables

- `PORT`: Server port number (default: 5000)

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 405: Method Not Allowed
- 500: Server Error

## License

ISC

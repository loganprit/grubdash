# GrubDash Monorepo

This monorepo contains both the frontend and backend applications for GrubDash, a food delivery platform that allows users to browse restaurants, view menus, and place orders.

## Features

- Browse restaurant menus and dishes
- Create, read, update, and delete dishes
- Place and manage food orders
- Real-time order status tracking
- Responsive design for mobile and desktop

## Technology Stack

### Frontend

- React.js
- React Router for navigation
- CSS for styling
- Jest for testing

### Backend

- Express.js
- RESTful API architecture
- Jest for testing
- JSON for data storage

## Project Structure

.</br>
├── frontend/ # React frontend application</br>
└── backend/ # Express.js backend API

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone this repository
2. Install all dependencies for frontend, backend, and root project:
   ```bash
   npm run install:all
   ```

## Development

To run both frontend and backend in development mode:

```bash
npm run start:dev
```

This will concurrently start:

- Frontend on http://localhost:3000
- Backend on http://localhost:5000

### Running Individual Services

Frontend only:

```bash
npm run start:dev:frontend
```

Backend only:

```bash
npm run start:dev:backend
```

## API Endpoints

The backend provides the following RESTful endpoints:

### Dishes

- GET /dishes - List all dishes
- POST /dishes - Create a new dish
- GET /dishes/:dishId - Get a specific dish
- PUT /dishes/:dishId - Update a dish

### Orders

- GET /orders - List all orders
- POST /orders - Create a new order
- GET /orders/:orderId - Get a specific order
- PUT /orders/:orderId - Update an order status

## Testing

Run all tests:

```bash
npm test
```

Test frontend only:

```bash
npm run test:frontend
```

Test backend only:

```bash
npm run test:backend
```

## Production Build

To create a production build of the frontend application:

```bash
npm run build
```

## Environment Variables

### Frontend

- `API_BASE_URL`: Base URL for the API (defaults to http://localhost:5000 if not set)

### Backend

- `PORT`: Port number for the server (defaults to 5000)

## Available Scripts

- `npm run start:dev` - Start both frontend and backend in development mode
- `npm run start:dev:frontend` - Start frontend only
- `npm run start:dev:backend` - Start backend only
- `npm run install:all` - Install dependencies for all applications
- `npm run install:frontend` - Install frontend dependencies
- `npm run install:backend` - Install backend dependencies
- `npm test` - Run all tests
- `npm run test:frontend` - Run frontend tests
- `npm run test:backend` - Run backend tests
- `npm run build` - Create production build of frontend

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

ISC

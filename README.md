# GrubDash Monorepo

This monorepo contains both the frontend and backend applications for GrubDash, a food delivery platform.

## Project Structure

.</br>
├── frontend/ # React frontend application</br>
└── backend/ # Express.js backend API

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

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

## License

ISC

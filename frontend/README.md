# GrubDash Frontend

The React-based frontend application for GrubDash, providing a modern and responsive user interface for the food delivery platform.

## Features

- Responsive design for all screen sizes
- Interactive menu browsing
- Real-time order status updates
- Dish management interface
- Order creation and tracking
- Form validation and error handling

## Technology Stack

- React.js
- React Router for navigation
- CSS for styling
- Jest and React Testing Library

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend API running (default: http://localhost:5000)

## Installation

1. Clone this repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm start
```

The application will be available at http://localhost:3000.

## Features Overview

### Dashboard

- View all available dishes
- Quick access to order management
- Real-time status updates

### Dish Management

- Create new dishes
- Edit existing dishes
- View dish details
- Delete dishes

### Order System

- Create new orders
- Track order status
- View order history
- Update order status

## Component Structure

- `App.js` - Main application component
- `Layout/` - Layout components
- `Menu/` - Menu and dish-related components
- `Orders/` - Order management components
- `Common/` - Reusable components
- `Utils/` - Utility functions

## Testing

Run the test suite:

```bash
npm test
```

## Environment Variables

Create a `.env` file in the frontend directory with these variables:

- `REACT_APP_API_BASE_URL`: Backend API URL (default: http://localhost:5000)

## Build

Create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Deployment

The application can be deployed to any static hosting service. The production build is optimized for:

- Minimal bundle size
- Performance
- SEO

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

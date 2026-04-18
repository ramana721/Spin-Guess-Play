# Spin Guess Play

A full-stack web application with React Vite frontend and Node.js Express backend.

## Project Structure

```
Spin-Guess-Play/
├── frontend/          # React Vite frontend application
│   ├── src/          # React components and styles
│   ├── public/       # Static assets
│   ├── index.html    # HTML template
│   ├── vite.config.js # Vite configuration
│   └── package.json  # Frontend dependencies
│
└── backend/          # Node.js Express backend API
    ├── server.js     # Main server file
    ├── routes/       # API routes
    ├── controllers/  # Business logic
    ├── middleware/   # Custom middleware
    └── package.json  # Backend dependencies
```

## Getting Started

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:3000`

## Features

### Frontend
- React 18 with Vite
- Hot module replacement
- API proxy to backend
- Modern CSS with component styling

### Backend
- Express.js server
- CORS enabled
- RESTful API endpoints
- Environment variable configuration
- Error handling middleware

## API Communication

The frontend is configured to proxy API requests to `http://localhost:3000`:
- Frontend requests to `/api/*` are forwarded to backend

## Development

Run both frontend and backend in separate terminals:

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

## Building for Production

**Frontend:**
```bash
cd frontend
npm run build  # Output will be in dist/
npm run preview  # Preview production build
```

**Backend:**
```bash
cd backend
npm start
```

## License

MIT
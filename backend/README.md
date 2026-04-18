# Backend Setup

This is the Node.js Express backend API for Spin Guess Play.

## Getting Started

Install dependencies:
```bash
npm install
```

Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

Run the server:
```bash
npm run dev
```

Or for production:
```bash
npm start
```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint
- `POST /api/game` - Game action endpoint

## Features

- Express.js server
- CORS enabled for frontend communication
- Environment variable support
- Error handling middleware
- Development watch mode with `--watch` flag

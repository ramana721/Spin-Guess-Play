# Backend Folder Structure

## Directory Overview

```
backend/
├── routes/                 # API route handlers
│   ├── gameRoutes.js
│   ├── userRoutes.js
│   └── index.js
│
├── controllers/            # Request handlers (business logic orchestration)
│   ├── GameController.js
│   ├── UserController.js
│   └── index.js
│
├── services/               # Business service layer
│   ├── GameService.js
│   ├── UserService.js
│   └── index.js
│
├── models/                 # Database models/schemas
│   ├── Game.js
│   ├── User.js
│   └── index.js
│
├── middleware/             # Express middleware
│   ├── auth.js             # JWT authentication & authorization
│   ├── validation.js       # Request validation
│   ├── errorHandler.js     # Global error handling
│   ├── requestLogger.js    # Request logging
│   ├── rateLimiter.js      # Rate limiting
│   └── index.js
│
├── validators/             # Request validation rules
│   ├── gameValidator.js
│   ├── userValidator.js
│   └── index.js
│
├── services/               # External services, API calls
│   └── (Payment, Email, etc.)
│
├── utils/                  # Utility/helper functions
│   ├── logger.js           # Logging utility
│   ├── helpers.js          # Helper functions
│   └── index.js
│
├── config/                 # Configuration files
│   ├── app.config.js       # App configuration
│   ├── database.config.js  # Database configuration
│   └── index.js
│
├── constants/              # Application constants
│   └── index.js            # Status enums, error messages, roles
│
├── types/                  # TypeScript/JSDoc type definitions
│   └── index.js
│
├── errors/                 # Custom error classes
│   ├── AppError.js
│   └── index.js
│
├── database/               # Database related
│   ├── migrations/         # Database migrations
│   └── seeders/            # Database seeders
│
├── logs/                   # Log files (gitignored)
│   ├── error.log
│   ├── info.log
│   └── requests.log
│
├── tests/                  # Test files
│   ├── unit/
│   ├── integration/
│   └── example.test.js
│
├── server.js               # Main server file
├── package.json            # Dependencies & scripts
├── .env.example            # Environment variables template
├── .env                    # Environment variables (gitignored)
├── .gitignore              # Git ignore rules
├── README.md               # Backend documentation
└── FOLDER_STRUCTURE.md     # This file
```

## Folder Descriptions

### `routes/`
- Express route definitions
- RESTful endpoint mappings
- Routes delegate to controllers
- Example: GET /api/games → gameRoutes → GameController

### `controllers/`
- Handle HTTP requests and responses
- Parse and validate input
- Call services for business logic
- Return formatted responses
- One controller per resource (GameController, UserController)

### `services/`
- Business logic layer
- Database operations via repositories
- External API calls
- Data transformation
- Reusable across controllers

### `models/`
- Database model/schema definitions
- Field definitions and constraints
- Relationships between models
- Supports: Sequelize, Prisma, Mongoose, TypeORM

### `middleware/`
- Express middleware functions
- **auth.js**: JWT authentication & role-based authorization
- **validation.js**: Request body validation
- **errorHandler.js**: Centralized error handling
- **requestLogger.js**: Request/response logging
- **rateLimiter.js**: Rate limiting for security

### `validators/`
- Input validation rules for endpoints
- Separated by domain (gameValidator, userValidator)
- Can integrate with Joi, Yup, or custom validators

### `utils/`
- Reusable helper functions
- **logger.js**: Logging with file output
- **helpers.js**: JWT generation, hashing, pagination
- No business logic, pure utilities

### `config/`
- **app.config.js**: Application settings (port, env, secrets)
- **database.config.js**: Database connection configs for MySQL, PostgreSQL, MongoDB
- Environment variable management

### `constants/`
- HTTP status codes
- API messages
- Game/User status enums
- Role definitions
- Validation rules
- Pagination defaults

### `types/`
- JSDoc type definitions for JavaScript
- TypeScript types if using TypeScript
- Interfaces: User, Game, ApiResponse, etc.

### `errors/`
- Custom error classes
- AppError, ValidationError, NotFoundError
- Standardized error handling

### `database/`
- **migrations/**: Database schema changes
- **seeders/**: Initial/test data

### `logs/`
- Application log files
- error.log, info.log, requests.log
- Directory is created at runtime

### `tests/`
- Unit tests
- Integration tests
- Test examples with Jest/Vitest

## Folder Structure Best Practices

### 1. **Service Layer Pattern**
```
Request → Route → Controller → Service → Model → Database
Response ← Controller ← Service ← Model ← Database
```

### 2. **Separation of Concerns**
- **Routes**: Just routing
- **Controllers**: Parse input, call service, format response
- **Services**: All business logic
- **Models**: Data structure definition
- **Middleware**: Cross-cutting concerns

### 3. **Error Handling**
- Throw custom errors from services
- Catch and format in controller
- Global error handler middleware catches all

### 4. **Validation**
- Validate in middleware before controller
- Returns 400 if invalid
- Controller receives clean data

### 5. **Naming Conventions**
- **Files**: PascalCase for classes (GameController.js)
- **Functions**: camelCase (getGameById)
- **Constants**: UPPER_CASE (API_SECRET)
- **Routes**: lowercase with hyphens (/api/games)

## Environment Configuration

Create `.env` file:
```
PORT=3000
NODE_ENV=development
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5173
DB_HOST=localhost
DB_NAME=spin_guess_play
```

Reference in code:
```javascript
const port = process.env.PORT || 3000
const secret = process.env.JWT_SECRET
```

## API Response Format

All endpoints return:
```javascript
{
  success: true,
  data: { /* response data */ },
  message: "Success message",
  error: null
}
```

Error response:
```javascript
{
  success: false,
  data: null,
  message: "Error message",
  error: "Detailed error"
}
```

## Typical Request Flow

1. **Request** → Express receives request
2. **Middleware** → Logger, validation, auth checks run
3. **Routes** → Route handler calls controller
4. **Controller** → Validates input, calls service
5. **Service** → Business logic, database calls
6. **Response** → Format and send back
7. **Error Handler** → Catches any errors and formats

## Example Endpoint

**GET /api/games/:id**

1. Route: gameRoutes.js
2. Controller: GameController.getGameById()
3. Service: GameService.getGameById()
4. Model: Game.findByPk()
5. Database: Execute query
6. Response: Format and return game data

## Database Setup

### MySQL/PostgreSQL (Sequelize)
```javascript
import { Sequelize } from 'sequelize'
import { dbConfig } from './config'

const sequelize = new Sequelize(dbConfig)
```

### MongoDB (Mongoose)
```javascript
import mongoose from 'mongoose'
await mongoose.connect(process.env.MONGO_URI)
```

### SQLite (for development/testing)
```javascript
// Requires no external setup, uses file-based DB
```

## Scripts

Add to package.json:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "seed": "node database/seeders/seed.js",
    "migrate": "sequelize db:migrate"
  }
}
```

## Testing Example

```javascript
describe('GameController', () => {
  test('should get game by id', async () => {
    const req = { params: { id: 1 } }
    const res = { json: jest.fn() }
    
    await gameController.getGameById(req, res)
    
    expect(res.json).toHaveBeenCalled()
  })
})
```

## Security Best Practices

1. **Authentication**: JWT tokens in Authorization header
2. **Authorization**: Role-based access control
3. **Validation**: Input validation in validators
4. **Hashing**: bcrypt for passwords
5. **Rate Limiting**: Prevent brute force attacks
6. **CORS**: Restrict frontend origins
7. **Environment Variables**: Never commit secrets
8. **Error Messages**: Don't expose sensitive info

## Logging

All errors and important events are logged:
```javascript
logger.error('Something went wrong', { userId: 1})
logger.info('User created', { email: 'user@example.com' })
```

Logs stored in `/logs/` directory with rotation.

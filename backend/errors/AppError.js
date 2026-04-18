/**
 * Custom Error Class
 */

export class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message)
    this.statusCode = statusCode
    this.timestamp = new Date().toISOString()
  }
}

/**
 * Validation Error
 */
export class ValidationError extends AppError {
  constructor(message) {
    super(message, 400)
    this.name = 'ValidationError'
  }
}

/**
 * Not Found Error
 */
export class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(`${resource} not found`, 404)
    this.name = 'NotFoundError'
  }
}

/**
 * Unauthorized Error
 */
export class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401)
    this.name = 'UnauthorizedError'
  }
}

/**
 * Forbidden Error
 */
export class ForbiddenError extends AppError {
  constructor(message = 'Forbidden') {
    super(message, 403)
    this.name = 'ForbiddenError'
  }
}

export default {
  AppError,
  ValidationError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
}

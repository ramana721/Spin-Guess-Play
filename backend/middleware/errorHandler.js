/**
 * Error Handler Middleware
 * Should be the last middleware
 */

import { logger } from '../utils/logger.js'
import { AppError } from '../errors/AppError.js'

const errorHandler = (err, req, res, next) => {
  // Log error
  logger.error({
    message: err.message,
    stack: err.stack,
    method: req.method,
    url: req.originalUrl,
  })

  // Handle known errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    })
  }

  // Handle validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: 'Validation failed',
      details: err.errors,
    })
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      error: 'Invalid token',
    })
  }

  // Default server error
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  })
}

export default errorHandler

/**
 * Authentication and Authorization Middleware
 */

import jwt from 'jsonwebtoken'
import { API_SECRET } from '../config/app.config.js'

/**
 * Authenticate JWT token
 */
export const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    
    if (!token) {
      return res.status(401).json({
        success: false,
        error: 'No token provided',
      })
    }

    const decoded = jwt.verify(token, API_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({
      success: false,
      error: 'Invalid or expired token',
    })
  }
}

/**
 * Authorize based on user role
 */
export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: 'Unauthorized',
      })
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: 'Forbidden',
      })
    }

    next()
  }
}

export default { authenticate, authorize }

/**
 * Rate Limiter Middleware
 */

import rateLimit from 'express-rate-limit'

/**
 * General rate limiter
 */
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
})

/**
 * Strict rate limiter for auth endpoints
 */
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit auth attempts to 5 per 15 minutes
  message: 'Too many login attempts, please try again later.',
  skipSuccessfulRequests: true,
})

/**
 * API rate limiter
 */
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute
  standardHeaders: true,
  legacyHeaders: false,
})

export default { generalLimiter, authLimiter, apiLimiter }

/**
 * Helper Utilities
 */

/**
 * Generate JWT token
 */
export const generateToken = (payload, secret, expiresIn = '24h') => {
  const jwt = require('jsonwebtoken')
  return jwt.sign(payload, secret, { expiresIn })
}

/**
 * Format response
 */
export const formatResponse = (success, data = null, message = '', error = null) => {
  return {
    success,
    data,
    message,
    error,
  }
}

/**
 * Hash password
 */
export const hashPassword = async (password) => {
  const bcrypt = require('bcrypt')
  return bcrypt.hash(password, 10)
}

/**
 * Verify password
 */
export const verifyPassword = async (password, hash) => {
  const bcrypt = require('bcrypt')
  return bcrypt.compare(password, hash)
}

/**
 * Generate random string
 */
export const generateRandomString = (length = 32) => {
  return Math.random().toString(36).substring(2, length + 2)
}

/**
 * Pagination helper
 */
export const getPaginationParams = (page = 1, limit = 10) => {
  const pageNum = Math.max(parseInt(page, 10) || 1, 1)
  const limitNum = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100)
  const offset = (pageNum - 1) * limitNum

  return { page: pageNum, limit: limitNum, offset }
}

export default {
  generateToken,
  formatResponse,
  hashPassword,
  verifyPassword,
  generateRandomString,
  getPaginationParams,
}

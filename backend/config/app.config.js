/**
 * Application Configuration
 */

export const APP_NAME = 'Spin Guess Play API'
export const APP_VERSION = '1.0.0'
export const ENVIRONMENT = process.env.NODE_ENV || 'development'
export const DEBUG = ENVIRONMENT === 'development'

// Server
export const SERVER_PORT = process.env.PORT || 3000
export const SERVER_HOST = process.env.HOST || 'localhost'

// Security
export const API_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'
export const BCRYPT_ROUNDS = 10

// CORS
export const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173'

// Session
export const SESSION_TIMEOUT = 24 * 60 * 60 * 1000 // 24 hours

export default {
  APP_NAME,
  APP_VERSION,
  ENVIRONMENT,
  DEBUG,
  SERVER_PORT,
  SERVER_HOST,
  API_SECRET,
  CORS_ORIGIN,
  SESSION_TIMEOUT,
}

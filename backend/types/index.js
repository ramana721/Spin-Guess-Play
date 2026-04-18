/**
 * Type Definitions using JSDoc
 */

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {string} passwordHash
 * @property {string} role - 'admin', 'user', 'moderator'
 * @property {string} status - 'active', 'inactive', 'banned'
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {Object} Game
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} userId - Foreign key to User
 * @property {string} status - 'active', 'completed', 'paused'
 * @property {number} score
 * @property {number} duration - In seconds
 * @property {Date} startedAt
 * @property {Date} completedAt
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {any} data
 * @property {string} message
 * @property {string|Object} error
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {Array} data
 * @property {number} total
 * @property {number} page
 * @property {number} pages
 * @property {number} limit
 */

/**
 * @typedef {Object} JwtPayload
 * @property {number} id
 * @property {string} email
 * @property {string} role
 * @property {number} iat
 * @property {number} exp
 */

export {}

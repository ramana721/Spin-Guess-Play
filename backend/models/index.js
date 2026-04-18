// Database Models
// Sequelize, Mongoose, TypeORM, Prisma examples

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} name
 * @property {string} email - Unique email
 * @property {string} passwordHash
 * @property {string} role - 'admin', 'user'
 * @property {boolean} isActive
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {Object} Game
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} userId - Foreign key
 * @property {string} status - 'active', 'completed', 'paused'
 * @property {number} score
 * @property {number} duration - In seconds
 * @property {Date} startedAt
 * @property {Date} completedAt
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

export {}

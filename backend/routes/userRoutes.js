/**
 * User Routes
 */

import express from 'express'
import { UserController } from '../controllers/index.js'
import { validateCreateUser, validateUpdateUser } from '../validators/userValidator.js'
import { authenticate, authorize } from '../middleware/auth.js'

const router = express.Router()

// Initialize controller
const userController = new UserController(userService)

/**
 * GET /api/users
 * Get all users (admin only)
 * Requires: authenticate, authorize
 */
router.get('/', authenticate, authorize('admin'), (req, res, next) =>
  userController.getAllUsers(req, res, next)
)

/**
 * GET /api/users/:id
 * Get user by ID
 * Requires: authenticate
 */
router.get('/:id', authenticate, (req, res, next) =>
  userController.getUserById(req, res, next)
)

/**
 * POST /api/users
 * Create new user
 */
router.post('/', validateCreateUser, (req, res, next) =>
  userController.createUser(req, res, next)
)

/**
 * PUT /api/users/:id
 * Update user
 * Requires: authenticate
 */
router.put('/:id', authenticate, validateUpdateUser, (req, res, next) =>
  userController.updateUser(req, res, next)
)

/**
 * DELETE /api/users/:id
 * Delete user
 * Requires: authenticate, authorize
 */
router.delete('/:id', authenticate, authorize('admin'), (req, res, next) =>
  userController.deleteUser(req, res, next)
)

export default router

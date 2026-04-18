/**
 * Game Routes
 */

import express from 'express'
import { GameController } from '../controllers/index.js'
import { validateCreateGame, validateUpdateGame } from '../validators/gameValidator.js'
import { authenticate } from '../middleware/auth.js'

const router = express.Router()

// Initialize controller
const gameController = new GameController(gameService)

/**
 * GET /api/games
 * Get all games with pagination
 */
router.get('/', (req, res, next) => gameController.getAllGames(req, res, next))

/**
 * GET /api/games/:id
 * Get game by ID
 */
router.get('/:id', (req, res, next) => gameController.getGameById(req, res, next))

/**
 * POST /api/games
 * Create new game
 * Requires: authenticate
 */
router.post('/', authenticate, validateCreateGame, (req, res, next) =>
  gameController.createGame(req, res, next)
)

/**
 * PUT /api/games/:id
 * Update game
 * Requires: authenticate
 */
router.put('/:id', authenticate, validateUpdateGame, (req, res, next) =>
  gameController.updateGame(req, res, next)
)

/**
 * DELETE /api/games/:id
 * Delete game
 * Requires: authenticate
 */
router.delete('/:id', authenticate, (req, res, next) =>
  gameController.deleteGame(req, res, next)
)

/**
 * POST /api/games/:id/action
 * Perform game action
 * Requires: authenticate
 */
router.post('/:id/action', authenticate, (req, res, next) =>
  gameController.performAction(req, res, next)
)

export default router

/**
 * Game Controller
 * Handles game-related HTTP requests
 */

class GameController {
  constructor(gameService) {
    this.gameService = gameService
  }

  /**
   * Get all games
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async getAllGames(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 10
      
      const result = await this.gameService.getAllGames(page, limit)
      res.json({
        success: true,
        data: result,
        message: 'Games retrieved successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get game by ID
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async getGameById(req, res, next) {
    try {
      const { id } = req.params
      const game = await this.gameService.getGameById(id)
      res.json({
        success: true,
        data: game,
        message: 'Game retrieved successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create new game
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async createGame(req, res, next) {
    try {
      const { title, description } = req.body
      const userId = req.user.id // From auth middleware

      const game = await this.gameService.createGame(
        { title, description },
        userId
      )

      res.status(201).json({
        success: true,
        data: game,
        message: 'Game created successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Update game
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async updateGame(req, res, next) {
    try {
      const { id } = req.params
      const game = await this.gameService.updateGame(id, req.body)
      
      res.json({
        success: true,
        data: game,
        message: 'Game updated successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Delete game
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async deleteGame(req, res, next) {
    try {
      const { id } = req.params
      await this.gameService.deleteGame(id)
      
      res.json({
        success: true,
        message: 'Game deleted successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Perform game action
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async performAction(req, res, next) {
    try {
      const { id } = req.params
      const game = await this.gameService.performAction(id, req.body)
      
      res.json({
        success: true,
        data: game,
        message: 'Action performed successfully',
      })
    } catch (error) {
      next(error)
    }
  }
}

export default GameController

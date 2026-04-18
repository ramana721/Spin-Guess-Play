/**
 * Game Service
 * Business logic for game operations
 */

class GameService {
  constructor(gameRepository) {
    this.gameRepository = gameRepository
  }

  /**
   * Get all games with pagination
   * @param {number} page 
   * @param {number} limit 
   * @returns {Promise<Object>} { games, total, page, pages }
   */
  async getAllGames(page = 1, limit = 10) {
    const offset = (page - 1) * limit
    const { rows, count } = await this.gameRepository.findAndCountAll({
      offset,
      limit,
      order: [['createdAt', 'DESC']],
    })
    return {
      games: rows,
      total: count,
      page,
      pages: Math.ceil(count / limit),
    }
  }

  /**
   * Get game by ID
   * @param {number} id 
   * @returns {Promise<Object>}
   */
  async getGameById(id) {
    const game = await this.gameRepository.findByPk(id)
    if (!game) {
      throw new Error('Game not found')
    }
    return game
  }

  /**
   * Create new game
   * @param {Object} gameData 
   * @param {number} userId 
   * @returns {Promise<Object>}
   */
  async createGame(gameData, userId) {
    const game = await this.gameRepository.create({
      ...gameData,
      userId,
      status: 'active',
      startedAt: new Date(),
    })
    return game
  }

  /**
   * Update game
   * @param {number} id 
   * @param {Object} updateData 
   * @returns {Promise<Object>}
   */
  async updateGame(id, updateData) {
    const game = await this.getGameById(id)
    await game.update(updateData)
    return game
  }

  /**
   * Delete game
   * @param {number} id 
   * @returns {Promise<boolean>}
   */
  async deleteGame(id) {
    const game = await this.getGameById(id)
    await game.destroy()
    return true
  }

  /**
   * Perform game action
   * @param {number} id 
   * @param {Object} action 
   * @returns {Promise<Object>}
   */
  async performAction(id, action) {
    const game = await this.getGameById(id)
    
    // Update game based on action
    if (action.type === 'pause') {
      game.status = 'paused'
    } else if (action.type === 'resume') {
      game.status = 'active'
    } else if (action.type === 'complete') {
      game.status = 'completed'
      game.completedAt = new Date()
      game.duration = Math.floor((game.completedAt - game.startedAt) / 1000)
    }

    if (action.score !== undefined) {
      game.score = action.score
    }

    await game.save()
    return game
  }
}

export default GameService

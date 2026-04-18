/**
 * User Controller
 * Handles user-related HTTP requests
 */

class UserController {
  constructor(userService) {
    this.userService = userService
  }

  /**
   * Get all users
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async getAllUsers(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1
      const limit = parseInt(req.query.limit) || 10
      
      const result = await this.userService.getAllUsers(page, limit)
      res.json({
        success: true,
        data: result,
        message: 'Users retrieved successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Get user by ID
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async getUserById(req, res, next) {
    try {
      const { id } = req.params
      const user = await this.userService.getUserById(id)
      res.json({
        success: true,
        data: user,
        message: 'User retrieved successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Create new user
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async createUser(req, res, next) {
    try {
      const user = await this.userService.createUser(req.body)
      res.status(201).json({
        success: true,
        data: user,
        message: 'User created successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Update user
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async updateUser(req, res, next) {
    try {
      const { id } = req.params
      const user = await this.userService.updateUser(id, req.body)
      
      res.json({
        success: true,
        data: user,
        message: 'User updated successfully',
      })
    } catch (error) {
      next(error)
    }
  }

  /**
   * Delete user
   * @param {Object} req 
   * @param {Object} res 
   * @param {Function} next 
   */
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params
      await this.userService.deleteUser(id)
      
      res.json({
        success: true,
        message: 'User deleted successfully',
      })
    } catch (error) {
      next(error)
    }
  }
}

export default UserController

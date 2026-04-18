/**
 * User Service
 * Business logic for user operations
 */

import bcrypt from 'bcrypt'

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  /**
   * Get all users
   * @param {number} page 
   * @param {number} limit 
   * @returns {Promise<Object>}
   */
  async getAllUsers(page = 1, limit = 10) {
    const offset = (page - 1) * limit
    const { rows, count } = await this.userRepository.findAndCountAll({
      offset,
      limit,
      attributes: { exclude: ['passwordHash'] },
    })
    return {
      users: rows,
      total: count,
      page,
      pages: Math.ceil(count / limit),
    }
  }

  /**
   * Get user by ID
   * @param {number} id 
   * @returns {Promise<Object>}
   */
  async getUserById(id) {
    const user = await this.userRepository.findByPk(id, {
      attributes: { exclude: ['passwordHash'] },
    })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }

  /**
   * Create new user
   * @param {Object} userData 
   * @returns {Promise<Object>}
   */
  async createUser(userData) {
    const existingUser = await this.userRepository.findOne({
      where: { email: userData.email },
    })
    
    if (existingUser) {
      throw new Error('User with this email already exists')
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)
    
    const user = await this.userRepository.create({
      ...userData,
      passwordHash: hashedPassword,
      role: 'user',
      isActive: true,
    })

    const { passwordHash, ...userWithoutPassword } = user.toJSON()
    return userWithoutPassword
  }

  /**
   * Update user
   * @param {number} id 
   * @param {Object} updateData 
   * @returns {Promise<Object>}
   */
  async updateUser(id, updateData) {
    const user = await this.userRepository.findByPk(id)
    if (!user) {
      throw new Error('User not found')
    }

    // Don't allow password update here
    const { password, ...safeData } = updateData
    await user.update(safeData)
    return user
  }

  /**
   * Delete user
   * @param {number} id 
   * @returns {Promise<boolean>}
   */
  async deleteUser(id) {
    const user = await this.getUserById(id)
    await user.destroy()
    return true
  }

  /**
   * Verify user credentials
   * @param {string} email 
   * @param {string} password 
   * @returns {Promise<Object>}
   */
  async verifyCredentials(email, password) {
    const user = await this.userRepository.findOne({
      where: { email },
    })

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash)
    if (!passwordMatch) {
      throw new Error('Invalid credentials')
    }

    const { passwordHash, ...userWithoutPassword } = user.toJSON()
    return userWithoutPassword
  }
}

export default UserService

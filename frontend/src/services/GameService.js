import apiClient from './apiClient'

const GameService = {
  // Get all games
  getGames: async () => {
    const response = await apiClient.get('/games')
    return response.data
  },

  // Get game by id
  getGameById: async (id) => {
    const response = await apiClient.get(`/games/${id}`)
    return response.data
  },

  // Create new game
  createGame: async (gameData) => {
    const response = await apiClient.post('/games', gameData)
    return response.data
  },

  // Update game
  updateGame: async (id, gameData) => {
    const response = await apiClient.put(`/games/${id}`, gameData)
    return response.data
  },

  // Delete game
  deleteGame: async (id) => {
    const response = await apiClient.delete(`/games/${id}`)
    return response.data
  },

  // Perform game action
  performAction: async (id, action) => {
    const response = await apiClient.post(`/games/${id}/action`, action)
    return response.data
  },
}

export default GameService

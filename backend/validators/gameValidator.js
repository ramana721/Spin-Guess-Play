/**
 * Game Validators
 */

/**
 * Validate create game request
 */
export const validateCreateGame = (req, res, next) => {
  const { title } = req.body

  if (!title || title.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Title is required',
    })
  }

  if (title.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Title must be less than 100 characters',
    })
  }

  next()
}

/**
 * Validate update game request
 */
export const validateUpdateGame = (req, res, next) => {
  const { title, description, status } = req.body

  if (title && title.length > 100) {
    return res.status(400).json({
      success: false,
      error: 'Title must be less than 100 characters',
    })
  }

  const validStatuses = ['active', 'completed', 'paused']
  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      error: `Status must be one of: ${validStatuses.join(', ')}`,
    })
  }

  next()
}

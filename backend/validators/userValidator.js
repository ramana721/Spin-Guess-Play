/**
 * User Validators
 */

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/

/**
 * Validate create user request
 */
export const validateCreateUser = (req, res, next) => {
  const { name, email, password } = req.body

  if (!name || name.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Name is required',
    })
  }

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Valid email is required',
    })
  }

  if (!password || !passwordRegex.test(password)) {
    return res.status(400).json({
      success: false,
      error: 'Password must be at least 8 characters, contain uppercase and number',
    })
  }

  next()
}

/**
 * Validate update user request
 */
export const validateUpdateUser = (req, res, next) => {
  const { name, email } = req.body

  if (name && name.trim().length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Name cannot be empty',
    })
  }

  if (email && !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Valid email is required',
    })
  }

  next()
}

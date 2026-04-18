/**
 * Request Validation Middleware
 */

/**
 * Validate request body against schema
 */
export const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })

    if (error) {
      const messages = error.details.map((detail) => detail.message)
      return res.status(400).json({
        success: false,
        errors: messages,
      })
    }

    req.validatedBody = value
    next()
  }
}

export default { validateRequest }

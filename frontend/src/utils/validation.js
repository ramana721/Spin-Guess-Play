// Validation utilities
export const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isPhoneNumber = (phone) => {
  const phoneRegex = /^[0-9]{10,}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const isStrongPassword = (password) => {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
}

export const isEmpty = (value) => {
  return value === undefined || value === null || value === ''
}

export const validateForm = (data, rules) => {
  const errors = {}
  Object.keys(rules).forEach((field) => {
    const rule = rules[field]
    const value = data[field]

    if (rule.required && isEmpty(value)) {
      errors[field] = `${field} is required`
    }
  })
  return errors
}

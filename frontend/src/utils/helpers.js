// String utilities
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const truncate = (str, length) => {
  return str.length > length ? str.slice(0, length) + '...' : str
}

// Array utilities
export const shuffle = (array) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Object utilities
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj))

// Number utilities
export const formatNumber = (num) => new Intl.NumberFormat('en-US').format(num)

// Date utilities
export const formatDate = (date) => new Intl.DateTimeFormat('en-US').format(new Date(date))

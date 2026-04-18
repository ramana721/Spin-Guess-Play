// Application Configuration
export const APP_NAME = 'Spin Guess Play'

export const APP_VERSION = '1.0.0'

export const ENVIRONMENT = process.env.NODE_ENV || 'development'

export const DEBUG = ENVIRONMENT === 'development'

export const PAGINATION_DEFAULT_PAGE_SIZE = 10

export const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

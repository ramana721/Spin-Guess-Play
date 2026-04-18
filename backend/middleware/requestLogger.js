/**
 * Request Logger Middleware
 */

import fs from 'fs'
import path from 'path'

const logDir = path.join(process.cwd(), 'logs')

// Ensure logs directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true })
}

const logFile = path.join(logDir, 'requests.log')

/**
 * Log all incoming requests
 */
const requestLogger = (req, res, next) => {
  const start = Date.now()
  const timestamp = new Date().toISOString()

  res.on('finish', () => {
    const duration = Date.now() - start
    const log = `${timestamp} | ${req.method} ${req.originalUrl} | Status: ${res.statusCode} | Duration: ${duration}ms\n`
    
    fs.appendFile(logFile, log, (err) => {
      if (err) console.error('Failed to write log:', err)
    })
  })

  next()
}

export default requestLogger

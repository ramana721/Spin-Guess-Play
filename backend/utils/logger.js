/**
 * Logger Utility
 */

import fs from 'fs'
import path from 'path'

const logDir = path.join(process.cwd(), 'logs')

// Ensure logs directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true })
}

/**
 * Log levels
 */
export const LOG_LEVELS = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
}

/**
 * Logger object
 */
export const logger = {
  error: (data) => writeLog('ERROR', data),
  warn: (data) => writeLog('WARN', data),
  info: (data) => writeLog('INFO', data),
  debug: (data) => writeLog('DEBUG', data),
}

/**
 * Write log to file and console
 */
function writeLog(level, data) {
  const timestamp = new Date().toISOString()
  const message = typeof data === 'string' ? data : JSON.stringify(data)
  const logEntry = `[${timestamp}] [${level}] ${message}\n`

  // Log file path
  const logFile = path.join(logDir, `${level.toLowerCase()}.log`)

  // Write to file
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('Failed to write log:', err)
  })

  // Console output
  if (level === 'ERROR') {
    console.error(`\x1b[31m${logEntry}\x1b[0m`) // Red
  } else if (level === 'WARN') {
    console.warn(`\x1b[33m${logEntry}\x1b[0m`) // Yellow
  } else if (level === 'INFO') {
    console.log(`\x1b[36m${logEntry}\x1b[0m`) // Cyan
  } else {
    console.log(`\x1b[37m${logEntry}\x1b[0m`) // White
  }
}

export default logger

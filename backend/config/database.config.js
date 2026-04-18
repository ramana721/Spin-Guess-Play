/**
 * Database Configuration
 */

// Example configurations for different databases

/**
 * MySQL/MariaDB Configuration (Sequelize)
 */
export const mysqlConfig = {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'spin_guess_play',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

/**
 * PostgreSQL Configuration (Sequelize)
 */
export const postgresConfig = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'spin_guess_play',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

/**
 * MongoDB Configuration (Mongoose)
 */
export const mongoConfig = {
  url: process.env.MONGO_URI || 'mongodb://localhost:27017/spin_guess_play',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}

/**
 * SQLite Configuration (Sequelize)
 */
export const sqliteConfig = {
  dialect: 'sqlite',
  storage: process.env.DB_PATH || './database.sqlite',
  logging: false,
}

// Use the appropriate config based on environment
export const dbConfig = process.env.DB_TYPE === 'postgres' ? postgresConfig : mysqlConfig

export default {
  mysqlConfig,
  postgresConfig,
  mongoConfig,
  sqliteConfig,
  dbConfig,
}

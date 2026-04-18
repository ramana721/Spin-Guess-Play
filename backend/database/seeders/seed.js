/**
 * Database Seeder Example
 * Run with: node database/seeders/seed.js
 */

export const seedDatabase = async () => {
  try {
    console.log('Starting database seed...')

    // Example: Seed users
    // const users = await User.bulkCreate([
    //   { name: 'Admin', email: 'admin@example.com', role: 'admin' },
    //   { name: 'User 1', email: 'user1@example.com', role: 'user' },
    // ])

    // Example: Seed games
    // const games = await Game.bulkCreate([
    //   { title: 'Game 1', userId: users[0].id, status: 'completed' },
    //   { title: 'Game 2', userId: users[1].id, status: 'in_progress' },
    // ])

    console.log('Database seeding completed successfully')
  } catch (error) {
    console.error('Database seeding failed:', error)
    process.exit(1)
  }
}

const mysql2 = require('mysql2');

const DATABASE_WAIT_CONNECTION = 'true';
const DATABASE_CONNECTION_LIMIT = 10;
const DATABASE_QUEUE_LIMIT = 0;

const connectionPool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  waitForConnections: DATABASE_WAIT_CONNECTION,
  connectionLimit: DATABASE_CONNECTION_LIMIT,
  queueLimit: DATABASE_QUEUE_LIMIT
});

module.exports = connectionPool;
const mysql = require("mysql2/promise");

// Create a connection pool (reuses connections, handles reconnects)
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "miche_auto",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create tables if they don't exist
async function initDatabase() {
  const sql = `
    CREATE TABLE IF NOT EXISTS leads (
      id            INT AUTO_INCREMENT PRIMARY KEY,
      name          VARCHAR(100)  NOT NULL,
      email         VARCHAR(150)  NOT NULL,
      phone         VARCHAR(30)   NOT NULL,
      vehicle_interest VARCHAR(100) NOT NULL,
      message       TEXT          NOT NULL,
      created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  try {
    await pool.execute(sql);
    console.log("✓ Database connected and tables ready");
  } catch (err) {
    console.error("✗ Database init failed:", err.message);
    process.exit(1);
  }
}

module.exports = { pool, initDatabase };

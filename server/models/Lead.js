const { pool } = require("../config/db");

const Lead = {
  // Save a new lead to the database
  async create({ name, email, phone, vehicleInterest, message }) {
    const sql = `
      INSERT INTO leads (name, email, phone, vehicle_interest, message)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.execute(sql, [
      name,
      email,
      phone,
      vehicleInterest,
      message,
    ]);
    return result.insertId;
  },

  // Get all leads (for admin use later)
  async findAll() {
    const [rows] = await pool.execute(
      "SELECT * FROM leads ORDER BY created_at DESC"
    );
    return rows;
  },
};

module.exports = Lead;

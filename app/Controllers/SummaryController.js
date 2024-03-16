// SummaryController.js
const pool = require("../../database/dbConnect");

// Total Number of Transactions in the Latest Cycle
const getTotalTransactionsForLatestCycle = async (ctx) => {
  try {
    const query = `
      SELECT COUNT(*) AS totalTransactions
      FROM transactions
      WHERE "cycleID" = (SELECT MAX("cycleID")-1 FROM cycles);
    `;
    const result = await pool.query(query);
    ctx.body = result.rows[0]; // Assuming this returns something like { totalTransactions: 120 }
    ctx.status = 200;
  } catch (error) {
    console.error(
      "Error fetching total transactions for the latest cycle",
      error
    );
    ctx.status = 500;
    ctx.body = {
      error: "Failed to fetch total transactions for the latest cycle.",
    };
  }
};

// Top 10 Products by Number of Taps in the Latest Cycle
const getTopProductsByTapsForLatestCycle = async (ctx) => {
  try {
    const query = `
      SELECT "productID", SUM(taps) AS totalTaps
      FROM transactions
      WHERE "cycleID" = (SELECT MAX("cycleID")-1 FROM cycles)
      GROUP BY "productID"
      ORDER BY totalTaps DESC
      LIMIT 10;
    `;
    const result = await pool.query(query);
    ctx.body = result.rows; // Assuming this returns an array of products with their total taps
    ctx.status = 200;
  } catch (error) {
    console.error(
      "Error fetching top products by taps for the latest cycle",
      error
    );
    ctx.status = 500;
    ctx.body = {
      error: "Failed to fetch top products by taps for the latest cycle.",
    };
  }
};

module.exports = {
  getTotalTransactionsForLatestCycle,
  getTopProductsByTapsForLatestCycle,
};

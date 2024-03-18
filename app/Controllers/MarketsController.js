// MarketsController.js
const pool = require("../../database/dbConnect");

const allMarkets = async (ctx) => {
  try {
    const query = 'SELECT * FROM markets ORDER BY "marketName"';
    const result = await pool.query(query);
    ctx.body = result.rows;
    ctx.status = 200;
  } catch (error) {
    console.log("Connection error in MarketsController::allMarkets", error);
    ctx.body = { error };
    ctx.status = 500;
  }
};

// Assuming you're working within a RoutesController.js or similar

const getMarketTransactionsInCycle = async (ctx) => {
  try {
    const { cycleID } = ctx.params;
    const query = `
      SELECT DISTINCT m."marketID", m."marketName", t."cycleID"
      FROM markets m
      JOIN transactions t ON m."marketID" = t."marketID"
      WHERE t."cycleID" = $1
      ORDER BY m."marketName";
    `;
    const result = await pool.query(query, [cycleID]);
    ctx.body = result.rows;
    ctx.status = 200;
  } catch (error) {
    console.error("Failed to fetch markets with transactions in cycle", error);
    ctx.status = 500;
    ctx.body = { error: "Failed to fetch markets with transactions in the specified cycle." };
  }
};


module.exports = { allMarkets, getMarketTransactionsInCycle };

// MarketsController.js
const pool = require("../../database/mySQLconnect");

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

module.exports = { allMarkets };

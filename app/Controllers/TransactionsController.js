// TransactionsController.js

const pool = require("../../database/dbConnect");

// route returns number of transactions for current cycle. (1)
const getCurrentCycleTransactionsCount = async (ctx) => {
    try {
        const query = `SELECT COUNT(*) AS transaction_count FROM transactions WHERE "cycleID" = (SELECT MAX("cycleID") - 1 FROM cycles)`;

        const result = await pool.query(query);
        // result.rows returns an array of objects each representing a row in the result set.
        ctx.body = result.rows;
        ctx.status = 200;
  } catch (error) {
    console.log(
      "getCurrentCycleTransactionsCount threw an exception. Reason...",
      error
    );
    ctx.status = 500; // Internal Server Error
    ctx.body = { error };
  }
};

// route returns all transactions for given accountID for current cycle. (2)
const getTransactionsForAccountGivenInCurrentCycle = async (ctx) => {
    try {
        const { accountID } = ctx.params;
        const query = `
      SELECT *
      FROM transactions
      WHERE "accountID" = $1
      AND "cycleID" = (SELECT MAX("cycleID") - 1 FROM cycles);
    `;
        const result = await pool.query(query, [accountID]);
        ctx.body = result.rows;
        ctx.status = 200;
  } catch (error) {
    console.log(
      "getTransactionsForAccountGivenInCurrentCycle threw an exception. Reason...",
      error
    );
    ctx.status = 500; // Internal Server Error
    ctx.body = { error };
  }
};

// route return all transactions for route given by routeID in current cycle. (3)
const getTransactionsForRouteGivenInCurrentCycle = async (ctx) => {
    try {
        const { routeID } = ctx.params;
        const query = `SELECT * FROM transactions WHERE "routeID" = $1 AND "cycleID" = (SELECT MAX("cycleID") - 1 FROM cycles)`;
        const result = await pool.query(query, [routeID]);
        ctx.body = result.rows;
        ctx.status = 200;
        
    } catch (error) {
        console.log(
            "getTransactionsForRouteGivenInCurrentCycle threw an exception. Reason...",
            error
        );
        ctx.status = 500;
        ctx.body = { error };
    }
};

// route return all transactions for all routes in current cycle. (4)
const getTransactionsForAllRoutesInCurrentCycle = async (ctx) => {
    try {
        const query = `SELECT * FROM transactions WHERE "cycleID" = (SELECT MAX("cycleID") - 1 FROM cycles)`;
        const result = await pool.query(query);
        ctx.body = result.rows;
        ctx.status = 200;
        
    } catch (error) {
        console.log(
            "getTransactionsForAllRoutesInCurrentCycle threw an exception. Reason...",
            error
        );
        ctx.status = 500;
        ctx.body = { error };
    }
};

// route return all transactions for market given by marketID in the current cycle. (5)
const getTransactionsForMarketGivenInCurrentCycle = async (ctx) => {
    try {
        const { marketID } = ctx.params;
        const query = `SELECT * FROM transactions WHERE "marketID" = $1 AND "cycleID" = (SELECT MAX("cycleID") - 1 FROM cycles)`;
        const result = await pool.query(query, [marketID]);
        ctx.body = result.rows;
        ctx.status = 200;
        
    } catch (error) {
        console.log(
            "getTransactionsForMarketGivenInCurrentCycle threw an exception. Reason...",
            error
        );
        ctx.status = 500;
        ctx.body = { error };
    }
};

module.exports = {
  getCurrentCycleTransactionsCount,
  getTransactionsForAccountGivenInCurrentCycle,
  getTransactionsForRouteGivenInCurrentCycle,
  getTransactionsForAllRoutesInCurrentCycle,
  getTransactionsForMarketGivenInCurrentCycle,
};

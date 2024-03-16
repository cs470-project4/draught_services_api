// TransactionsController.js

const pool = require("../../database/dbConnect");

// route returns number of transactions for current cycle. (1)
const getTransactionsForCycle = async (ctx) => {
    try {
        const cycleID = ctx.params.cycleID;
        const query = `SELECT COUNT(*) AS transaction_count FROM transactions WHERE "cycleID" = $1`;

        const result = await pool.query(query, [cycleID]);
        // result.rows returns an array of objects each representing a row in the result set.
        ctx.body = result.rows;
        ctx.status = 200;
  } catch (error) {
    console.log(
      "getTransactionsForCycle threw an exception. Reason...",
      error
    );
    ctx.status = 500; // Internal Server Error
    ctx.body = { error };
  }
};

// route returns all transactions for given accountID for current cycle. (2)
const getTransactionsForAccountGiven = async (ctx) => {
    try {
        const { accountID, cycleID } = ctx.params;
        const query = `
      SELECT *
      FROM transactions
      WHERE "accountID" = $1
      AND "cycleID" = $2;
    `;
        const result = await pool.query(query, [accountID, cycleID]);
        ctx.body = result.rows;
        ctx.status = 200;
  } catch (error) {
    console.log(
      "getTransactionsForAccountGiven threw an exception. Reason...",
      error
    );
    ctx.status = 500; // Internal Server Error
    ctx.body = { error };
  }
};

// route return all transactions for route given by routeID in current cycle. (3)
const getTransactionsForRouteGiven = async (ctx) => {
    try {
        const { routeID, cycleID } = ctx.params;
        const query = `
          SELECT t.*, r."routeName" 
          FROM transactions t
          JOIN routes r ON t."routeID" = r."routeID"
          WHERE t."routeID" = $1 AND t."cycleID" = $2
          ORDER BY t."transactionDate" ASC;
        `;
        const result = await pool.query(query, [routeID, cycleID]);
        ctx.body = result.rows;
        ctx.status = 200;
        
    } catch (error) {
        console.log(
            "getTransactionsForRouteGiven threw an exception. Reason...",
            error
        );
        ctx.status = 500;
        ctx.body = { error };
    }
};

// route return all transactions for all routes in current cycle. (4)
const getTransactionsForAllRoutes = async (ctx) => {
    try {
        const { cycleID } = ctx.params;
        const query = `
          SELECT t.*, r."routeName"
          FROM transactions t
          JOIN routes r ON t."routeID" = r."routeID"
          WHERE t."cycleID" = $1
          ORDER BY r."routeName", t."transactionDate" ASC;
        `;
        const result = await pool.query(query, [cycleID]);
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
const getTransactionsForMarketGiven = async (ctx) => {
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
  getTransactionsForCycle,
  getTransactionsForAccountGiven,
  getTransactionsForRouteGiven,
  getTransactionsForAllRoutes,
  getTransactionsForMarketGiven,
};

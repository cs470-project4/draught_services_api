const pool = require("../../database/dbConnect");

const fiveCycles = async (ctx) => {
    try {
        const query = 'SELECT "cycleID" FROM cycles ORDER BY "cycleID" DESC LIMIT 5 OFFSET 1';
        const result = await pool.query(query);
        ctx.body = result.rows;
        ctx.status = 200;
    } catch (error) {
        console.log("Connection error in CyclesController::allCycles", error);
        ctx.body = { error };
        ctx.status = 500;
    }
}

const getAccountsForCycle = async (ctx) => {
    try {
        const { cycleID } = ctx.params;
        const query = `
            SELECT a.*, t."cycleID"
            FROM accounts a
            JOIN transactions t ON a."accountID" = t."accountID"
            WHERE t."cycleID" = $1
            GROUP BY a."accountID", t."cycleID"
            ORDER BY a."accountName";`;
        const result = await pool.query(query, [cycleID]);
        ctx.body = result.rows;
        ctx.status = 200;
    } catch (error) {
        console.log("getAccountsForCycle threw an exception. Reason...", error);
        ctx.status = 500;
        ctx.body = { error };
    }
};
    
module.exports = {
    fiveCycles,
    getAccountsForCycle,
};


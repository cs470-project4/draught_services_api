// AccountsController.js

const pool = require("../../database/dbConnect");

const allActiveAccounts = async (ctx) => {
    try {
        const query = `SELECT * FROM accounts WHERE status = 'Active' ORDER BY "accountName"`;
        const result = await pool.query(query);
        ctx.body = result.rows;
        ctx.status = 200;
    } catch (error) {
        console.log("Connection error in AccountsController::allActiveAccounts", error);
        ctx.body = { error };
        ctx.status = 500;
    }
}

module.exports = { allActiveAccounts };
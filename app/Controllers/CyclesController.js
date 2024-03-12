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
    
module.exports = {
  fiveCycles,
};


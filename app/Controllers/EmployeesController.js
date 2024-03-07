// EmployeesController.js
const pool = require("../../database/mySQLconnect");

const allEmployees = async (ctx) => {
    try { 
        const query = 'SELECT * FROM employees ORDER BY "employeeName"';
        const results = await pool.query(query);
        ctx.body = results.rows;
        ctx.status = 200;
    } catch (error) {
        console.log("Connection error in EmployeesController::allEmployees", error);
        ctx.body = { error };
        ctx.status = 500;
    }
}

module.exports = { allEmployees };
// const dbConnection = require('../../database/mySQLconnect');
const pool = require("../../database/mySQLconnect");
const setAccessToken = require('../../config/setAccessToken');


require('dotenv').config();

const authorizeUser = async (ctx) => {
  try {
    // Here, you might want to add validation for ctx.params.user_id
    const query = "SELECT * FROM scheduler_users WHERE user_id = $1";
    const result = await pool.query(query, [ctx.params.user_id]);

    if (result.rows.length === 1) {
      // Matching user record found
      setAccessToken(ctx, result.rows[0]);
      console.log("from studentRecord. About to return ", result.rows[0]);
      ctx.body = {
        status: "OK",
        user: result.rows[0],
      };
    } else {
      console.log("Not able to identify the user.");
      ctx.body = {
        status: "Failed",
        error: "No such user.",
        user: null,
      };
      ctx.status = 404; // Consider using more specific status codes for different errors
    }
  } catch (err) {
    console.log(
      "authorize in LoginController threw an exception. Reason...",
      err
    );
    ctx.status = 500; // Internal Server Error
    ctx.body = {
      status: "Failed",
      error: err.message,
      user: null,
    };
  }
};

module.exports = {
    authorizeUser,
};

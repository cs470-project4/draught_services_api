// const dbConnection = require('../../database/mySQLconnect');
const pool = require('../../database/dbConnect');
const dateFormat = require('dateformat');
const buildStudentViewFromCourses = require('../Schema/buildStudentViewFromCourses');

function now() {
    return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
}

const allRoutes = async (ctx) => {
  console.log("routes all routes called.");
  return new Promise((resolve, reject) => {
    const query = `
            SELECT *
            FROM routes
            ORDER BY "routeName"
        `;
    pool
      .query(query)
      .then((result) => {
        ctx.body = result.rows;
        ctx.status = 200;
        resolve();
      })
      .catch((error) => {
        console.log("Connection error in RoutesController::allRoutes", error);
        ctx.body = [];
        ctx.status = 500;
        reject(error);
      });
  });
};

const routeWithRouteID = async (ctx) => {
  return new Promise((resolve, reject) => {
    const query = `
            SELECT *
            FROM routes
            WHERE routeID = $1
            ORDER BY "routeName"
        `;
    pool
      .query(query, [ctx.params.routeID])
      .then((result) => {
        if (result.rows.length > 0) {
          ctx.body = result.rows;
          ctx.status = 200;
        } else {
          ctx.body = [];
          ctx.status = 404; // Not Found
        }
        resolve();
      })
      .catch((error) => {
        console.log(
          "Connection error in RoutesController::routeWithRouteID",
          error
        );
        ctx.body = [];
        ctx.status = 500;
        reject(error);
      });
  });
};

const routesWithTransactionsInCycle = async (ctx) => {
  try {
    const { cycleID } = ctx.params;
    const query = `
      SELECT DISTINCT t."routeID", r."routeName", t."marketID", r."status", r."lastModified", t."cycleID"
      FROM routes r
      JOIN transactions t ON r."routeID" = t."routeID"
      WHERE t."cycleID" = $1
      ORDER BY r."routeName" ASC;
    `;
    const result = await pool.query(query, [cycleID]);
    ctx.body = result.rows;
    ctx.status = 200;
  } catch (error) {
    console.log(
      "Connection error in RoutesController::routesWithTransactionsInCycle",
      error
    );
    ctx.body = { error };
    ctx.status = 500;
  }
};


module.exports = {
    allRoutes,
  routeWithRouteID,
  routesWithTransactionsInCycle,
};

// const dbConnection = require('../../database/mySQLconnect');
const pool = require('../../database/mySQLconnect');
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

module.exports = {
    allRoutes,
    routeWithRouteID,
};

const Authorize = require("../app/Middleware/Authorize.js");
const VerifyJWT = require("../app/Middleware/VerifyJWT.js");
const LoginController = require("../app/Controllers/LoginController.js");
const RoutesController = require("../app/Controllers/RoutesController.js");
const MarketsController = require("../app/Controllers/MarketsController.js");
const EmployeesController = require("../app/Controllers/EmployeesController.js");
const TransactionsController = require("../app/Controllers/TransactionsController.js");
const CyclesController = require("../app/Controllers/CyclesController.js");

/*
|--------------------------------------------------------------------------
| Default router
|--------------------------------------------------------------------------
|
| Default router is used to define any routes that don't belong to a
| controller. Also used as a parent container for the other routers.
|
*/
const router = require("koa-router")({
  prefix: "/api/v1",
});

router.get("/", function (ctx) {
  console.log("router.get(/)");
  return (ctx.body = "What is up?");
});

/*
|--------------------------------------------------------------------------
| login router
|--------------------------------------------------------------------------
|
| Handles routes related to login functionality.
|
*/

const loginRouter = require("koa-router")({
  prefix: "/login",
});
loginRouter.get("/:user_id", LoginController.authorizeUser, (err) =>
  console.log("draught_services_routes.js: login-route error:", err)
);

/*
|--------------------------------------------------------------------------
| Routes Router Configuration
|--------------------------------------------------------------------------
|
| Handles routes related to route entities.
|
*/

const routesRouter = require("koa-router")({
  prefix: "/routes",
});
routesRouter.use(VerifyJWT);
routesRouter.get(
  "/all-routes",
  Authorize("admin"),
  RoutesController.allRoutes,
  (err) => console.log(`allRoutes ran into an error: ${err}`)
);
routesRouter.get(
  "/:routeID/",
  Authorize("admin"),
  RoutesController.routeWithRouteID
);
routesRouter.get("/:cycleID/routes", RoutesController.routesWithTransactionsInCycle);

/*
|--------------------------------------------------------------------------
| Markets Router Configuration
|--------------------------------------------------------------------------
|
| Handles routes related to market entities.
|
*/

const marketsRouter = require("koa-router")({
  prefix: "/markets",
});
marketsRouter.use(VerifyJWT);
marketsRouter.get("/all-markets", MarketsController.allMarkets);

/*
|--------------------------------------------------------------------------
| Employees Router Configuration
|--------------------------------------------------------------------------
|
| Handles routes related to employees entities.
|
*/

const employeesRouter = require("koa-router")({
  prefix: "/employees",
});
employeesRouter.use(VerifyJWT);
employeesRouter.get("/all-employees", EmployeesController.allEmployees);

/*
|--------------------------------------------------------------------------
| Transactions Router Configuration
|--------------------------------------------------------------------------
|
| Handles routes related to transactions entities.
|
*/

const transactionsRouter = require("koa-router")({
  prefix: "/transactions",
});
transactionsRouter.use(VerifyJWT);
transactionsRouter.get(
  "/:cycleID",
  TransactionsController.getTransactionsForCycle
);
transactionsRouter.get(
  "/:cycleID/:accountID/one-account",
  TransactionsController.getTransactionsForAccountGiven
);
transactionsRouter.get(
  "/:cycleID/:routeID/trans-for-route",
  TransactionsController.getTransactionsForRouteGiven
);
transactionsRouter.get(
  "/:cycleID/all-routes",
  TransactionsController.getTransactionsForAllRoutes
);
transactionsRouter.get(
  "/market/:marketID/",
  TransactionsController.getTransactionsForMarketGiven
);

/*
|--------------------------------------------------------------------------
| Cycles Router Configuration
|--------------------------------------------------------------------------
|
| Handles routes related to cycles entities.
|
*/

const cyclesRouter = require("koa-router")({
  prefix: "/cycles",
});

cyclesRouter.use(VerifyJWT);
cyclesRouter.get("/last-five", CyclesController.fiveCycles);
cyclesRouter.get(
  "/:cycleID/accounts",
  CyclesController.getAccountsForCycle);

/*
|--------------------------------------------------------------------------
| Register all of the controllers into the default controller.
|--------------------------------------------------------------------------
|
| This includes login, routes, and markets routers.
|
*/
router.use(
  "",
  loginRouter.routes(),
  routesRouter.routes(),
  marketsRouter.routes(),
  employeesRouter.routes(),
  transactionsRouter.routes(),
  cyclesRouter.routes(),
);

module.exports = function (app) {
  app.use(router.routes());
  app.use(router.allowedMethods());
};

-- PostgreSQL adaptation

-- Dropping the table if it exists, with CASCADE to also drop any dependent objects
DROP TABLE IF EXISTS routes CASCADE;

-- Creating the table with PostgreSQL syntax
CREATE TABLE routes (
   routeID SERIAL PRIMARY KEY, -- SERIAL for auto-increment in PostgreSQL
   routeName VARCHAR(50),
   employeeID INT NOT NULL,
   marketID INT NOT NULL,
   cycleID INT NOT NULL,
   status VARCHAR(10),
   lastModified TIMESTAMP, -- DATETIME in MySQL is equivalent to TIMESTAMP in PostgreSQL
   dateCreated TIMESTAMP
);

-- Creating indexes
-- PostgreSQL automatically creates a unique index for the PRIMARY KEY column.
-- Additional indexes on employeeID and cycleID can be useful for query performance.
CREATE INDEX routes_employeeID_idx ON routes USING BTREE (employeeID);
CREATE INDEX routes_cycleID_idx ON routes USING BTREE (cycleID);

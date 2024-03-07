-- This comment remains for context but remember that PostgreSQL uses schemas differently than MySQL's use database statement
-- DROP TABLE IF EXISTS cycles CASCADE; is sufficient in PostgreSQL to remove the table along with any dependent objects

DROP TABLE IF EXISTS cycles CASCADE;

CREATE TABLE cycles (
   cycleID SERIAL PRIMARY KEY, -- SERIAL for auto-increment in PostgreSQL
   startDate TIMESTAMP, -- DATETIME in MySQL is equivalent to TIMESTAMP in PostgreSQL
   endDate TIMESTAMP
);

-- In PostgreSQL, a primary key automatically creates a unique index, so the explicit creation of an index on cycleID might be redundant.
-- However, if you still want to explicitly define an index (e.g., for documentation or specific tuning reasons), you can do so like this:

CREATE INDEX cycles_cycleID_idx ON cycles (cycleID);

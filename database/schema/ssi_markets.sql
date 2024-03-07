-- This is adapted for PostgreSQL

DROP TABLE IF EXISTS markets CASCADE;

CREATE TABLE markets (
   marketID SERIAL PRIMARY KEY,
   marketName VARCHAR(100),
   city VARCHAR(100),
   state VARCHAR(10),
   status VARCHAR(10),
   lastModified TIMESTAMP,
   dateCreated TIMESTAMP
);

-- In PostgreSQL, creating an index on the primary key (marketID) is automatically done with the PRIMARY KEY constraint.
-- However, if you want to explicitly define an additional index, here's how you could do it (usually not needed for primary keys):
CREATE INDEX markets_marketID_idx ON markets USING BTREE (marketID);

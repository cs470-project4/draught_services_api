-- Drop the table if it exists, including dependent objects with CASCADE
DROP TABLE IF EXISTS accounts CASCADE;

-- Create the table without backticks and AUTO_INCREMENT changes to SERIAL for PostgreSQL
CREATE TABLE accounts (
   accountName VARCHAR(100) NOT NULL,
   accountID SERIAL,  -- Changed from INT NOT NULL AUTO_INCREMENT
   routeID INT NOT NULL,
   marketID INT NOT NULL,
   status VARCHAR(10),
   dateCreated TIMESTAMP,  -- DATETIME in MySQL is equivalent to TIMESTAMP in PostgreSQL
   lastModified TIMESTAMP,
   PRIMARY KEY (accountID)
);

-- Create an index on the accountID column (PostgreSQL will automatically create one for the PRIMARY KEY, so this might be redundant)
CREATE INDEX accounts_accountID_idx ON accounts USING BTREE (accountID);

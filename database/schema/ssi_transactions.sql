-- PostgreSQL adaptation

-- No 'USE' statement required as the database should be selected before running the script in PostgreSQL

-- Dropping the table if it exists, with CASCADE to also drop any dependent objects
DROP TABLE IF EXISTS transactions CASCADE;

-- Creating the table with PostgreSQL syntax
CREATE TABLE transactions (
   transactionID SERIAL PRIMARY KEY, -- SERIAL for auto-increment in PostgreSQL
   transactionDate DATE,
   employeeID INT NOT NULL,
   accountID INT NOT NULL,
   productID INT NOT NULL,
   distributorID INT NOT NULL,
   marketID INT NOT NULL,
   routeID INT NOT NULL,
   cycleID INT NOT NULL,
   taps SMALLINT, -- 'tinyint' in MySQL is typically equivalent to 'SMALLINT' in PostgreSQL
   lastModified TIMESTAMP -- DATETIME in MySQL is equivalent to TIMESTAMP in PostgreSQL
);

-- In PostgreSQL, creating a primary key automatically creates a unique index on the column.
-- The explicit creation of an index on transactionID might not be necessary unless there are specific performance considerations.
-- If you still want to create an index explicitly for documentation or other reasons, you can do it as shown below.
-- However, this specific index creation is redundant since the primary key already ensures uniqueness and indexing.
CREATE INDEX transactions_transactionID_idx ON transactions USING BTREE (transactionID);

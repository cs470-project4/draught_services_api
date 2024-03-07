-- PostgreSQL adaptation

-- Dropping the table if it exists, with CASCADE to drop dependent objects as well
DROP TABLE IF EXISTS products CASCADE;

-- Creating the table with PostgreSQL-compatible syntax
CREATE TABLE products (
   productName VARCHAR(100) NOT NULL,
   productID SERIAL PRIMARY KEY, -- SERIAL for auto-increment in PostgreSQL
   distributorID INT NOT NULL,
   marketID INT NOT NULL,
   status VARCHAR(10),
   lastModified TIMESTAMP, -- DATETIME in MySQL is equivalent to TIMESTAMP in PostgreSQL
   dateCreated TIMESTAMP
);

-- In PostgreSQL, creating a primary key automatically creates a unique index on the column.
-- The explicit creation of an index on productID might not be necessary unless there are specific performance considerations.
-- If you still want to create an index explicitly for documentation or other reasons, you can do it as shown below.
CREATE INDEX products_productID_idx ON products USING BTREE (productID);

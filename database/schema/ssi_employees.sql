-- Adjusted for PostgreSQL

-- The use statement is MySQL-specific and not applicable in PostgreSQL. Assuming you're already connected to the correct database.

DROP TABLE IF EXISTS employees CASCADE;

CREATE TABLE employees (
   employeeName VARCHAR(100) NOT NULL,
   employeeID SERIAL, -- SERIAL data type for auto-increment in PostgreSQL
   routeID INT, -- Assuming routeID can be NULL as per your MySQL definition
   dateHired TIMESTAMP, -- DATETIME in MySQL is equivalent to TIMESTAMP in PostgreSQL
   dateTerminated TIMESTAMP,
   status VARCHAR(10),
   lastModified TIMESTAMP,
   dateCreated TIMESTAMP,
   PRIMARY KEY (employeeID)
);

-- In PostgreSQL, an index on the primary key (employeeID) is automatically created.
-- If you still want to explicitly define an index for educational or specific purposes, you can do so. However, it's redundant for primary keys.
-- The following line is optional and generally not needed:
CREATE INDEX employees_employeeID_idx ON employees USING BTREE (employeeID);

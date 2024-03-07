-- Drop the table if it exists
DROP TABLE IF EXISTS scheduler_users;

-- Create the table
CREATE TABLE scheduler_users (
    "user_id" VARCHAR(100) NOT NULL,
    "user_fName" VARCHAR(40) NOT NULL,
    "user_mName" VARCHAR(40) DEFAULT NULL,
    "user_lName" VARCHAR(40) NOT NULL,
    "department" VARCHAR(50) NOT NULL,
    "subject" VARCHAR(8) NOT NULL,
    "role" VARCHAR(10) NOT NULL,
    PRIMARY KEY (user_id, department, subject)
);

-- Insert data into the table (use the specific INSERT statement from the file you choose)
INSERT INTO
    scheduler_users
VALUES
    (
        'ali.kooshesh',
        'Ali',
        'A',
        'Kooshesh',
        'ComputerScience',
        'CS',
        'admin'
    ), 
    (
        'michael.seutin',
        'Michael',
        'J',
        'Seutin',
        'Mathematics',
        'MATH',
        'admin'
    ),
    (
        'jane.doe',
        'Jane',
        'A',
        'Doe',
        'ComputerScience',
        'CS',
        'user'
    );

-- Add more INSERT statements as needed
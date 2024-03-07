-- Drop the table if it exists
DROP TABLE IF EXISTS markets;

-- Create the table
CREATE TABLE markets (
    "marketID" SERIAL PRIMARY KEY,
    "marketName" VARCHAR(100) DEFAULT NULL,
    "city" VARCHAR(100) DEFAULT NULL,
    "state" VARCHAR(10) DEFAULT NULL,
    "status" VARCHAR(10) DEFAULT NULL,
    "lastModified" TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
    "dateCreated" TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL
);

-- Insert data into the table
INSERT INTO
    markets (
        "marketID",
        "marketName",
        "city",
        "state",
        "status",
        "lastModified",
        "dateCreated"
    )
VALUES
    (
        110015,
        'Santa Rosa',
        'Santa Rosa',
        'CA',
        'Active',
        '2021-09-27 03:55:48',
        '2009-06-15 00:00:00'
    ),
    (
        110016,
        'Windsor',
        'Windsor',
        'CA',
        'Active',
        '2021-09-27 03:55:48',
        '2009-06-15 00:00:00'
    ),
    (
        110017,
        'Petaluma',
        'Petaluma',
        'CA',
        'Active',
        '2021-09-27 03:55:48',
        '2009-06-15 00:00:00'
    ),
    (
        110018,
        'San Rafael',
        'San Rafael',
        'CA',
        'Active',
        '2021-09-27 03:55:48',
        '2009-06-15 00:00:00'
    ),
    (
        110019,
        'Pacifica',
        'Pacifica',
        'CA',
        'Active',
        '2021-09-27 03:55:48',
        '2009-06-15 00:00:00'
    ),
    (
        110020,
        'Cotati',
        'Cotati',
        'CA',
        'Active',
        '2021-09-27 03:55:48',
        '2009-06-15 00:00:00'
    );
-- Drop the table if it exists
DROP TABLE IF EXISTS employees;

-- Create the table
CREATE TABLE employees (
    "employeeName" VARCHAR(100) NOT NULL,
    "employeeID" SERIAL PRIMARY KEY,
    "routeID" INT DEFAULT NULL,
    "dateHired" TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
    "dateTerminated" TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
    "status" VARCHAR(10) DEFAULT NULL,
    "lastModified" TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
    "dateCreated" TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL
);

-- Insert data into the table
INSERT INTO
    employees (
        "employeeName",
        "employeeID",
        "routeID",
        "dateHired",
        "dateTerminated",
        "status",
        "lastModified",
        "dateCreated"
    )
VALUES (
    'Brian Cate',
    140014,
    NULL,
    '2018-02-07 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Rick Allen',
    140046,
    130008,
    '2012-09-10 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Philip Bonn',
    140053,
    130028,
    '2013-06-19 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Lester Barroso',
    140057,
    NULL,
    '2013-06-06 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Adam Campbell',
    140072,
    130034,
    '2018-06-17 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'John Campbell',
    140073,
    NULL,
    '2016-07-01 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Zach Cogswell',
    140082,
    130013,
    '2021-09-24 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Howard Owens',
    140090,
    130035,
    '2018-06-16 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Daniel Edwards',
    140092,
    NULL,
    '2017-08-28 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Daniel E.',
    140093,
    130048,
    '2017-09-07 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'William Wornek',
    140094,
    130038,
    '2017-10-22 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Gerald Middleton',
    140103,
    130044,
    '2018-01-25 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Brian C.',
    140107,
    NULL,
    '2018-02-11 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'James Conner',
    140110,
    130029,
    '2018-05-17 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'James C',
    140111,
    130037,
    '2018-05-20 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Howard O.',
    140113,
    NULL,
    '2018-06-16 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Adam C',
    140114,
    NULL,
    '2019-02-25 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Ashley Hazzard',
    140118,
    130043,
    '2018-09-17 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'A Campbell',
    140119,
    NULL,
    '2018-11-19 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Nattalia Lopez',
    140120,
    130032,
    '2018-11-18 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Benson Blair',
    140122,
    130017,
    '2019-03-15 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Rebecca Lukehart',
    140123,
    130010,
    '2020-01-23 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Heather Owens',
    140124,
    130047,
    '2019-05-10 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Tori Hensley',
    140125,
    NULL,
    '2019-05-16 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Victoria Wingate',
    140126,
    130011,
    '2020-06-26 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Billy Gilly',
    140128,
    NULL,
    '2019-07-01 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Emily Able',
    140129,
    130031,
    '2019-09-08 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Francisco Ochoa',
    140132,
    130039,
    '2019-11-18 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Jessica Cusmano',
    140133,
    NULL,
    '2020-03-09 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Gerald M.',
    140134,
    130042,
    '2020-06-03 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Travis Wingate',
    140135,
    NULL,
    '2020-06-26 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Nick Jansen',
    140136,
    130036,
    '2020-07-28 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Nick J',
    140137,
    130015,
    '2020-07-28 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Amanda Fink',
    140138,
    NULL,
    '2020-08-21 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'John Nemire',
    140139,
    130040,
    '2021-05-17 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Sha Sawers',
    140140,
    130016,
    '2021-02-06 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Olivia Nelson',
    140141,
    130050,
    '2021-03-18 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'David Zizi',
    140142,
    NULL,
    '2021-04-27 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Nattalia L',
    140143,
    NULL,
    '2021-04-27 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Ari Campbell',
    140144,
    NULL,
    '2021-05-04 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Olivia N',
    140145,
    NULL,
    '2021-05-01 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'John N',
    140146,
    130030,
    '2021-05-17 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Dakota Gue',
    140147,
    NULL,
    '2021-07-08 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Jorden Careaga',
    140148,
    130024,
    '2021-07-08 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Jace Conyers',
    140149,
    130023,
    '2021-07-19 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Sabrina Braese',
    140150,
    130000,
    '2021-07-29 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
),
(
    'Zach C',
    140151,
    130009,
    '2021-09-24 00:00:00',
    NULL,
    'Active',
    '2021-09-27 18:02:03',
    '2021-09-27 18:02:03'
);
-- RDBMS - relational database mangement system - Postgresql



-- Postgresql commands to run

-- command line:
    -- psql = opens the client to talk to server in cmd line
    -- \q = to exit client

    -- \? = help
    -- \l = list all databases you have created
    -- \c db_name = connects to database
    -- \dt = list tables in a database
    -- \d table_name = list columns of table

-- SQL syntax
    -- CREATE DATABASE name_of_db = creates a new database
    -- CREATE TABLE name_of_table (column_name DATATYPE) = creates a table
    -- INSERT INTO name_of_table VALUES()


CREATE DATABASE favourite_food;

CREATE TABLE food(id SERIAL PRIMARY KEY, name VARCHAR(50), user_added VARCHAR(50), description TEXT);

-- PRIMARY KEY = unique and main column of data
-- SERIAL = creates ids from 1 up to required amount.

INSERT INTO food(name, user_added) VALUES('pizza', 'allison');

INSERT INTO food(name, user_added) VALUES('biscuits', 'sara'), ('ice-cream', 'sannan');

UPDATE food SET description='my new desc';

UPDATE food SET description='my new desc' WHERE id = 1;


DELETE FROM food WHERE id = 1;
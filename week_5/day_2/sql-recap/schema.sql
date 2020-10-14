CREATE DATABASE school;

\c school

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT,
    score INTEGER
);

-- CRUD
    -- create - INSERT
    -- read - SELECT
    -- update - UPDATE
    -- delete - DELETE

INSERT INTO students (name, score) VALUES ('ned', 100);
INSERT INTO students (name, score) VALUES ('ned', 12);
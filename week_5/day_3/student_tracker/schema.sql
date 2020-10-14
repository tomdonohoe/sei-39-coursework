CREATE DATABASE school;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT,
  score INTEGER
);

INSERT INTO students (name, score) VALUES ('ned', 100);
INSERT INTO students (name, score) VALUES ('ned', 12);
CREATE DATABASE goodfoodhunting;

-- \c goodfoodhunting

CREATE TABLE dishes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    image_url TEXT
);


INSERT INTO dishes (name, image_url) VALUES ('cake', 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb-500x500.jpg');
INSERT INTO dishes (name, image_url) VALUES ('ribs', 'https://www.recipetineats.com/wp-content/uploads/2019/08/Oven-Pork-Ribs-with-Barbecue-Sauce-SQ.jpg?w=500&h=500&crop=1');


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    password_digest TEXT
);


ALTER TABLE dishes ADD COLUMN user_id INTEGER;
UPDATE TABLE dishes SET user_id = 2;


CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT,
    dish_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE -- delete comments if user is deleted.
);
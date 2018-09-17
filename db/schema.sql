CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int(10)
    AUTO_INCREMENT,
    burger_name varchar
    (255),
    devoured boolean not null default 0,
    primary key
    (id)
)
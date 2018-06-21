CREATE DATABASE IF NOT EXISTS company_rest_api;

USE company_rest_api;

CREATE TABLE employees(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employees;
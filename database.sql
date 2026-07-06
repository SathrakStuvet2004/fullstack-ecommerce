CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'User','seller') NOT NULL default 'user',
    verification_token varchar(500),
    verification_expires DATETIME default null,
    is_verified BOOLEAN DEFAULT FALSE,
	is_active BOOLEAN DEFAULT false,
    seller_verification boolean default false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

select * FROM users;

drop table users;

update users
set role = 'admin',
	is_verified = true,
	is_active = true
where id = 1;

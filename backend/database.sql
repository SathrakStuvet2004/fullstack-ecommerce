CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) not null ,
    email VARCHAR(100)not null ,
    role varchar (20)
);

insert INTO users (name,email,role)
values
  ("sathrak","admin@gmail.com","admin");

select * FROM users;

delete from users
where id in (2,3,4,5);


CREATE DATABASE IF NOT EXISTS CafuStore;

CREATE TABLE CafuStore.Products (
  Products_id INT AUTO_INCREMENT PRIMARY KEY,
  Products_name VARCHAR(100)
);

CREATE TABLE CafuStore.Product (
  Product_id INT AUTO_INCREMENT PRIMARY KEY,
  Products_id INT,
  Product_name VARCHAR(255) 

CREATE TABLE CafuStore.ProductCores (
  Product_id INT,
  cores VARCHAR(),
)
CREATE TABLE `shop`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `price` INT UNSIGNED NULL,
  `description` VARCHAR(255) NULL,
  `category_id` INT NULL,
  PRIMARY KEY (`id`));

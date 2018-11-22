CREATE TABLE `product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `price` INT UNSIGNED NULL,
  `description` VARCHAR(255) NULL,
  `category_id` INT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `image_url` VARCHAR(255) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `product`
ADD INDEX `fk_category_idx` (`category_id` ASC);
;
ALTER TABLE `product`
ADD CONSTRAINT `fk_category`
  FOREIGN KEY (`category_id`)
  REFERENCES `category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

CREATE TABLE `image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(60) NULL,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `image`
ADD COLUMN `product_id` INT NULL AFTER `url`,
ADD INDEX `fk_product_idx` (`product_id` ASC);
;
ALTER TABLE `image`
ADD CONSTRAINT `fk_product`
  FOREIGN KEY (`product_id`)
  REFERENCES `product` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

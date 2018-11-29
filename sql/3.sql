START TRANSACTION;

CREATE TABLE IF NOT EXISTS `blog` (
  `id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `title` VARCHAR(45) NULL,
  `body` TEXT NULL,
  INDEX `fk_blog_product_idx` (`product_id` ASC),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_blog_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `shop`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

COMMIT;

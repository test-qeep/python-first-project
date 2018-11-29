START TRANSACTION;

ALTER TABLE `shop`.`product`
ADD INDEX `fk_product_category1_idx` (`category_id` ASC);

ALTER TABLE `shop`.`product`
ADD CONSTRAINT `fk_product_category1`
  FOREIGN KEY (`category_id`)
  REFERENCES `shop`.`category` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

COMMIT;

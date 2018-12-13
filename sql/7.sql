INSERT INTO `category`
(`id`,
`title`,
`image_url`,
`description`)
VALUES
('5', 'Платья', 'http://rusdesigners.ru/images/thumbnails/420/620/detailed/9/018.jpg', 'Категория наших платьев'),
('6', 'Джинсы', 'https://pantamo-jeans.ru/admin/pictures/1218bb.jpg', 'Джинсы для ваших ног'),
('7', 'Шорты', 'https://www.reebok.ru/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dwec8eda8e/zoom/BK5170_01.jpg', 'Шорты для ваших ног');

INSERT INTO `product` (`title`, `price`, `description`, `category_id`) VALUES ('Шорты синие', '130', 'Шорты большие и маленькие', '7');
INSERT INTO `product` (`title`, `price`, `description`, `category_id`) VALUES ('Шорты красные', '150', 'Шорты большие и маленькие', '7');
INSERT INTO `product` (`title`, `price`, `description`, `category_id`) VALUES ('Шорты зеленые', '160', 'Шорты большие и маленькие', '7');

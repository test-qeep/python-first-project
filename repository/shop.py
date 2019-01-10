import pymysql.cursors

connection = pymysql.connect(host='localhost',
                             user='root',
                             password='123123',
                             db='shop',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)


def find_category(category_id):
    with connection.cursor() as cursor:
        cursor.execute('''
        SELECT
            id,
            title,
            description,
            image_url
        FROM `category`
        WHERE id = %s
        ''', (category_id,))
        category = cursor.fetchone()

    return category


def find_all_categories():
    with connection.cursor() as cursor:
        sql = '''
        SELECT
            id,
            title,
            description,
            image_url
        FROM category
        '''
        cursor.execute(sql)
        categories = cursor.fetchall()

    return categories


def find_products_by_category(category_id):
    with connection.cursor() as cursor:
        sql = '''
        SELECT
            p.id,
            p.title,
            description,
            price,
            category_id,
            i.id AS image_id,
            i.title AS image_title,
            i.url AS image_url
        FROM product p
        LEFT JOIN image i ON p.id = i.product_id
        WHERE category_id = %s
        '''
        cursor.execute(sql, (category_id,))
        products = cursor.fetchall()

    return products

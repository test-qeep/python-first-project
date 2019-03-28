#!/home/vagrant/venv/bin/python
from flask import Flask, url_for, render_template

from repository import shop

app = Flask(__name__)


def generate_links():
    with app.test_request_context():
        misha_the_great_link = url_for(
            'hello_user',
            username='Misha The Great'
        )
        danil_the_great_link = url_for(
            'hello_user',
            username='Danil The Great'
        )
        index_link = url_for('index')
        index_with_params_link = url_for(
            'index',
            param1='param1',
            param2='param2'
        )

        links = {
            "Misha's page": misha_the_great_link,
            "Danil's page": danil_the_great_link,
            'Index': index_link,
            'Index with params': index_with_params_link,
        }

    return links


@app.route('/')
def index():
    links = generate_links()

    categories = shop.find_all_categories()
    slides = list()
    for x in categories:
        slide = {
            'category_id': x.get('id'),
            'heading': x.get('title'),
            'image_title': x.get('title'),
            'subheading': x.get('description'),
            'image_src': x.get('image_url')
        }
        slides.append(slide)

    return render_template('index.html', links=links, slides=slides)


@app.route('/user/')
@app.route('/user/<username>')
def hello_user(username=None):
    links = generate_links()
    return render_template(
        'user.html',
        username=username,
        links=links,
    )


@app.route('/category/<int:category_id>')
def category_page(category_id):
    links = generate_links()

    category = shop.find_category(category_id)
    products = shop.find_products_by_category(category_id)

    return render_template(
        'category.html',
        products=products,
        category=category,
        links=links
    )


@app.route('/cart')
def cart():
    links = generate_links()

    return render_template(
        'cart.html',
        links=links
    )


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)

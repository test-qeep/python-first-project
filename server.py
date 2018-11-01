from flask import Flask, url_for, render_template

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
    slides = [
        {
            'image_src': 'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg',
            'image_title': 'Image title',
            'heading': 'Отдохните на пляже в Таиланде',
            'subheading': 'Только у нас вы можете заказать билет по самой низкой цене',
        },
        {
            'image_src': 'https://bipbap.ru/wp-content/uploads/2017/04/3-8.jpg',
            'image_title': 'Image 2 title',
            'heading': 'Удивительная природа',
        },
        {
            'image_src': 'https://fullpicture.ru/wp-content/uploads/2016/09/africaplaces41.jpg',
            'image_title': 'Озеро в Африке',
            'heading': 'Живописные места в Африке',
            'subheading': 'Красивое озеро в Африке',
        },
        {
            'image_src': 'https://fullpicture.ru/wp-content/uploads/2016/09/africaplaces1.jpg',
            'image_title': 'Водопад Виктория',
            'heading': 'Живописные места в Африке',
            'subheading': 'Самый крупный водопад в мире: водопад Виктория',
        },
    ]
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


if __name__ == '__main__':
    app.run('0.0.0.0', debug=True)

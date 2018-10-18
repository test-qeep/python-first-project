import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType

credentials_file = open('credentials', 'r')
login = credentials_file.readline().strip()
password = credentials_file.readline().strip()

def captcha_handler(captcha):
    """
    Обрабатываем Captcha
    """
    key = input('Enter captcha code {0}: '.format(captcha.get_url())).strip()

    return captcha.try_again(key)


def main():
    """
    Получаем сообщения из Vk через LongPoll
    """

    vk_session = vk_api.VkApi(login, password, captcha_handler=captcha_handler)

    try:
        vk_session.auth(token_only=True)
    except vk_api.AuthError as error_msg:
        print(error_msg)
        return

    longpoll = VkLongPoll(vk_session)

    for event in longpoll.listen():

        if event.type == VkEventType.MESSAGE_NEW:
            print('Новое сообщение:')
            print(event.text)


main()

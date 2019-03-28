# Интернет-магазин на Flask

## Настройка проекта

### Инструкция по запуску проекта

1. Скачиваем и устанавливаем Vagrant и VirtualBox
1. Клонируем репозиторий в удобную нам папку с помощью команды:

        git clone git@github.com:test-qeep/python-first-project.git

1. Переходим в папку **python-first-project**: `cd python-first-project`
1. Запускаем виртуальную машину: `vagrant up`
1. Заходим в командную строку виртуальной машины по SSH-протоколу: `vagrant ssh`
1. Все дальнейшие операции производятся внутри виртуальной машины!

### Инструкция по настройке PyCharm

1. Заходим в настройки __PyCharm__, нажимая **Ctrl + Alt + S** (**Cmd + ,**)
1. Находим раздел **Project interpreter**
1. Добавляем новый интерпретатор типа **Vagrant**, где в качестве папки __Vagrant instance__
выбираем текущую рабочую директорию проекта, а в качестве интерпретатора `/home/vagrant/venv/bin/python`

### Инициализация Git-репозитория, если мы проект не клонировали, а скачали архивом

1. Заходим в папку проекта `cd /vagrant`
1. Инициализируем новый Git-репозиторий командой `git init`
1. Добавляем удаленный репозиторий

        git remote add origin git@github.com:test-qeep/python-first-project.git`

1. Скачиваем содержимое репозитория командой `git fetch`. Убедитесь, что перед этим вы настроили авторизацию вашего пользователя через SSH в GitHub
1. Устанавливаем связь между ветками `master` локального и удаленного репозитория:

        git branch --track master origin/master
        
1. Обозначаем для локального гит-репозитория, какие файлы у нас должны быть в индексе: `git add .`
        
### Настройка Git-пользователя

1. Ввод данных о себе

        git config --global user.name "My Name"
        git config --global user.email "email@example.com"
        
1. Настройка поведения для `git push`:

        git config --global push.default simple
        
1. Настройка SSH-ключа для доступа к удаленным репозиториям

		ssh-keygen -t rsa -b 4096 -C "email@example.com"
	    
    * `-b 4096` — задает длину ключа в битах. Стандартное значение (если не указывать) для команды ssh-keygen составляет 2048 бит
	* `-C "email@example.com"` — создает комментарий для ключа, который указывает принадлежность ключа пользователю с вашим email
    * В процессе исполнения команды будет предложено ввести пароль. Вводим пароль для ключа, если хотим защитить использование ключа паролем. Дальше нужно будет ввести пароль повторно для подтверждения правильности написания пароля
    * В целях обучения лучше пароль не вводить, чтобы в дальнейшем не вводить его каждый раз, когда будем производить какие-либо действия с репозиторием с использованием ключа
    * Также в процессе создания ключа будет спрашиваться место, куда необходимо сохранить ключ, просто нажмите Enter, тогда подставится значение по-умолчанию.
		
		    eval "$(ssh-agent -s)"
			
		* для того, чтобы запустить ssh-agent и добавить в него наш вновь сгенерированный ключ. 
				ssh-agent позволяет системе использовать RSA-ключи шифрования при подключении к серверам по SSH-протоколу.
		    
		        ssh-add ~/.ssh/id_rsa
		    
			для добавления ключа в ssh-agent
			
1. Копируем в буфер обмена содержимое файла `~/.ssh/id_rsa.pub`. Можно скопировать вручную из терминала вывод команды `cat ~/.ssh/id_rsa.pub`		
1. Заходим в свой аккаунт GitHub и выбираем раздел ["SSH and GPG keys"](https://github.com/settings/keys) в настройках аккаунта
1. Нажимаем **Add SSH Key** и в открытой странице вставляем публичный ключ, который скопировали ранее

### Инструкция по базовой работе с Git

1. `git add` — добавляет файл в индекс
1. `git commit` — создает коммит из всех файлов в индексе
1. `git commit -m "Comment"` — позволяет добавить комментарий к коммиту в командной строке
1. `git push` — залить (запушить) изменения в удаленный репозиторий
1. `git pull` — принять (запуллить) изменения с удаленного репозитория
1. `git clone git@github.com:user/repo-name.git` — склонировать удаленный репозиторий

## Работа с HTML

### Подключение скриптов и стилей

* Скрипты можно подключить с помощью тега `<script>`:

        <script type="text/javascript">
            // Объявляем переменную j и присваиваем ей значение 10
            var j = 10;
            console.log(j);
        </script>

* Стили создаются с помощью тега `<style>`:

        <style>
            h1, h2, h3, h4, h5, h6 {
                background: red;
            }
            .class {
                color: #ba0;
            }
        </style>

### Подключение файлов

* Чтобы подключить файл со скриптом,
необходимо прописать тег `<script>` с атрибутом `src`:

        <script src="/index.js" type="text/javascript"></script>

* Для подключения файла со стилями прописываем
тег `<link>` с аттрибутом `rel="stylesheet"`:

        <link rel="stylesheet" href="index.css">
My Cypress Project

- Описание

Этот проект использует Cypress для тестирования веб-приложений. В репозитории содержатся автотесты для авторизации и других ключевых функций.

- Установка и запуск

Клонируйте репозиторий:

git clone https://github.com/c4fo/my-cypress-project.git
cd my-cypress-project

Установите зависимости:

npm install

Запустите Cypress:

Для открытия GUI:

npx cypress open

Для запуска всех тестов в терминале:

npx cypress run

 - Структура проекта

my-cypress-project/
│-- cypress/
│   ├── e2e/                  # Тестовые файлы
│   ├── fixtures/             # Тестовые данные
│   ├── support/              # Вспомогательные функции
│-- cypress.config.js         # Конфигурация Cypress
│-- package.json              # Зависимости проекта
│-- .gitignore                # Игнорируемые файлы (node_modules)

Контакт телеграм @ovfirevoid

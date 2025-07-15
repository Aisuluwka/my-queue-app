# Система Очереди

Простое приложение на Next.js + TypeScript + Prisma, реализующее систему очереди с возможностью добавления, редактирования и удаления пользователей.

## 🔧 Стек технологий

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- 💾 База данных: SQLite по умолчанию (можно переключить на PostgreSQL через настройки `schema.prisma` и `.env`)
- Tailwind CSS

## 🚀 Возможности

- Отображение очереди из базы данных
- Добавление пользователя в очередь
- Редактирование имени пользователя
- Удаление пользователя из очереди
- API с поддержкой методов `GET`, `POST`, `PUT`, `DELETE`

## 💻 Локальный запуск

1. Клонируй репозиторий:
   ```bash
   git clone https://github.com/ваш-юзернейм/my-queue-app.git
   cd my-queue-app
   ```

## Установка зависимостей

npm install

## Применение миграций и генерация Prisma Client

npx prisma migrate dev --name init
npx prisma generate

## Seeder

npm run seed

## To open the project on the website page

npm run dev

## Browser's page

http://localhost:3000

## Author

Abikenova Aisulu

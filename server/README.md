## Установка и запуск

```bash
# Установка зависимостей
npm install

# Инициализация prisma и запуск миграций
npx prisma generate
npx prisma migrate dev --name init

# Сборка сервера
npm run build

# Запуск сервера
npm start
```

<p style="font-size: small;">PS: Не забудьте переименовать .env.example в .env и запустить PostgreSQL базу.</p>

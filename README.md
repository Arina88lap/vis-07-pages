# Материалы практики

```sh
npm ci
npm run serve
```

Во втором терминале выполните `npm run dev` и откройте `http://127.0.0.1:8407`. В development React запрашивает `/api/items` через прокси Vite и JSON Server.

Для сборки и локального просмотра production выполните следующие команды.

```sh
npm run build
npm run preview
```

Путь приложения определяется из `homepage` в `package.json`. В production React получает [JSON из ветки gh-pages](https://raw.githubusercontent.com/Arina88lap/vis-07-pages/gh-pages/static/db/data.json). Vite включает каталог `public` в `dist`, а скрипт сборки копирует `index.html` в `404.html` для прямых ссылок на клиентские маршруты.

## Публикация

```sh
npm run deploy
```

`predeploy` собирает приложение. `gh-pages` отправляет содержимое `dist` в ветку `gh-pages` на `origin`. В настройках GitHub Pages выбраны **Deploy from a branch**, ветка **gh-pages** и каталог **/ (root)**. Готовый сайт доступен по адресу `https://arina88lap.github.io/vis-07-pages/`.

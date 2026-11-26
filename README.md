# React и GitHub Pages

Практическая работа № 7. Арина.

```sh
npm ci
npm run serve
```

Во втором терминале запустите `npm start`. JSON Server отвечает на `http://localhost:3001/api/data`. React на `http://localhost:3000` получает данные и выводит `Hello world`.

## Публикация

```sh
npm run deploy
```

После сборки скрипт копирует JSON в `build/static/db/data.json` и создаёт `build/404.html`. Пакет `gh-pages` публикует каталог `build` в ветку `gh-pages`. На GitHub Pages выбран корень этой ветки. В production React читает JSON из этой ветки по прямому адресу.

[Опубликованное приложение](https://arina88lap.github.io/vis-07-pages/)

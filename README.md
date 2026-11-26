# Материалы практики

```sh
npm ci
npm run serve
```

Во втором терминале выполните `npm run dev` и откройте `http://127.0.0.1:8407`. В dev React читает `/api/items` через прокси Vite и JSON Server. Продакшен-сборка читает `static/db/data.json` из собственного каталога сайта.

```sh
VIS_BASE_PATH=/vis-07-pages/ npm run build
VIS_BASE_PATH=/vis-07-pages/ npm run preview
```

Для публикации через workflow выберите **GitHub Actions** в настройках Pages и запустите `Publish GitHub Pages` с ветки `main` или отправьте новый коммит в `main`. Workflow определяет путь сайта, собирает и загружает статический артефакт, затем публикует его. Итоговый URL появится в окружении `github-pages` после успешного завершения. Для режима с веткой `gh-pages` выполните `VIS_BASE_PATH=/vis-07-pages/ npm run deploy` с настроенным `origin`, затем выберите ветку `gh-pages` и каталог `/ (root)` в настройках Pages. Выберите один способ публикации. При другом имени репозитория измените путь `VIS_BASE_PATH` в ручных командах. `404.html` входит в сборку для прямых ссылок на клиентские маршруты.

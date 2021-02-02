# vue-ts-test

[>>> FREE ONLINE DEMO <<<](https://epic-lumiere-64e290.netlify.app/).

JSON загружается из public/hotels.json | public/hotel.json

Вместо POST-запроса форма отправляет GET

Стор без декораторов, все решения которые пробовал ломают типизацию и тайпхант IDE. Экшн всё равно диспатчится через строку, нужно чуть больше времени или Vue 3 + Vuex 4.

Компоненты в components не используют стор.

Вьюхи реагируют на лайфцикл-хуки и события из компонентов, дергают экшены, читают стор.

`public/_redirects` — настройка netlify для SPA-маршрутизации

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

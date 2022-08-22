# Vue Simple Notify

[![NPM version](https://img.shields.io/npm/v/vue-simple-notify.svg)](https://www.npmjs.com/package/vue-simple-notify)
[![License](https://img.shields.io/badge/License-MIT-9b59b6.svg)](LICENSE)

[English version](README.md)

Un sencillo componente para creación de notificaciones con Vue.js.

<p align="center">
  <a href="https://josantonius.github.io/vue-simple-notify/" title="Vue Simple Notify">
    <img src="https://josantonius.github.io/vue-simple-notify/static/vue-simple-notify.gif">
  </a>
</p>

---

- [Demo](#demo)
- [Inicio rápido](#inicio-rápido)
- [Ejemplos](#ejemplos)
- [Props](#props)
- [Eventos](#eventos)
- [Métodos](#métodos)
- [Tests](#tests)
- [Patrocinar](#patrocinar)
- [Licencia](#licencia)

---

## Demo

[GitHub](https://josantonius.github.io/vue-simple-notify/)

[CodePen](https://codepen.io/Josantonius/pen/PQoxXd/)

## Inicio rápido

### NPM

Instalar el paquete:

    npm install vue-simple-notify

Registrar el componente:

```js
import Vue from 'vue'
import VueSimpleNotify from 'VueSimpleNotify'

Vue.component('VueSimpleNotify', VueSimpleNotify)
```

Usar el componente:

```html
<vue-simple-notify :items="[]"></vue-simple-notify>
```

### CDN

Include styles:

```html
<link href="https://unpkg.com/vue-simple-notify/dist/vue-simple-notify.min.css">
```

Include scripts:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-simple-notify/dist/vue-simple-notify.min.js"></script>
```

Registrar el componente:

```js
Vue.component('VueSimpleNotify', VueSimpleNotify.VueSimpleNotify)
```

Usar el componente:

```html
<vue-simple-notify :items="[]"></vue-simple-notify>
```

## Ejemplos

Ejemplos de uso para este componente:

### - Usando [CDN](#cdn)

```html
<!DOCTYPE html>
<html>

  <head>
    <link href="https://unpkg.com/vue-simple-notify/dist/vue-simple-notify.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  </head>

  <body>

    <div id="app">
      <vue-simple-notify :items="[]"></vue-simple-notify>
    </div>
    
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-simple-notify/dist/vue-simple-notify.min.js"></script>

    <script>
      Vue.component('VueSimpleNotify', VueSimpleNotify.VueSimpleNotify)
      new Vue().$mount('#app')
    </script>

  </body>

</html>
```

### - Agregando [notificaciones](#items)

```html
<vue-simple-notify
  :items="items"
></vue-simple-notify>
```

```js
new Vue({
  el: '#app',
  components: { VueSimpleNotify },
  data () {
    return {
      items: [
        {
          message: 'ejemplo de mensaje de error.'
        },
        {
          type: 'Success',
          color: '#2ecc71',
          dismissable: false,
          message: 'ejemplo de mensaje de éxito.'
        }
      ]
    }
  }
})
```

### - Ajustando [retraso](#delay) entre notificaciones

```html
<vue-simple-notify
  :items="items"
  :delay="delay"
></vue-simple-notify>
```

```js
new Vue({
  el: '#app',
  components: { VueSimpleNotify },
  data () {
    return {
      items: [{}, {}, {}],
      delay: 1000
    }
  }
})
```

### - Escuchando el evento [@onDismiss](#ondismiss)

```html
<vue-simple-notify
  :items="items"
  @onDismiss="onDismiss"
></vue-simple-notify>
```

```js
new Vue({
  el: '#app',
  components: { VueSimpleNotify },
  data () {
    return {
      items: [{}]
    }
  },
  methods: {
    onDismiss: function onDismiss (index) {
      console.log(index)
    }
  }
})
```

### - [Eliminando](#dismiss) notificaciones desde el componente

```html
<vue-simple-notify
  :items="items"
  ref="vsn"
></vue-simple-notify>
```

```js
const vueSimpleNotify = new Vue({
  el: '#app',
  components: { VueSimpleNotify },
  data () {
    return {
      items: [{}, {}, {}]
    }
  }
}).$refs.vsn

vueSimpleNotify.dismiss(1)
```

### - [Eliminando](#clear) todas las notificaciones

```html
<vue-simple-notify
  :items="items"
  ref="vsn"
></vue-simple-notify>
```

```js
const vueSimpleNotify = new Vue({
  el: '#app',
  components: { VueSimpleNotify },
  data () {
    return {
      items: [{}, {}, {}]
    }
  }
}).$refs.vsn

vueSimpleNotify.clear()
```

## Props

Props disponibles en este componente:

### :items

Descripción: Array con notificaciones.

Tipo: `Array`

Requerido: `true`

Por defecto: `null`

```html
<vue-simple-notify :items="[]">
```

### :delay

Descripción: Intervalo de tiempo entre notificaciones.

Tipo: `Number`

Por defecto: `500`

```html
<vue-simple-notify :items="[]" :delay="1000">
```

## Eventos

Eventos disponibles en este componente:

### @onDismiss

Se activa cada vez que se descarta una notificación.

```js
onDismiss: function onDismiss (index) { }
```

| Atributo | Tipo | Descripción
| --- | --- | --- |
| index | `Number` | Índice de la notificación.

```html
<vue-simple-notify :items="[]" :delay="1000" @onDismiss="onDismiss">
```

## Métodos

Métodos disponibles en este componente:

### dismiss

Descarta una notificación a través de su índice.

```js
vueSimpleNotify.dismiss(index)
```

| Atributo | Tipo | Descripción | Requerido
| --- | --- | --- | --- |
| index | `Number` | Índice de la notificación. | `true`

### clear

Borrar todas las notificaciones.

```js
vueSimpleNotify.clear()
```

## Tests

Clonar el repositorio:

    git clone https://github.com/Josantonius/vue-simple-notify.git vue-simple-notify

Ir al directorio:

    cd vue-simple-notify

Instalar dependencias:

    npm install

Ejecutar [pruebas unitarias](test):

    npm run test

Ejecutar [ESLint](https://eslint.org/) para validar que el estilo de código es compatible con el [Standar JavaScript](https://standardjs.com/):

    npm run lint

Ejecutar [serve](docs) con recarga en caliente:

    npm run dev

Montar [distribución](dist) con minificación:

    npm run bundle

Montar [demo](docs) para producción con minificación:

    npm run build

Ejecutar todo lo anterior:

    npm run finish

## Patrocinar

Si este proyecto te ayuda a reducir el tiempo de desarrollo,
[puedes patrocinarme](https://github.com/josantonius/lang/es-ES/README.md#patrocinar)
para apoyar mi trabajo :blush:

## Licencia

Este repositorio tiene una licencia [MIT License](LICENSE).

Copyright © 2018-2022, [Josantonius](https://github.com/josantonius/lang/es-ES/README.md#contacto)

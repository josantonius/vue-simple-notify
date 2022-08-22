# Vue Simple Notify

[![NPM version](https://img.shields.io/npm/v/vue-simple-notify.svg)](https://www.npmjs.com/package/vue-simple-notify)
[![License](https://img.shields.io/badge/License-MIT-9b59b6.svg)](LICENSE)

[Versión en español](README-ES.md)

Simple notify handler component for Vue.js.

<p align="center">
  <a href="https://josantonius.github.io/vue-simple-notify/" title="Vue Simple Notify">
    <img src="https://josantonius.github.io/vue-simple-notify/static/vue-simple-notify.gif">
  </a>
</p>

---

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Examples](#examples)
- [Props](#props)
- [Events](#events)
- [Methods](#methods)
- [Tests](#tests)
- [Sponsor](#Sponsor)
- [License](#license)

---

## Demo

[GitHub](https://josantonius.github.io/vue-simple-notify/)

[CodePen](https://codepen.io/Josantonius/pen/PQoxXd/)

## Quick Start

### NPM

Install the package:

    npm install vue-simple-notify

Register the component:

```js
import Vue from 'vue'
import VueSimpleNotify from 'VueSimpleNotify'

Vue.component('VueSimpleNotify', VueSimpleNotify)
```

Use the component:

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

Register the component:

```js
Vue.component('VueSimpleNotify', VueSimpleNotify.VueSimpleNotify)
```

Use the component:

```html
<vue-simple-notify :items="[]"></vue-simple-notify>
```

## Examples

Examples of use for this component:

### - Using [CDN](#cdn)

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

### - Adding [items](#items)

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
          message: 'example of error message.'
        },
        {
          type: 'Success',
          color: '#2ecc71',
          dismissable: false,
          message: 'example of success message.'
        }
      ]
    }
  }
})
```

### - Setting the [delay](#delay) between notifications

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

### - Listening to the [@onDismiss](#ondismiss) event

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

### - [Removing](#dismiss) items from the component

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

### - [Removing](#clear) all elements

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

Available props in this component:

### :items

Description: Notifications array.

Type: `Array`

Required: `true`

Default: `null`

```html
<vue-simple-notify :items="[]">
```

### :delay

Description: Time interval between notifications when displayed.

Type: `Number`

Default: `500`

```html
<vue-simple-notify :items="[]" :delay="1000">
```

## Events

Available events in this component:

### @onDismiss

It is triggered each time a notification is dismissed.

```js
onDismiss: function onDismiss (index) { }
```

| Attribute | Type | Description
| --- | --- | --- |
| index | `Number` | Notification index.

```html
<vue-simple-notify :items="[]" :delay="1000" @onDismiss="onDismiss">
```

## Methods

Available methods in this component:

### dismiss

Dismiss a notification by a index.

```js
vueSimpleNotify.dismiss(index)
```

| Attribute | Type | Description | Required
| --- | --- | --- | --- |
| index | `Number` | Notification index. | `true`

### clear

Clear all notifications.

```js
vueSimpleNotify.clear()
```

## Tests

Clone the repository:

    git clone https://github.com/Josantonius/vue-simple-notify.git vue-simple-notify

Go to the directory:

    cd vue-simple-notify

Install dependencies:

    npm install

Run [unit tests](test):

    npm run test

Run [ESLint](https://eslint.org/) to ensure that code style is compatible with [Standar JavaScript](https://standardjs.com/):

    npm run lint

Run [serve](docs) with hot reload:

    npm run dev

Build [distribution](dist) with minification:

    npm run bundle

Build [demo](docs) for production with minification:

    npm run build

Run all the above:

    npm run finish

## Sponsor

If this project helps you to reduce your development time,
[you can sponsor me](https://github.com/josantonius#sponsor) to support my open source work :blush:

## License

This repository is licensed under the [MIT License](LICENSE).

Copyright © 2018-2022, [Josantonius](https://github.com/josantonius#contact)

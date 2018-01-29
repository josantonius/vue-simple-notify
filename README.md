# Vue Simple Notify

[![NPM version](https://img.shields.io/npm/v/vue-simple-notify.svg)](https://www.npmjs.com/package/vue-simple-notify.svg) [![cdnjs](https://img.shields.io/cdnjs/v/vue-simple-notify.svg)](https://img.shields.io/cdnjs/v/vue-simple-notify.svg) ![VueJS v2.x compatible](https://img.shields.io/badge/vue%202.x-compatible-green.svg)  [![License](https://img.shields.io/badge/License-MIT-9b59b6.svg)](LICENSE)  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e51e4c06b0b54ce493454d4f895a3ef3)](https://www.codacy.com/app/Josantonius/vue-simple-notify?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Josantonius/vue-simple-notify&amp;utm_campaign=Badge_Grade) [![Travis](https://travis-ci.org/Josantonius/vue-simple-notify.svg)](https://travis-ci.org/Josantonius/vue-simple-notify) [![ Standard](https://img.shields.io/badge/js-standard-1abc9c.svg)](https://standardjs.com/) [![CodeCov](https://codecov.io/gh/Josantonius/vue-simple-notify/branch/master/graph/badge.svg)](https://codecov.io/gh/Josantonius/vue-simple-notify) [![No Dependencies](https://img.shields.io/gemnasium/Josantonius/vue-simple-notify.svg?style=flat-square)

[Versión en español](README-ES.md)

Simple notify handler component for Vue.js

---

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Examples](#examples)
- [Props](#props)
- [Events](#events)
- [Methods](#methods)
- [Tests](#tests)
- [TODO](#-todo)
- [Contribute](#contribute)
- [License](#license)
- [Copyright](#copyright)

---

**Features**

- AJAX Support
- +95% Test Coverage
- ~4kb minified with CSS
- Zero dependencies

## Demo

<p align="center">
  <a href="https://josantonius.github.io/vue-simple-notify/" title="Vue Simple Notify">
    <img src="https://github.com/Josantonius/vue-simple-notify/vue-simple-notify.gif">
  </a>
</p>

[GitHub](https://josantonius.github.io/vue-simple-notify/)
[Codepen](https://josantonius.github.io/vue-simple-notify/)

## Quick Start

### NPM

**Install** the package:

    $ npm install vue-simple-notify

**Register** the component:

```js
import Vue from 'vue'
import VueSimpleNotify from 'VueSimpleNotify'

Vue.component('VueSimpleNotify', VueSimpleNotify)
```

**Use** the component:

```html
<vue-simple-notify
  :items="[{
    type: 'Success',
    color: '#2ecc71',
    message: 'Hello world'
  }]"
></vue-simple-notify>
```

### CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Include vue-simple-notify.min.css -->
    <link href="https://unpkg.com/vue-simple-notify/dist/vue-simple-notify.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  </head>
  <body>
    <div id="app">
      <!-- Use the component -->
      <vue-simple-notify
        :items="[{
          type: 'Success',
          color: '#2ecc71',
          message: 'Hello world'
        }]"
      ></vue-simple-notify>
    </div>
    <!-- Include vue.js -->
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <!-- Include vue-simple-notify.min.js -->
    <script src="https://unpkg.com/vue-simple-notify/dist/vue-simple-notify.min.js"></script>
    <script>
      /* Register the component */
      Vue.component('VueSimpleNotify', VueSimpleNotify.VueSimpleNotify)
      /* Mount the app */
      new Vue().$mount('#app')
    </script>
  </body>
</html>
```

## Examples

Examples of use for this component:

### - Adding `[items](:items)`:

```html
<vue-simple-notify
  :items="items
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

### - Setting the `[delay](:delay)` between notifications:

```html
<vue-simple-notify
  :items="items
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

### - Listening to the `[@onDismiss](@onDismiss)` event:

```html
<vue-simple-notify
  :items="items
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

### - `[Removing](dismiss)` items from the component.

```html
<vue-simple-notify
  :items="items
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

### - `[Clearing](clear)` all elements.

```html
<vue-simple-notify
  :items="items
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

### :items

Type: `Array`
Required: `true`
Default: null

Notifications array.

```html
<vue-simple-notify :items="[]">
```

### :delay

Type: `Number`
Default: `500`

Time interval between notifications when displayed.

```html
<vue-simple-notify :items="[]" :delay="1000">
```

## Events

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

### dismiss

Dismiss a notification by a index.

```js
vueSimpleNotify.dismiss(0)
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

    $ git clone https://github.com/Josantonius/vue-simple-notify.git vue-simple-notify

Go to the directory:

    $ cd vue-simple-notify

Install dependencies:

    $ npm install

Run [unit tests](tests):

    $ npm run test

Run [ESLint](https://eslint.org/) to ensure that code style is compatible with [Standar JavaScript](https://standardjs.com/):

    $ npm run lint

Run serve with hot reload:

    $ npm run dev

Build distribution with minification:

    $ npm run bundle

Build [demo](docs) for production with minification:

    $ npm run build

Run all the above:

    $ npm run finish

## ☑ TODO

- [ ] Add new feature.
- [ ] Improve tests.
- [ ] Improve documentation.

## Contribute

If you would like to help, please take a look at the list of
[issues](https://github.com/Josantonius/vue-simple-notify/issues) or the [To Do](#-todo) checklist.

**Pull requests**

* [Fork and clone](https://help.github.com/articles/fork-a-repo).
* Run the command `composer install` to install the dependencies.
  This will also install the [dev dependencies](https://getcomposer.org/doc/03-cli.md#install).
* Run the [tests](#tests).
* Create a **branch**, **commit**, **push** and send me a
  [pull request](https://help.github.com/articles/using-pull-requests).

## License

This project is licensed under **MIT license**. See the [LICENSE](LICENSE) file for more info.

## Copyright

2018 Josantonius, [josantonius.com](https://josantonius.com/)

If you find it useful, let me know :wink:

You can contact me on [Twitter](https://twitter.com/Josantonius) or through my [email](mailto:hello@josantonius.com).
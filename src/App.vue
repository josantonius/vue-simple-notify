<script>
/**
 * A simple Vue component for notifications handling.
 *
 * @author    Josantonius <hello@josantonius.com>
 * @copyright 2018 (c) Josantonius - Vue Simple Notify
 * @license   https://opensource.org/licenses/MIT - The MIT License (MIT)
 * @link      https://github.com/josantonius/vue-simple-notify
 * @since     1.0.0
 */
import VueSimpleNotify from './components/VueSimpleNotify'

export default {

  name: 'App',
  components:
  {
    VueSimpleNotify
  },
  data () {
    return {
      notifications: [
        {
          message: 'example of error message.'
        },
        {
          type: 'Success',
          color: '#2ecc71',
          dismissable: false,
          message: 'example of success message.'
        },
        {
          type: 'Warning',
          color: '#e67e22',
          message: 'example of warning message.'
        },
        {
          type: 'Info',
          color: '#3498db',
          dismissable: false,
          message: 'example of info message.'
        },
        {
          type: 'Custom',
          color: '#9E9E9E',
          dismissable: true,
          message: 'example of custom message.'
        }
      ]
    }
  },
  methods: {
    onDismiss: function onDismiss (index) {
      console.log(index)
    }
  }
}
</script>

<template>
  <div id="app">
    <vue-simple-notify
      :delay="600"
      :items="notifications"
      @onDismiss="onDismiss"
    ></vue-simple-notify>
  </div>
</template>

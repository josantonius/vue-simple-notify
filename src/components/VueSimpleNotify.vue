<template>
  <transition-group id="vue-simple-notify" name="veh-list" tag="div">
    <div
      v-for="notification in notifications"
      :key="notification.index"
    >
      <div
        :style="{ color: notification.color }"
        class="veh-notify"
      >
        <div
          @click="dismiss(notification.index)"
          v-if="notification.dismissable"
          class="veh-dismissable">&#10005;
        </div>
          <p>
            <span class="veh-type">{{ notification.type }}:</span>
            <span class="veh-message">{{ notification.message }}</span>
          </p>
        </div>
      </div>
  </transition-group>
</template>

<script>

'use strict'

export default {

  name: 'VueSimpleNotify',

  props:
  {
    /**
     * Notifications array.
     * @default null
     * @type {Array}
     */
    items: {
      type: Array,
      default: null,
      required: true
    },

    /**
     * Time interval between notifications when displayed.
     * @default 500
     * @type {Number}
     */
    delay: {
      type: Number,
      default: 500
    }
  },

  data () {
    return {
      notifications: []
    }
  },

  mounted: function mounted () {
    this.normalizeParams()
    this.display(this)
  },

  methods:
  {
    /**
     * Normalize parameters by adding optional parameters.
     */
    normalizeParams: function normalizeParams () {
      this.items.map(function (obj, index) {
        obj.index = index
        obj.dismissable = typeof obj.dismissable !== 'undefined' ? obj.dismissable : true
        obj.type = typeof obj.type !== 'undefined' ? obj.type : 'Error'
        obj.color = typeof obj.color !== 'undefined' ? obj.color : '#dc3232'
        obj.message = typeof obj.message !== 'undefined' ? obj.message : ''
        return obj
      })
    },

    /**
     * Normalize parameters by adding optional parameters.
     */
    display: function display (self) {
      this.clear()
      this.items.forEach(function (element, index) {
        setTimeout(() => {
          self.notifications.push(element)
        }, self.delay * index + 1)
      })
    },

    /**
     * Dismiss notification.
     */
    dismiss: function dismiss (index) {
      this.notifications.splice(index, 1)
      this.$emit('onDismiss', index)
    },

    /**
     * Clear all notifications.
     */
    clear: function clear () {
      this.notifications = []
    }
  },
  watch:
  {
    items: function items () {
      this.normalizeParams()
    }
  }
}
</script>

<style>
#vue-simple-notify .veh-notify {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: #fff;
  border-left: 4px solid;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: 18px 15px 2px;
  padding: 1px 12px
}

#vue-simple-notify .veh-dismissable {
  float: right;
  font-family: inherit;
  font-weight: 600;
  margin: 0px -10px 0 0;
  padding: 4px;
  font-size: 12px;
  color: rgba(100, 100, 100, 0.42);
  cursor: pointer;
}

#vue-simple-notify .veh-dismissable:hover {
  color: rgb(100, 100, 100);
}

#vue-simple-notify .veh-type {
  font-weight: 600;
  color: #2c3e50;
}

#vue-simple-notify .veh-message {
  font-weight: 400;
  color: #2c3e50;
}

#vue-simple-notify .veh-list-enter-active, .veh-list-leave-active {
  transition: all .5s;
}

#vue-simple-notify .veh-list-enter, .veh-list-leave-to {
  opacity: 0;
  transform: translateX(-90px);
}
</style>

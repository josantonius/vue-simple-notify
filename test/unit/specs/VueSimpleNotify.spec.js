'use strict'

import Vue from 'vue/dist/vue.js'
import VueSimpleNotify from '@/components/VueSimpleNotify'

jest.useFakeTimers()

describe('VueSimpleNotify.vue', () => {
  describe(':props', () => {
    describe(':items', () => {
      it('should support an empty array', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: []
            }
          }
        }).$mount()

        const component = vm.$children[0]
        jest.advanceTimersByTime(1)
        expect(component.notifications).toEqual([])
      })
      it('should run a setTimeout for each notification', () => {
        new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [{}, {}]
            }
          }
        }).$mount()

        expect(setTimeout).toHaveBeenCalledTimes(2)
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 501)
      })
      it('should fill in the fields that are not included in each notification by default fields', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [
                {
                  type: 'Error'
                },
                {
                  type: 'Success',
                  color: '#2ecc71',
                  message: 'Example of success message.'
                },
                {
                  color: '#dc3232',
                  dismissable: false,
                  message: 'example of error message.'
                },
                {
                  type: 'Info',
                  color: '#3498db',
                  dismissable: false
                }
              ]
            }
          }
        }).$mount()

        const component = vm.$children[0]
        jest.advanceTimersByTime(1501)
        expect(component.notifications.length).toEqual(4)
        expect(component.notifications[0].color).toEqual('#dc3232')
        expect(component.notifications[1].dismissable).toEqual(true)
        expect(component.notifications[2].type).toEqual('Error')
        expect(component.notifications[3].message).toEqual('')
      })
      it('should create default fields for the notification if an empty object is sent', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [{}]
            }
          }
        }).$mount()

        const component = vm.$children[0]
        jest.advanceTimersByTime(1)
        expect(component.notifications.length).toEqual(1)
        expect(component.notifications[0].index).toEqual(0)
        expect(component.notifications[0].type).toEqual('Error')
        expect(component.notifications[0].color).toEqual('#dc3232')
        expect(component.notifications[0].message).toEqual('')
        expect(component.notifications[0].dismissable).toEqual(true)
      })
      it('should prioritize custom parameters over default parameters', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [
                {
                  type: 'Error',
                  color: '#dc3232',
                  dismissable: false,
                  message: 'Example of error message.'
                },
                {
                  type: 'Success',
                  color: '#2ecc71',
                  dismissable: false,
                  message: 'Example of success message.'
                },
                {
                  type: 'Warning',
                  color: '#e67e22',
                  dismissable: false,
                  message: 'example of warning message.'
                },
                {
                  type: 'Info',
                  color: '#3498db',
                  dismissable: false,
                  message: 'example of info message.'
                }
              ]
            }
          }
        }).$mount()

        const component = vm.$children[0]
        jest.advanceTimersByTime(1501)
        expect(component.notifications.length).toEqual(4)
        expect(component.notifications[0].color).toEqual('#dc3232')
        expect(component.notifications[1].dismissable).toEqual(false)
        expect(component.notifications[2].type).toEqual('Warning')
        expect(component.notifications[3].message).toEqual('example of info message.')
      })
    })
    describe(':delay', () => {
      it('should be set to 500 by default', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: []
            }
          }
        }).$mount()

        const component = vm.$children[0]

        expect(component.delay).toEqual(500)
      })
      it('should prioritize custom delay over default delay', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items"
              :delay="delay">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [],
              delay: 800
            }
          }
        }).$mount()

        const component = vm.$children[0]
        expect(component.delay).toEqual(800)
      })
    })
  })
  describe('#methods', () => {
    describe('#dismiss()', () => {
      it('should remove the array item when it is dismissed', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [{}, {}, {}, {}, {}]
            }
          }
        }).$mount()

        const component = vm.$children[0]
        jest.advanceTimersByTime(2501)
        expect(component.notifications.length).toEqual(5)
        expect(component.notifications[0].index).toEqual(0)
        component.dismiss(0)
        expect(component.notifications[0].index).toEqual(1)
        component.dismiss(0)
        component.dismiss(0)
        expect(component.notifications[0].index).toEqual(3)
        expect(component.notifications.length).toEqual(2)
      })
    })
    describe('#clear()', () => {
      it('should clean all notifications', () => {
        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [{}, {}, {}, {}, {}]
            }
          }
        }).$mount()

        const component = vm.$children[0]
        jest.advanceTimersByTime(2501)
        expect(component.notifications.length).toEqual(5)
        component.clear()
        expect(component.notifications).toEqual([])
      })
    })
  })
  describe('@events', () => {
    describe('@onDismiss', () => {
      it('should be issued every time a notification is dismissed', () => {
        let ifDismiss = null

        const vm = new Vue({
          template: `
            <div><vue-simple-notify
              :items="items"
              @onDismiss="onDismiss">
            </vue-simple-notify></div>
          `,
          components: { VueSimpleNotify },
          data () {
            return {
              items: [{}]
            }
          },
          methods: {
            onDismiss: function onDismiss (index) {
              ifDismiss = index
            }
          }
        }).$mount()

        const component = vm.$children[0]
        jest.advanceTimersByTime(1)
        expect(component.notifications.length).toEqual(1)
        component.dismiss(0)
        expect(ifDismiss).toEqual(0)
      })
    })
  })
})

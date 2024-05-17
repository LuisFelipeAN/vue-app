import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { describe, expect, test } from 'vitest'

describe('HelloWorld component', () => {
    test('renders correct message to viewer', () => {
        const msg = 'Something happened, try again'
        const wrapper = mount(HelloWorld, {
          props: { msg }
        })
        expect(wrapper.find('h1').text()).toBe(msg)
    })

    test('emits event when close button is clicked', async () => {
        const msg = 'Something happened, try again'
        const wrapper = mount(HelloWorld, {
            props: { msg }
        })
        expect(wrapper.find('button').text()).toBe('count is 0')
        const incrementButton = wrapper.find('button')
        await incrementButton.trigger('click')
        expect(wrapper.find('button').text()).toBe('count is 1')
    })
})
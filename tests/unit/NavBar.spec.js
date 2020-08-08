// /* global describe, it, expect */

import { mount } from '@vue/test-utils'
import localVue from './localVue'
import NavBar from '@/components/NavBar.vue'
import Btn from '@/components/Btn.vue'

describe('NavBar.vue', () => {
  it('should render no button when the `btnLabel` prop is not passed', () => {
    const wrapper = mount(NavBar, { localVue })
    const btnCount = wrapper.findAllComponents(Btn).length
    expect(btnCount).toBe(0)
  })

  it('should render a button when the `btnLabel` prop is passed', () => {
    const wrapper = mount(NavBar, {
      localVue,
      propsData: {
        btnLabel: 'Click Me'
      }
    })
    const btnCount = wrapper.findAllComponents(Btn).length
    expect(btnCount).toBe(1)
  })
})

// /* global describe, it, expect */

import { shallowMount } from '@vue/test-utils'
import SideBar from '@/components/SideBar.vue'

describe('SideBar.vue', () => {
  it('should render 0 links when the `links` prop is not passed', () => {
    const wrapper = shallowMount(SideBar)
    const linkCount = wrapper.findAll('.sidebar-item').length
    expect(linkCount).toBe(0)
  })

  it('should render 4 links when the `links` prop is passed an array with 4 elements', () => {
    const wrapper = shallowMount(SideBar, {
      propsData: {
        links: ['1', '2', '3', '4']
      }
    })
    const linkCount = wrapper.findAll('.sidebar-item').length
    expect(linkCount).toBe(4)
  })
})

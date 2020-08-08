/* global describe, it, expect */

import { shallowMount } from '@vue/test-utils'
import BgImgContainer from '@/components/BgImgContainer.vue'

describe('BgImgContainer.vue', () => {
  it('should render the default slot when passed', () => {
    const content = '<span>I have an image background!</span>'
    const wrapper = shallowMount(BgImgContainer, {
      slots: { default: content }
    })
    expect(wrapper.html()).toMatch(content)
  })

  it('should change the style attribute: `backgroundColor` to `blue` when `bgColor` prop is `blue`', () => {
    const wrapper = shallowMount(BgImgContainer, {
      propsData: {
        bgColor: 'blue'
      }
    })
    expect(wrapper.attributes().style).toContain('background-color: blue')
  })
})

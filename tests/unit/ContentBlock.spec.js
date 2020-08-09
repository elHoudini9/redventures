// /* global describe, it, expect */

import { shallowMount } from '@vue/test-utils'
import ContentBlock from '@/components/ContentBlock.vue'

describe('ContentBlock.vue', () => {
  it('should render the default slot when passed', () => {
    const content = '<span>I have an image background!</span>'
    const wrapper = shallowMount(ContentBlock, {
      slots: { default: content }
    })
    expect(wrapper.html()).toMatch(content)
  })

  it('should render the header slot when passed', () => {
    const header = '<h1>Important Title</h1>'
    const wrapper = shallowMount(ContentBlock, {
      slots: { header }
    })
    expect(wrapper.html()).toMatch(header)
  })

  it('should render the action slot when passed', () => {
    const action = '<button>Click Me!</button>'
    const wrapper = shallowMount(ContentBlock, {
      slots: { action }
    })
    expect(wrapper.html()).toMatch(action)
  })

  it('should have a `marginTop` of 4px on the content div if the `size` prop is set to `small`', () => {
    const wrapper = shallowMount(ContentBlock, {
      propsData: { size: 'small' }
    })
    const contentStyle = wrapper.find('#content').attributes().style
    expect(contentStyle).toContain('margin-top: 4px')
  })

  it('should have a `marginTop` of 12px on the content div if the `size` prop is set to `large`', () => {
    const wrapper = shallowMount(ContentBlock, {
      propsData: { size: 'large' }
    })
    const contentStyle = wrapper.find('#content').attributes().style
    expect(contentStyle).toContain('margin-top: 12px')
  })

  it('should have apply the `headerClass` prop to the header div', () => {
    const wrapper = shallowMount(ContentBlock, {
      propsData: { headerClass: 'header' }
    })
    const contentClass = wrapper.find('#header').classes()
    expect(contentClass).toContain('header')
  })
})

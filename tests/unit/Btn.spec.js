// /* global describe, it, expect */

import { shallowMount } from '@vue/test-utils'
import Btn from '@/components/Btn.vue'

describe('Btn.vue', () => {
  it('should render the default slot when passed', () => {
    const label = 'Click Me!'
    const wrapper = shallowMount(Btn, {
      slots: { default: label }
    })
    expect(wrapper.html()).toMatch(label)
  })

  it("should use the 'primary' flavor if an invalid flavor is passed", () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        flavor: 'watermelon'
      }
    })
    expect(wrapper.classes()).toContain('primary')
  })

  it("should use the 'ghost' flavor when passed 'ghost' in the `flavor` prop", () => {
    const wrapper = shallowMount(Btn, {
      propsData: {
        flavor: 'ghost'
      }
    })
    expect(wrapper.classes()).toContain('ghost')
  })
})

// /* global describe, it, expect */

import { shallowMount } from '@vue/test-utils'
import localVue from './localVue'
import Carousel from '@/components/Carousel.vue'

describe('Carousel.vue', () => {
  it('should render 0 slides when the `images` array prop contains 0 elements', () => {
    const wrapper = shallowMount(Carousel, {
      localVue
    })

    const slidesCount = wrapper.findAll('b-carousel-slide-stub').length

    expect(slidesCount).toBe(0)
  })

  it('should render 3 slides when the `images` array prop contains 3 elements', () => {
    const wrapper = shallowMount(Carousel, {
      localVue,
      propsData: {
        images: ['img1', 'img2', 'img3']
      }
    })

    const slidesCount = wrapper.findAll('b-carousel-slide-stub').length

    expect(slidesCount).toBe(3)
  })

  it('should render 7 slides when the `images` array prop contains 7 elements', () => {
    const wrapper = shallowMount(Carousel, {
      localVue,
      propsData: {
        images: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7']
      }
    })

    const slidesCount = wrapper.findAll('b-carousel-slide-stub').length

    expect(slidesCount).toBe(7)
  })
})

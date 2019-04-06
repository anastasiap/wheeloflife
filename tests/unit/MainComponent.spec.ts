import App from '@/App.vue'
import MainContainer from '@/components/MainContainer.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

describe('MainComponent.vue', () => {
    const localVue = createLocalVue()

    // test('should mount for testing', () => {
    //   expect(1).toEqual(1)
    // })

    // test('sum method should add number together', () => {
    //   const wrapper = shallowMount(MainContainer, { localVue })
    //   expect(wrapper.vm as any).sum(1, 1).toEqual('3')
    // })

    // test('Data should say', () => {
    //   expect(typeof MainContainer.data).toBe('function')
    //   const defaultData = MainContainer.data()
    //   expect(defaultData.msg).toBe('hello!')
    // })
})

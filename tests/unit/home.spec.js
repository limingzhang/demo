import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  Vue.prototype.$bus = new Vue()
  Vue.prototype.$bus.loadHistory = []
  const wrapper = mount(Home)
  const vm = wrapper.vm

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<h1>Github API List</h1>')
  })

  it('renders the correct markup', async () => {
    await vm.getGithubApiData()
    expect(vm.$bus.loadHistory.length).toBe(1)
  })
})

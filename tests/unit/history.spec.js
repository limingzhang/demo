import Vue from 'vue'
import { mount } from '@vue/test-utils'
import History from '@/views/History.vue'

describe('History.vue', () => {
  Vue.prototype.$bus = new Vue()
  const wrapper = mount(History)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<h1>Load History</h1>')
  })

  it('renders the correct table', async () => {
    await wrapper.setData({
      loadHistory: [{
        startTime: '1	November 22nd 2020, 4:47:45 pm',
        status: 'success',
        loadTime: '20'
      }]
    })
    await expect(wrapper.html()).toContain('<td>1</td>')
  })
})

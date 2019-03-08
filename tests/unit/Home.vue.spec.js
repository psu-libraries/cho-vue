import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home', () => {

  const wrapper = shallowMount(Home)

  it('renders the search form', () => {
    expect(wrapper.find('.hello').text()).toBe('')
  })

})

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Header from './header'

describe('<Header />', () => {
  const wrapper = shallow(<Header />)

  it('should be true', () => {
    expect(wrapper.find('h1').exists()).toBe(true)
  })
})

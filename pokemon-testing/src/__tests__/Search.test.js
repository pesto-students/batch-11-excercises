import React from 'react'
import { shallow } from 'enzyme';

import Search from '../components/Search';

describe('<Search />', () => {
  it('renders the Search component', () => {
    const props = {
      onChange: jest.fn(),
    }
    const wrapper = shallow(<Search {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onChange when user search for a pokemon', () => {
    const props = {
      onChange: jest.fn(),
    }
    const wrapper = shallow(<Search {...props} />);
    wrapper.find("input").simulate("change");
    expect(props.onChange).toHaveBeenCalled();
  })
})
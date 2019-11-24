import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import toJson from 'enzyme-to-json';

describe('<Search >', () => {
  it('should render search component', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Search onChange={fn} />);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').type()).toBe('input');
  });
  it('should match the snapshot', () => {
    const wrapper = shallow(<Search onChange={() => {}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should respond on typing', () => {
    const wrapper = shallow(<Search onChange={() => {}} />);
  });
});

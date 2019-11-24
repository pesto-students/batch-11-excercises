import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pokemon from '../Pokemon';

describe('<Pokemon>', () => {
  it('should render <Pokemon> component', () => {
    const wrapper = shallow(<Pokemon pokemon="butterfree" id="12" />);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  });
  it('should match the snapshot', () => {
    const tree = shallow(<Pokemon pokemon="butterfree" id="12" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});

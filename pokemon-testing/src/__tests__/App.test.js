import React from 'react';
import { shallow, mount } from 'enzyme';

import Pokemon from '../components/Pokemon';

import Search from '../components/Search';

describe('Pokemon component ', () => {
  const wrapper = shallow(<Pokemon pokemon="Pikachu" />);
  it('should contain button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });
  it('should display text', () => {
    expect(wrapper.find('p').length).toBeGreaterThanOrEqual(1);
  });
});

describe('Search Component', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<Search onChange={onChange} />);
  it('should contain function to handle input', () => {
    expect(typeof wrapper.prop('onChange')).toBe('function');
  });

  it('should call onChange when input changes', () => {
    wrapper.find('input').simulate('change', { target: { value: 'pik' } });
    expect(onChange).toHaveBeenCalled();
  });
});


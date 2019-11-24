import React from 'react';
import { shallow } from 'enzyme';

import Search from '../components/Search';

describe('<Search /> ', () => {
  it('Should render input element properly', () => {
    const wrapper = shallow(<Search onChange={() => {}} />);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').props().type).toBe('text');
  });

  it('Should call onchange on input change', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Search onChange={fn} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Pikachu' } });
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

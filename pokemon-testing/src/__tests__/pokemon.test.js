import React from 'react';
import { shallow } from 'enzyme';

import Pokemon from '../components/Pokemon';

describe('<Pokemon /> ', () => {
  it('Should render all the required elements', () => {
    const wrapper = shallow(<Pokemon pokemon={{ name: 'pikachu', id: '25' }} />);
    expect(wrapper.find('li').length).toBe(1);
    expect(wrapper.find('.pokemons__sprite').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('Should render the name of pokemon properly', () => {
    const wrapper = shallow(<Pokemon pokemon={{ name: 'pikachu', id: '25' }} />);
    wrapper.find('button').props();
    expect(wrapper.find('p').text()).toBe('pikachu');
  });

  it('Should have the id of pokemon in background url properly', () => {
    const wrapper = shallow(<Pokemon pokemon={{ name: 'pikachu', id: '25' }} />);
    expect(wrapper.find('button').props().style.backgroundImage).toBe('url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)');
  });
});

import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from '../containers/Page/Page';

describe('<Page />', () => {
  it('calls componentDidMount, fetch pokemons', () => {
    const props = {
      pageActions: {
        fetchPokemons: jest.fn(),
      },
      page: {
        displayedPokemons: [],
        isFetched: false,
      },
    }
    jest.spyOn(Page.prototype, 'componentDidMount');
    const wrapper = shallow(<Page {...props} />);
    expect(Page.prototype.componentDidMount.mock.calls.length).toBe(1)
    expect(props.pageActions.fetchPokemons).toHaveBeenCalled();
  });
  
  it('calls filterPokemon on input change', () => {
    const props = {
      pageActions: {
        filterPokemons: jest.fn(),
      },
    }
    const wrapper = shallow(<Page {...props} />);
    wrapper.find('input')
  });
})
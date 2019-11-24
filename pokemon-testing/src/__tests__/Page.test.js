import React from 'react'
import { shallow, mount } from 'enzyme';

import Page from '../containers/Page/Page';
import Search from '../components/Search';

describe('<Page />', () => {
  it('renders the Page component', () => {
    const props = {
      pageActions: {
        filterPokemons: jest.fn(),
        fetchPokemons: jest.fn(),
      },
      page: {
        displayedPokemons: [],
        isFetched: false,
      },
    }
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

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
});

describe('Integration Tests for Page and Search', () => {
  test('should render Search component', () => {
    const props = {
      pageActions: {
        filterPokemons: jest.fn(),
        fetchPokemons: jest.fn(),
      },
      page: {
        displayedPokemons: [],
        isFetched: false,
      },
    }
    const wrapper = mount(<Page {...props} />);
    expect(wrapper.find(Search).length).toEqual(1);
  });

  it('allow user to search for pokemons, calls filterPokemons', () => {
    const filterPokemons = jest.fn();
    const props = {
      pageActions: {
        filterPokemons,
        fetchPokemons: jest.fn(),
      },
      page: {
        displayedPokemons: [],
        isFetched: false,
      },
    }

    const component = mount(<Page {...props} />);
    const searchComponent = component.find(Search);
    const input = searchComponent.find('input');
    expect(input.length).toBe(1);
    input.simulate('change', {
      target: { value: 'pikachu' }
    });
    expect(filterPokemons).toHaveBeenCalledWith('pikachu');
  });
});
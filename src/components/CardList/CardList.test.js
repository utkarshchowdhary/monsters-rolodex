import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('should render CardList component', () => {
  const mockMonsters = [{ id: 1, name: 'anonymous', gender: 0 }];
  const wrapper = shallow(<CardList monsters={mockMonsters} />);
  expect(wrapper).toMatchSnapshot();
});

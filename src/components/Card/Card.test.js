import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('should render Card component', () => {
  const mockMonster = { id: 1, name: 'anonymous', gender: 0 };
  const wrapper = shallow(<Card monster={mockMonster} />);
  expect(wrapper).toMatchSnapshot();
});

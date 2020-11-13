import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

let mockPlaceholder, mockHandleTextChange, wrapper;

beforeEach(() => {
  mockPlaceholder = 'Some Content';
  mockHandleTextChange = jest.fn();
  wrapper = shallow(
    <SearchBox
      placeholder={mockPlaceholder}
      handleTextChange={mockHandleTextChange}
    />
  );
});

it('should render SearchBox component', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should call handleTextChange on input change', () => {
  wrapper.find('input').at(0).simulate('change');
  expect(mockHandleTextChange).toHaveBeenCalled();
});

import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header';

const search = 'search text';
const location = {
  search: `?search=${search}`,
};

test('Header', () => {
  const component = mount(<Header location={location} />);

  expect(component.state('searchValue')).toEqual(search);
  expect(toJson(component)).toMatchSnapshot();
});

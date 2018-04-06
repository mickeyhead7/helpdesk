import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header';

const location = {
  search: 'search text',
};

test('Header', () => {
  const component = mount(<Header location={location} />);

  expect(toJson(component)).toMatchSnapshot();
});

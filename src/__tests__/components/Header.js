import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../components/Header';

const search = 'search text';

test('Header', () => {
  const component = mount(<Header search={search} />);

  expect(component.state('searchValue')).toEqual(search);
  expect(toJson(component)).toMatchSnapshot();
});

test('Entering a search string should update the component state', () => {
  const component = mount(<Header search={search} />);
  const searchInput = component.find('input#search');
  const newValue = 'New search text';

  searchInput.simulate('change', {
    target: {
      value: newValue,
    },
  });

  expect(component.state('searchValue')).toEqual(newValue);
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SearchResults } from '@Components/SearchResults';

const articles = [];

test('SearchResults', () => {
  const props = {
    locale: 'en-GB',
    articles,
    search: 'search-text',
  };
  const component = shallow(<SearchResults {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});

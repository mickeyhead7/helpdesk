import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from 'gatsby-link';
import { TagList } from '../../Components/TagList';

const tags = ['tag-one', 'tag-two', 'tag-three'];

test('Header', () => {
  const props = {
    locale: 'en-GB',
    tags,
  };
  const component = shallow(<TagList {...props} />);
  const expectedTagsLength = tags.length + 1;

  expect(component.find(Link)).toHaveLength(expectedTagsLength);
  expect(toJson(component)).toMatchSnapshot();
});

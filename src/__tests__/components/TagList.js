import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Link from 'gatsby-link';
import TagList from '../../components/TagList';

const tags = ['tag-one', 'tag-two', 'tag-three'];

test('Header', () => {
  const component = shallow(<TagList tags={tags} />);
  const expectedTagsLength = tags.length + 1;

  expect(component.find(Link)).toHaveLength(expectedTagsLength);
  expect(toJson(component)).toMatchSnapshot();
});

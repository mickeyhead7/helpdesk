import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Homepage } from '@Components/Homepage';

const article = {
  node: {
    frontmatter: {
      excerpt: 'This is the article excerpt.',
      date: '1970-01-01 00:00:00',
      title: 'Article title',
      path: '/article-path',
    },
    html: <div>Some html</div>,
  },
};

test('Homepage', () => {
  const props = {
    locale: 'en-GB',
    articles: [
      { ...article },
    ],
    tags: [
      'tag-one',
      'tag-two',
      'tag-three',
    ],
  };
  const component = shallow(<Homepage {...props} />);

  expect(toJson(component)).toMatchSnapshot();
});

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Article } from '@Components/Article';

const content = {
  locale: 'en-GB',
  frontmatter: {
    date: '1970-01-01 00:00:00',
    title: 'Article title',
    path: '/article-path',
  },
  html: <div>Some html</div>,
};

test('Article', () => {
  const article = {
    ...content,
    prev: content,
    next: content,
  };
  const component = shallow(<Article {...article} />);

  expect(toJson(component)).toMatchSnapshot();
});
